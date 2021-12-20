import React, { useCallback, useEffect, useState } from 'react'
import { useListener } from 'react-bus'
import useApi from '@api/useApi'
import Divider from '@components/templates/Divider'
import Button from '@components/templates/Button'
import GoodsList from '@components/ui/GoodsList'
import Pagination from '@components/templates/Pagination'

const Like = () => {
  const { userApi } = useApi()

  const [goodsList, setGoodsList] = useState({
    elements: [],
    totalElementCount: 0,
  })
  const [goodsListStatus, setGoodsListStatus] = useState({
    isSelling: true,
  })
  const [checkGoodsOptions, setCheckGoodsOptions] = useState({
    params: {
      page: 1,
      size: 10,
    },
  })

  useListener('fetchUserProfile', async () => {
    await fetchUserLikes()
  })

  useEffect(() => {
    return () => {
      window.removeEventListener('fetchUserProfile', null)
    }
  }, [])

  useEffect(async () => {
    await fetchUserLikes()
  }, [goodsListStatus, checkGoodsOptions])

  const handleCheckGoods = pageNum => {
    setCheckGoodsOptions({
      params: {
        ...checkGoodsOptions.params,
        page: pageNum,
      },
    })
  }

  const fetchUserLikes = useCallback(async () => {
    const tradeStatusCode = goodsListStatus.isSelling ? 4 : 8
    const res = await userApi.getUserLikeArticles({
      tradeStatusCode,
      params: checkGoodsOptions.params,
    })

    if (Number(res.code) !== 200) {
      return alert('찜한 상품 조회 시, 문제가 발생하였습니다!')
    }

    setGoodsList({
      elements: res.data.elements,
      totalElementCount: res.data.pageInfo.totalElementCount,
    })
  }, [])

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
        <GoodsList
          haveAuth
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

export default Like
