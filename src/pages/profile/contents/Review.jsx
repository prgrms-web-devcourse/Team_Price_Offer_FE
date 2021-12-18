import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@components/templates/Avatar'
import Button from '@components/templates/Button'
import Divider from '@components/templates/Divider'
import Pagination from '@components/templates/Pagination'
import ModalMyReview from '@components/ui/modal/ModalMyReview'
import ModalWriteReview from '@components/ui/modal/ModalWriteReview'
import { userApi } from '@api/apis'

const Review = ({ userId }) => {
  const [postIdOfReview, setPostIdOfReview] = useState(null)
  const [goodsList, setGoodsList] = useState({
    elements: [],
    totalElementCount: 0,
  })
  const [goodsListStatus, setGoodsListStatus] = useState({
    isSellingReview: true,
  })
  const [checkReviewOptions, setCheckReviewOptions] = useState({
    memberId: userId,
    params: {
      page: 1,
      size: 10,
    },
  })
  const [visibleReviewModal, setVisibleReviewModal] = useState(false)
  const [visibleWriteReviewModal, setVisibleWriteReviewModal] = useState(false)

  const handleCheckReviews = pageNum => {
    setCheckReviewOptions({
      ...checkReviewOptions,
      params: {
        ...checkReviewOptions.params,
        page: pageNum,
      },
    })
  }

  const handleReviewModal = (postId, isWriteModal) => {
    setPostIdOfReview(postId)

    if (isWriteModal) {
      setVisibleWriteReviewModal(true)
      return
    }

    setVisibleReviewModal(true)
  }

  useEffect(async () => {
    const res = goodsListStatus.isSellingReview
      ? await userApi.getUserSellReviews(checkReviewOptions)
      : await userApi.getUserBuyReviews(checkReviewOptions)

    if (Number(res.code) !== 200) {
      return alert('거래후기 조회 시, 문제가 발생하였습니다!')
    }

    setGoodsList({
      elements: res.data.elements,
      totalElementCount: res.data.pageInfo.totalElementCount,
    })
  }, [goodsListStatus, checkReviewOptions])

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
    <>
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
        <div className="result-content">
          <div className="review">
            <ul className="review-list" style={ulStyle}>
              {goodsList.elements.map(item => (
                <>
                  <li key={item.id} className="review-item">
                    <div className="review-profile-box">
                      <Avatar
                        src={item.reviewer.profileImageUrl}
                        className="review-profile-img"
                        style={avatarStyle}
                      />
                      <div className="review-profile_inform">
                        <div className="review-reviewer">
                          <span className="review-reviewer_name">
                            {item.reviewer.nickname}
                          </span>
                          <span className="review-reviewer_level">
                            Lv. {item.reviewer.offerLevel}
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
                              {goodsListStatus.isSellingReview
                                ? '판매상품'
                                : '구매상품'}
                              <Divider type="vertical" />
                              {item.article.title}
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
                        onClick={() =>
                          handleReviewModal(
                            item.article.id,
                            item.isWritingAvailableFromCurrentMember,
                          )
                        }
                        style={reviewBtnStyle}
                        className={`review-review_btn ${
                          !item.isWritingAvailableFromCurrentMember && 'leave'
                        }`}>
                        {item.isWritingAvailableFromCurrentMember
                          ? '후기 남기기'
                          : '후기 보기'}
                      </Button>
                    </div>
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
        </div>
        <Pagination
          size={checkReviewOptions.params.size}
          postListLength={goodsList.totalElementCount}
          paginate={handleCheckReviews}
          setStartPage={handleCheckReviews}
        />
      </div>
      <ModalMyReview
        postId={postIdOfReview}
        visible={visibleReviewModal}
        onClose={() => setVisibleReviewModal(false)}>
        리뷰 보기 모달
      </ModalMyReview>
      <ModalWriteReview
        postId={postIdOfReview}
        visible={visibleWriteReviewModal}
        onClose={() => setVisibleWriteReviewModal(false)}>
        리뷰 쓰기 모달
      </ModalWriteReview>
    </>
  )
}

Review.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Review
