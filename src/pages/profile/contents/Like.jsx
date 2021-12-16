import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Divider from '@components/templates/Divider'
import Button from '@components/templates/Button'
import GoodsList from '@components/ui/GoodsList'
import { userApi } from '@api/apis'

const Like = ({ userId }) => {
  const [goodsList, setGoodsList] = useState([])
  const [goodsListStatus, setGoodsListStatus] = useState({
    isSelling: true,
  })

  useEffect(async () => {
    if (goodsListStatus.isSelling) {
      const res = await userApi.getUserLikeArticles({ tradeStatusCode: 4 })

      if (Number(res.code) !== 200) {
        return alert('찜한 상품 조회 시, 문제가 발생하였습니다!')
      }

      setGoodsList(res.data.elements)
      return
    }

    const res = await userApi.getUserLikeArticles({ tradeStatusCode: 8 })

    if (Number(res.code) !== 200) {
      return alert('찜한 상품 조회 시, 문제가 발생하였습니다!')
    }

    setGoodsList(res.data.elements)
  }, [goodsListStatus])

  return (
    <div className="result-container">
      <div className="result-title">찜한 상품</div>
      <div className="result-btn-box">
        <Button
          onClick={() => setGoodsListStatus({ isSelling: true })}
          className={`result-btn_item ${
            goodsListStatus.isSelling ? 'selected' : ''
          }`}>
          판매 중
        </Button>
        <Button
          onClick={() => setGoodsListStatus({ isSelling: false })}
          className={`result-btn_item ${
            !goodsListStatus.isSelling ? 'selected' : ''
          }`}>
          판매 완료
        </Button>
      </div>
      <div className="result-lineup-box">
        <span className="result-lineup_item selected">최신순</span>
        <Divider type="vertical" />
        <span className="result-lineup_item">낮은 가격순</span>
        <Divider type="vertical" />
        <span className="result-lineup_item">높은 가격순</span>
      </div>
      <div className="result-content">
        <GoodsList goodsList={goodsList} className="sale-goodList" />
      </div>
    </div>
  )
}

Like.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Like
