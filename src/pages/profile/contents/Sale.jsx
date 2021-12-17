import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Divider from '@components/templates/Divider'
import Button from '@components/templates/Button'
import GoodsList from '@components/ui/GoodsList'
import Pagination from '@components/templates/Pagination'
import { userApi } from '@api/apis'

const Sale = ({ userId, state }) => {
  const [goodsList, setGoodsList] = useState({
    elements: [],
    totalElementCount: 0,
  })
  const [goodsListStatus, setGoodsListStatus] = useState({
    isSelling: true,
  })
  const [checkGoodsOptions, setCheckGoodsOptions] = useState({
    memberId: userId,
    params: {
      page: 1,
      size: 10,
    },
  })

  const handleCheckGoods = pageNum => {
    setCheckGoodsOptions({
      ...checkGoodsOptions,
      params: {
        ...checkGoodsOptions.params,
        page: pageNum,
      },
    })
  }

  useEffect(async () => {
    const res = goodsListStatus.isSelling
      ? await userApi.getUserTradingAtricles(checkGoodsOptions)
      : await userApi.getUserCompletedArticles(checkGoodsOptions)

    if (Number(res.code) !== 200) {
      return alert('상품 조회 시, 문제가 발생하였습니다!')
    }

    setGoodsList({
      elements: res.data.elements,
      totalElementCount: res.data.pageInfo.totalElementCount,
    })
  }, [goodsListStatus, checkGoodsOptions])

  return (
    <div className="result-container">
      <div className="result-title">판매 상품</div>
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
        <GoodsList
          haveAuth={!!state.token}
          goodsList={goodsList.elements}
          className="sale-goodList"
        />
      </div>
      <Pagination
        size={checkGoodsOptions.params.size}
        postListLength={goodsList.totalElementCount}
        paginate={handleCheckGoods}
        setStartPage={handleCheckGoods}
      />
    </div>
  )
}

Sale.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  state: PropTypes.shape({ root: PropTypes.string }),
}

export default Sale
