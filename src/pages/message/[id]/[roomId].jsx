import React, { useState, useEffect, useCallback, useRef } from 'react'
import Avatar from '@components/templates/Avatar'
import MessageBox from '@components/templates/Message'
import TextArea from '@components/templates/Textarea'
import IconButton from '@components/templates/IconButton'
import { FETCH } from '@utils/constant/icon'
import { messageApi } from '@api/apis'
import Image from '@components/templates/Image'
import Router from 'next/router'
import { useAuthContext } from '@hooks/useAuthContext'
import Button from '@components/templates/Button'
import { Formik, useFormik } from 'formik'
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
  const [messageBoxList, setMessageBoxList] = useState()
  const [messageList, setMessageList] = useState(null)
  const [messageRoomInfo, setMessageRoomInfo] = useState(null)
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    lastPage: null,
  })
  const selectedMessageRoomId = useRef()
  const scrollBottomRef = useRef()
  const messageContentRef = useRef()
  const { state } = useAuthContext()
  const { nickname, id } = state.userData
  const messageFormik = useFormik({
    initialValues: {
      message: '',
    },
    validate,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      await messageApi.postMessage({
        messageRoomId: selectedMessageRoomId.current,
        message: {
          content: values.message,
        },
      })
      // setSubmitting(false)
      // resetForm({
      //   values: {
      //     message: '',
      //   },
      // })
    },
  })

  const fetchMessageBox = useCallback(async () => {
    const { data } = await messageApi.getMessageBox()
    setMessageBoxList(data.elements)
  }, [])

  const fetchSelectedMessageRoom = useCallback(async selectedRoomId => {
    const messageRoomId = selectedRoomId || roomId
    if (
      messageRoomId === 'null' ||
      messageRoomId === selectedMessageRoomId.current
    ) {
      return
    }

    selectedMessageRoomId.current = messageRoomId

    const roomInfoRes = await messageApi.getMessageRoomInfo({
      messageRoomId,
    })

    setMessageRoomInfo(() => roomInfoRes.data)

    Router.replace(`/message/${id}/${messageRoomId}`)

    setMessageList(null)

    pageInfo.lastPage !== null &&
      setPageInfo({
        page: 1,
        lastPage: null,
      })

    fetchMessageList(pageInfo)

    scrollToBottom()
  }, [])

  const fetchMessageList = useCallback(async newPageInfo => {
    const page = newPageInfo ? newPageInfo.page : pageInfo.page
    const messageListRes = await messageApi.getMessageList({
      messageRoomId: selectedMessageRoomId.current,
      params: {
        page,
        size: 20,
      },
    })
    pageInfo.lastPage === null &&
      setPageInfo({
        ...pageInfo,
        lastPage: messageListRes.data.pageInfo.lastPageNumber,
      })

    setMessageList(prev => {
      const newMessageList =
        prev === null
          ? messageListRes.data.elements
          : [...messageListRes.data.elements, ...prev]

      return newMessageList
    })
  }, [])

  const fetchDeleteMessageRoom = useCallback(async () => {
    await messageApi.deleteMessageRoom(selectedMessageRoomId)
  })

  const printMessageTime = time => {
    const newTime = time.split('T')[1].split(':')

    return `${newTime[0] > 12 ? '오후' : '오전'} ${
      newTime[0] > 12 ? newTime[0] - 12 : 12 - newTime[0]
    }:${newTime[1]}`
  }

  const messageOptimisticUpdate = e => {
    if (!messageFormik.values.message) {
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
        content: messageFormik.values.message,
        createdDate,
        isSendMessage: true,
      },
    ])
    messageContentRef.current.value = ''
  }

  const clickMoreMessageBtn = () => {
    if (pageInfo.page + 1 > pageInfo.lastPage) {
      return
    }

    setPageInfo(prev => {
      const newPageInfo = {
        ...prev,
        page: prev.page + 1,
      }

      fetchMessageList(newPageInfo)
      return newPageInfo
    })
  }

  const scrollToBottom = useCallback(() => {
    scrollBottomRef.current &&
      (scrollBottomRef.current.scrollTop = scrollBottomRef.current.scrollHeight)
  }, [])

  useEffect(() => {
    fetchMessageBox()
    fetchSelectedMessageRoom()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messageList])

  const sendMessageEnterPress = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      messageOptimisticUpdate()
      messageFormik.handleSubmit()
    }
  }

  const printList = messageList?.map(message =>
    message.isSendMessage ? (
      <div className="message-chat_buyer" key={message.messageId}>
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
      <div className="message-chat_seller" key={message.messageId}>
        <Avatar
          className="message-avatar"
          src={messageRoomInfo.messagePartnerInfo.profileImageUrl}
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
  )

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
        {messageList && messageRoomInfo && (
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
              <Button onClick={fetchDeleteMessageRoom}>나가기</Button>
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
                  {pageInfo.lastPage && (
                    <Button
                      style={{
                        width: '30%',
                        height: '10%',
                        textAlign: 'center',
                        margin: '2% 35% 6% 35%',
                      }}
                      onClick={clickMoreMessageBtn}>
                      더보기
                    </Button>
                  )}

                  {messageList && printList}
                </div>
                <div className="message-textarea-wrapper">
                  <form onSubmit={messageFormik.handleSubmit}>
                    <textarea
                      name="message"
                      placeholder="메시지를 입력해주세요."
                      className="message-textarea"
                      onChange={messageFormik.handleChange}
                      value={messageFormik.values.message}
                      onKeyUp={sendMessageEnterPress}
                      ref={messageContentRef}
                    />
                    <div className="message-limit_box">
                      <div className="message-limit_text">
                        <span className="message-limit_current">0</span>
                        <span>/ 100</span>
                      </div>
                      <button
                        type="submit"
                        className={`message-sending_btn
                          ${
                            messageFormik.values.message && 'sending-available'
                          }`}
                        onClick={messageOptimisticUpdate}>
                        전송
                      </button>
                    </div>
                    <div className="validation">
                      {messageFormik.errors.message}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MessagePage
