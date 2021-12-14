import React from 'react'
import Divider from '@components/templates/Divider'
import Button from '@components/templates/Button'
import GoodsList from '@components/ui/GoodsList'
import { GOODSLIST } from '@data/dummy/goodsList'

const Like = () => {
  return (
    <div className="result-container">
      <div className="result-title">가격 제안</div>
      <div className="result-btn-box">
        <Button className="result-btn_item selected">판매 중</Button>
        <Button className="result-btn_item">판매 완료</Button>
      </div>
      <div className="result-lineup-box">
        <span className="result-lineup_item selected">최신순</span>
        <Divider type="vertical" />
        <span className="result-lineup_item">낮은 가격순</span>
        <Divider type="vertical" />
        <span className="result-lineup_item">높은 가격순</span>
      </div>
      <div className="result-content">
        <GoodsList goodsList={GOODSLIST} className="Like-goodList" />
      </div>
    </div>
  )
}

export default Like
