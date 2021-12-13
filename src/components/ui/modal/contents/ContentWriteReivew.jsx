import React from 'react'
import DIVIDER from '@components/templates/Divider'
import Iconbutton from '@components/templates/IconButton'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'
import { ICON_TYPES } from '@utils/constant/icon'

const { reviewsoso, reviewGood, reviewBad } = ICON_TYPES

const goodImgurl = reviewGood
const sosoImgurl = reviewsoso
const badImgurl = reviewBad

const ContentWriteReivew = props => {
  return (
    <div className="writereview">
      <div className="writereview-top-wrapper">
        <div className="text-wrapper">
          <div className="text-wrapper-texts">
            <div className="seller-name">황금효정</div>
            <div className="writereview-top-wrapper-text">
              님과의 거래는 어떠셨나요?
            </div>
          </div>
        </div>

        <div className="writereview-top-wrapper-explaintext">
          거래 후기를 남겨주세요!
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
          <div className="goodsbox-title">잠이 오는 보약 &gt;</div>
          <div className="goodsbox-state">새 생품 &gt;</div>
          <div className="goodsbox-category">식품</div>
        </div>
      </div>

      <div className="writereview-middle-wrapper">
        <div className="icon-list">
          <Iconbutton src={goodImgurl} className="icon" />
          <Iconbutton src={sosoImgurl} className="icon" />
          <Iconbutton src={badImgurl} className="icon" />
        </div>
        <TextArea
          className="writereview-area"
          placeholder="상대방에게 거래후기를 남겨주세요!"
        />
        <div className="review-length">0 /100</div>
      </div>

      <div className="writereview-bottom-wrapper">
        <Button className="writereview-button">거래 후기 남기기</Button>
      </div>
    </div>
  )
}

export default ContentWriteReivew
