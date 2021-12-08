import React from 'react'
import Avatar from '@components/templates/Avatar'
import MessageBox from '@components/templates/Message'
import TextArea from '@components/templates/Textarea'

const MessagePage = () => {
  const fetchImgPath = require('@assets/images/icon/fetch.svg').default.src

  return (
    <div className="message">
      <div className="message-list-wrapper">
        <div className="message-header">
          <h2 className="message-header-title">히텧님의 쪽지함</h2>
        </div>
        <div className="message-body">
          <div className="message-list">
            <div className="message-item">
              <div className="message-item_left">
                <Avatar
                  className="message-avatar"
                  src="https://picsum.photos/100"
                  alt="avatar"
                />
                <div className="message-item_info-wrapper">
                  <p className="message-item_info">
                    <span className="message-item_info-name">황금효정</span>
                    <span className="message-item_info-meta">
                      관악구 봉천동 · 2분전
                    </span>
                  </p>
                  <p className="message-item_text">팔렸습니다 ㅠㅠ</p>
                </div>
              </div>
              <img
                className="message-product"
                src="https://picsum.photos/100"
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="message-chat-wrapper">
        <div className="message-header chat">
          <h2 className="message-header-title">황금요정님과의 쪽지</h2>
          <img src={fetchImgPath} alt="fetch" />
        </div>
        <div className="message-body">
          <div className="message-chat_info">
            <img
              className="message-product"
              src="https://picsum.photos/100"
              alt="product"
            />
            <p className="message-product_info">
              <span className="message-product_info-title">
                신발 수납(슈박스), 화장품 수납 + 적재 가능
              </span>
              <p className="message-product_info-price">
                <span className="message-product_info-default">1,000원</span>
                <span className="message-product_info-offer">
                  (제안가: 800원)
                </span>
              </p>
            </p>
          </div>
          <div className="message-chat_cont">
            <div className="message-chat">
              <div className="message-chat_seller">
                <Avatar
                  className="message-avatar"
                  src="https://picsum.photos/100"
                  alt="avatar"
                />
                <div className="chat-wrapper">
                  <div className="message-wrapper">
                    <MessageBox>다음 주말 괜찮으실까요?</MessageBox>
                    <MessageBox>잠시만요~</MessageBox>
                  </div>
                  <span className="message-time">오후 9:41</span>
                </div>
              </div>
              <div className="message-chat_buyer">
                <div className="chat-wrapper">
                  <span className="message-time">오후 9:41</span>
                  <div className="message-wrapper">
                    <MessageBox>죄송합니다 ㅠㅠ</MessageBox>
                  </div>
                </div>
              </div>
            </div>
            <TextArea className="message-textarea" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagePage
