import React from 'react'
import DIVIDER from '@components/templates/Divider'
import Iconbutton from '@components/templates/IconButton'
import Button from '@components/templates/Button'
import { REVIEW_SOSO, REVIEW_GOOD, REVIEW_BAD } from '@utils/constant'

const ContentMyReview = ({ postInfo, onClose }) => {
  return (
    <div className="writereview">
      <div className="writereview-top-wrapper">
        <div className="text-wrapper">
          <div className="text-wrapper-texts">
            <div className="seller-name">{postInfo?.nickname}</div>
            <div className="writereview-top-wrapper-text">
              님에게 작성한 후기
            </div>
          </div>
        </div>
        <div className="writereview-top-wrapper-goodsbox">
          <div className="goodsbox-text">거래상품</div>
          <div>
            <DIVIDER
              type="vertical"
              marginSize="3"
              style={{
                border: '0px solid #ddd',
              }}
            />
          </div>
          <div className="goodsbox-title">{postInfo?.data?.title}</div>
        </div>
      </div>

      <div className="mywritereview-middle-wrapper">
        <div className="icon-list">
          <Iconbutton src={REVIEW_GOOD} className="icon" />
          <Iconbutton src={REVIEW_SOSO} className="icon" />
          <Iconbutton src={REVIEW_BAD} className="icon" />
        </div>
        <div className="writereview-area">{postInfo?.reviewContent}</div>
      </div>

      <div className="writereview-bottom-wrapper">
        <Button className="writereview-button" onClick={onClose}>
          닫기
        </Button>
      </div>
    </div>
  )
}

export default ContentMyReview
