import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useApi from '@api/useApi'
import Divider from '@components/templates/Divider'
import Button from '@components/templates/Button'
import GoodsList from '@components/ui/GoodsList'
import Pagination from '@components/templates/Pagination'

const Sale = ({ userId }) => {
  const { userApi } = useApi()

  const [goodsList, setGoodsList] = useState({
    elements: [],
    totalElementCount: 0,
  })
  const [goodsListStatus, setGoodsListStatus] = useState({
    isSelling: true,
  })
  const [goodsPageOptions, setGoodsPageOptions] = useState({
    page: 1,
    size: 10,
  })

  const handleCheckGoods = pageNum => {
    setGoodsPageOptions({
      ...goodsPageOptions,
      page: pageNum,
    })
  }

  const fetchGoodsList = async () => {
    const goodsOptions = {
      memberId: userId,
      params: goodsPageOptions,
    }

    const res = goodsListStatus.isSelling
      ? await userApi.getUserTradingAtricles(goodsOptions)
      : await userApi.getUserCompletedArticles(goodsOptions)

    if (Number(res.code) !== 200) {
      return alert('상품 조회 시, 문제가 발생하였습니다!')
    }

    setGoodsList({
      elements: res.data.elements,
      totalElementCount: res.data.pageInfo.totalElementCount,
    })
  }

  useEffect(async () => {
    await fetchGoodsList()
  }, [goodsListStatus, goodsPageOptions, userId])

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
        <GoodsList goodsList={goodsList.elements} className="sale-goodList" />
      </div>
      <Pagination
        size={goodsPageOptions.size}
        postListLength={goodsList.totalElementCount}
        paginate={handleCheckGoods}
        setStartPage={handleCheckGoods}
      />
    </div>
  )
}

Sale.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Sale
