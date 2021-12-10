import React from 'react'
import DIVIDER from '@components/templates/Divider'
import Avatar from '@components/templates/Avatar'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'

const ContentConfirmBuyer = () => {
  return (
    <div className="confrim">
      <div className="confirm-top-wrapper">
        <div className="confirm-top-wrapper-confirmtext">
          구매자를 확정해주세요!
        </div>
        <div className="confirm-top-wrapper-explaintext">
          판매 완료는 반드시 구매자를 확정해야 합니다!
        </div>
        <div className="confirm-top-wrapper-goodsbox">
          <div className="goodsbox-text">거래상품</div>
          <div>
            <DIVIDER
              type="vertical"
              marginSize="3"
              style={{ border: '0px solid #ddd' }}
            />
          </div>
          <div className="goodsbox-title">잠이 오는 보약 &gt;</div>
          <div className="goodsbox-state">새 생품 &gt;</div>
          <div className="goodsbox-category">식품</div>
        </div>
      </div>

      <DIVIDER
        type="horizontal"
        marginSize="1"
        style={{
          width: '100%',
          border: '1px solid #ddd',
        }}
      />

      <div className="confirm-middle-wrapper">
        <div className="confirm-middle-wrapper-userinfo">
          <Avatar
            className="userinfo-userimg"
            src="https://picsum.photos/100"
            alt="avatar"
          />
          <div className="userinfo-detail">
            <div className="detail-name">
              <span className="username">황금효정</span>
              <span className="level">Lv 1</span>
            </div>
            <div className="detail-time">강북구 수유동 · 1시간전</div>
          </div>
        </div>
        <div className="confirm-middle-wrapper-userinfo">
          <Avatar
            className="userinfo-userimg"
            src="https://picsum.photos/100"
            alt="avatar"
          />
          <div className="userinfo-detail">
            <div className="detail-name">
              <span className="username">황금효정</span>
              <span className="level">Lv 1</span>
            </div>
            <div className="detail-time">강북구 수유동 · 1시간전</div>
          </div>
        </div>
        <div className="confirm-middle-wrapper-userinfo">
          <Avatar
            className="userinfo-userimg"
            src="https://picsum.photos/100"
            alt="avatar"
          />
          <div className="userinfo-detail">
            <div className="detail-name">
              <span className="username">황금효정</span>
              <span className="level">Lv 1</span>
            </div>
            <div className="detail-time">강북구 수유동 · 1시간전</div>
          </div>
        </div>
      </div>

      <div className="confirm-bottom-wrapper">
        <Button className="confirm-button">구매자 확정</Button>
      </div>
    </div>
  )
}

export default ContentConfirmBuyer
