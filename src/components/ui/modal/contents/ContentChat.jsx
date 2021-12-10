import React from 'react'
import DIVIDER from '@components/templates/Divider'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'
import { useFormik } from 'formik'
import validate from '@utils/validation'

const ContentChat = () => {
  return (
    <div className="writereview">
      <div className="writereview-top-wrapper">
        <div className="text-wrapper">
          <div className="text-wrapper-texts">
            <div className="seller-name">황금효정</div>
            <div className="writereview-top-wrapper-text">님께 쪽지 보내기</div>
          </div>
        </div>

        <div className="writereview-top-wrapper-explaintext">
          가격에 마음에 드셨다면 쪽지를 보내보세요!
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

      <div className="mywritereview-middle-wrapper">
        <TextArea
          className="writereview-area"
          placeholder="상대방에게 쪽지를 보내보세요!"
        />
        <div className="review-length">0 /100</div>
      </div>

      <div className="writereview-bottom-wrapper">
        <Button className="writereview-button">쪽지 보내기</Button>
      </div>
    </div>
  )
}

ContentChat.propTypes = {}

export default ContentChat
