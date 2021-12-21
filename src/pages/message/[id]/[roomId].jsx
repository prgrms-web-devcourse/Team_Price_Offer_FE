import React, { useState, useEffect, useCallback, useRef } from 'react'
import Avatar from '@components/templates/Avatar'
import MessageBox from '@components/templates/Message'
import IconButton from '@components/templates/IconButton'
import { FETCH, MESSAGE_CHATTING_EMPTY } from '@utils/constant'
import { messageApi } from '@api/apis'
import Image from '@components/templates/Image'
import Router from 'next/router'
import { useAuthContext } from '@hooks/useAuthContext'
import Button from '@components/templates/Button'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import { timeForToday, convertPrice } from '@utils/functions'

const fetchImgurl = FETCH

export const getServerSideProps = async context => {
  return {
    props: {
      userId: context.query.id,
      roomId: context.query.roomId,
    },
  }
}

const MessagePage = ({ roomId }) => {
  const [messageRoomInfo, setMessageRoomInfo] = useState(null)
  const [messageBoxList, setMessageBoxList] = useState()
  const [messageList, setMessageList] = useState(null)
  const currentPage = useRef(1)
  const lastPage = useRef(null)
  const selectedMessageRoomId = useRef()
  const scrollBottomRef = useRef()
  const { state } = useAuthContext()
  const { nickname, id } = state.userData
  const messageFormik = useFormik({
    initialValues: {
      messageContent: '',
    },
    validate,
    onSubmit: async values => {
      await messageApi.postMessage({
        messageRoomId: selectedMessageRoomId.current,
        message: {
          content: values.messageContent,
        },
      })

      values.messageContent = ''
    },
  })

  const fetchSelectedMessageRoom = useCallback(async selectedRoomId => {
    const messageRoomId = selectedRoomId || roomId

    if (
      messageRoomId === 'null' ||
      messageRoomId === selectedMessageRoomId.current
    ) {
      return
    }

    selectedMessageRoomId.current = messageRoomId
    currentPage.current = 1
    lastPage.current = null
    setMessageList(null)

    const roomInfoRes = await messageApi.getMessageRoomInfo({
      messageRoomId,
    })
    fetchMessageList()

    setMessageRoomInfo(roomInfoRes.data)

    Router.replace(`/message/${id}/${messageRoomId}`)
  }, [])

  const fetchMessageList = useCallback(async () => {
    const { data } = await messageApi.getMessageList({
      messageRoomId: selectedMessageRoomId.current,
      params: {
        page: currentPage.current,
        size: 20,
      },
    })

    !lastPage.current && (lastPage.current = data.pageInfo.lastPageNumber)

    setMessageList(prev => {
      const newMessageList =
        prev === null ? data.elements : [...data.elements, ...prev]

      const removeSameValue = new Set(newMessageList)
      const nextList = [...removeSameValue]
      return nextList
    })
  }, [])

  const messageOptimisticUpdate = () => {
    if (!messageFormik.values.messageContent) {
      return
    }

    const date = new Date()
    const createdDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    setMessageList([
      ...messageList,
      {
        messageId: createdDate,
        content: messageFormik.values.messageContent,
        createdDate,
        isSendMessage: true,
      },
    ])
  }

  const printMessageTime = time => {
    const newTime = time.split('T')[1].split(':')

    return `${newTime[0] > 12 ? '오후' : '오전'} ${
      newTime[0] > 12 ? newTime[0] - 12 : 12 - newTime[0]
    }:${newTime[1]}`
  }

  useEffect(async () => {
    const { data } = await messageApi.getMessageBox()
    setMessageBoxList(data.elements)
    fetchSelectedMessageRoom()
  }, [])

  useEffect(() => {
    scrollBottomRef.current &&
      (scrollBottomRef.current.scrollTop = scrollBottomRef.current.scrollHeight)
  }, [messageList])

  return (
    <div className="message">
      <div className="message-list-wrapper">
        <div className="message-header">
          <h2 className="message-header-title">{nickname}님의 쪽지함</h2>
        </div>
        <div className="message-body">
          <div className="message-list">
            {messageBoxList?.map(messageBox => (
              <div
                className="message-item"
                key={messageBox.messageRoomId}
                onClick={() =>
                  fetchSelectedMessageRoom(messageBox.messageRoomId)
                }>
                <div className="message-item_left">
                  <Avatar
                    className="message-avatar"
                    src={messageBox.userInfo.profileImageUrl}
                    alt="avatar"
                  />
                  <div className="message-item_info-wrapper">
                    <p className="message-item_info">
                      <span className="message-item_info-name">
                        {messageBox.userInfo.nickName}
                      </span>
                      <span className="message-item_info-meta">
                        {messageBox.userInfo.address} ·{' '}
                        {timeForToday(messageBox.message.createdDate)}
                      </span>
                    </p>
                    <p className="message-item_text">
                      {messageBox.message.content}
                    </p>
                  </div>
                </div>
                <Image
                  className="message-product"
                  src={messageBox.productImageUrl}
                  alt="product"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="message-chat-wrapper">
        {messageList && messageRoomInfo ? (
          <>
            <div className="message-header chat">
              <h2 className="message-header-title">
                {messageRoomInfo.messagePartnerInfo.nickName}과의 쪽지
              </h2>
              <IconButton
                src={fetchImgurl}
                alt="fetch"
                onClick={() => Router.reload(window.location.pathname)}
              />
            </div>
            <div className="message-body">
              <div className="message-chat_info">
                <img
                  className="message-product"
                  src={messageRoomInfo.articleInfo.productImageUrl}
                  alt="product"
                />
                <div className="message-product_info">
                  <span className="message-product_info-title">
                    {messageRoomInfo.articleInfo.title}
                  </span>
                  <p className="message-product_info-price">
                    <span className="message-product_info-default">
                      {convertPrice(messageRoomInfo.articleInfo.price)}원
                    </span>
                    <span className="message-product_info-offer">
                      (제안가:{' '}
                      {convertPrice(messageRoomInfo.articleInfo.offerPrice)}
                      원)
                    </span>
                  </p>
                </div>
              </div>
              <div className="message-chat_cont">
                <div className="message-chat" ref={scrollBottomRef}>
                  {currentPage.current !== lastPage.current &&
                    lastPage.current !== 1 && (
                      <Button
                        style={{
                          width: '30%',
                          height: '10%',
                          textAlign: 'center',
                          margin: '2% 35% 6% 35%',
                        }}
                        onClick={() => {
                          if (currentPage.current + 1 > lastPage.current) {
                            return
                          }

                          currentPage.current += 1
                          fetchMessageList()
                        }}>
                        더보기
                      </Button>
                    )}

                  {messageList?.map(message =>
                    message.isSendMessage ? (
                      <div
                        className="message-chat_buyer"
                        key={message.messageId}>
                        <div className="chat-wrapper">
                          <span className="message-time">
                            {printMessageTime(message.createdDate)}
                          </span>
                          <div className="message-wrapper">
                            <MessageBox className="message-chat_box">
                              {message.content}
                            </MessageBox>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="message-chat_seller"
                        key={message.messageId}>
                        <Avatar
                          className="message-avatar"
                          src={
                            messageRoomInfo.messagePartnerInfo.profileImageUrl
                          }
                          alt="avatar"
                        />
                        <div className="chat-wrapper">
                          <div className="message-wrapper">
                            <div className="message-chat_box-wrapper">
                              <MessageBox className="message-chat_box">
                                {message.content}
                              </MessageBox>
                            </div>
                          </div>
                          <span className="message-time">
                            {printMessageTime(message.createdDate)}
                          </span>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div className="message-textarea-wrapper">
                  <form onSubmit={messageFormik.handleSubmit}>
                    <textarea
                      name="messageContent"
                      placeholder="메시지를 입력해주세요."
                      className="message-textarea"
                      onChange={messageFormik.handleChange}
                      value={messageFormik.values.messageContent}
                      onKeyUp={e => {
                        if (e.keyCode === 13 && e.shiftKey === false) {
                          e.preventDefault()
                          messageOptimisticUpdate()
                          messageFormik.handleSubmit()
                        }
                      }}
                    />
                    <div className="message-limit_box">
                      <div className="message-limit_text">
                        <span className="message-limit_current">
                          {messageFormik.values.messageContent.length}
                        </span>
                        <span>/ 100</span>
                      </div>
                      <button
                        type="submit"
                        className={`message-sending_btn
                          ${
                            messageFormik.values.messageContent &&
                            'sending-available'
                          }`}
                        onClick={messageOptimisticUpdate}>
                        전송
                      </button>
                    </div>
                    <div className="validation">
                      {messageFormik.errors.messageContent}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="message-chat-empty">
            <div className="chat-empty_container">
              <img
                src={MESSAGE_CHATTING_EMPTY}
                alt="chat-empty_icn"
                className="chat-empty_icn"
              />
              <div className="chat-empty_text">쪽지할 상대를 선택해주세요.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessagePage
