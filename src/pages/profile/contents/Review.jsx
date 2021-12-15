import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@components/templates/Avatar'
import Button from '@components/templates/Button'
import Divider from '@components/templates/Divider'
import { userApi } from '@api/apis'

const Review = ({ userId }) => {
  const [goodsList, setGoodsList] = useState([])
  const [goodsListStatus, setGoodsListStatus] = useState({
    isSellingReview: true,
  })

  useEffect(async () => {
    if (goodsListStatus.isSellingReview) {
      const res = await userApi.getUserSellReviews(userId)

      if (Number(res.code) !== 200) {
        return alert('판매후기 조회 시, 문제가 발생하였습니다!')
      }

      setGoodsList(res.data.elements)
      return
    }

    const res = await userApi.getUserBuyReviews(userId)

    if (Number(res.code) !== 200) {
      return alert('구매후기 상품 조회 시, 문제가 발생하였습니다!')
    }

    setGoodsList(res.data.elements)
  }, [goodsListStatus])

  const ulStyle = {
    listStyle: 'none',
    fontSize: '14px',
  }

  const avatarStyle = {
    width: '85px',
    height: '85px',
  }
  const reviewBtnStyle = {
    height: '30px',
    fontSize: '14px',
  }

  const arrowImgPath = require('@assets/images/icon/profile_arrow.svg').default
    .src

  return (
    <div className="result-container">
      <div className="result-title">거래 후기</div>
      <div className="result-btn-box">
        <Button
          onClick={() => setGoodsListStatus({ isSellingReview: true })}
          className={`result-btn_item ${
            goodsListStatus.isSellingReview ? 'selected' : ''
          }`}>
          판매 후기
        </Button>
        <Button
          onClick={() => setGoodsListStatus({ isSellingReview: false })}
          className={`result-btn_item ${
            !goodsListStatus.isSellingReview ? 'selected' : ''
          }`}>
          구매 후기
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
        <div className="review">
          <ul className="review-list" style={ulStyle}>
            {/* {reviewList.map(item => (
              <>
                <li key={item.id} className="review-item">
                  <div className="review-profile-box">
                    <Avatar
                      src={item.src}
                      className="review-profile-img"
                      style={avatarStyle}
                    />
                    <div className="review-profile_inform">
                      <div className="review-reviewer">
                        <span className="review-reviewer_name">
                          {item.reviewer}
                        </span>
                        <span className="review-reviewer_level">
                          Lv. {item.level}
                        </span>
                      </div>
                      <div className="review-reviewer_content">
                        {item.content}
                      </div>
                      <Button
                        className="review-goods_btn-wrapper"
                        style={{ border: '1px solid #ccc' }}>
                        <div className="review-goods_btn">
                          <div className="review-goods_btn_text">
                            {item.goodsSold ? '판매상품' : '구매상품'}
                            <Divider type="vertical" />
                            {item.title}
                          </div>
                          <div className="review-goods_btn_icn">
                            <img
                              src={arrowImgPath}
                              alt="arrow"
                              className="review-goods_icon_arrow"
                            />
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="review-side-box">
                    <div style={{ width: '100%', textAlign: 'right' }}>
                      {item.time}
                    </div>
                    <Button
                      style={reviewBtnStyle}
                      className={`review-review_btn ${
                        !item.review && 'leave'
                      }`}>
                      {item.review === true ? '후기 보기' : '후기 남기기'}
                    </Button>
                  </div>
                </li>
                <hr />
              </>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

Review.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Review
