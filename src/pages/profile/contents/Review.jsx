import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useApi from '@api/useApi'
import Avatar from '@components/templates/Avatar'
import Button from '@components/templates/Button'
import Divider from '@components/templates/Divider'
import Pagination from '@components/templates/Pagination'
import ModalMyReview from '@components/ui/modal/ModalMyReview'
import ModalWriteReview from '@components/ui/modal/ModalWriteReview'
import { useListener } from 'react-bus'
import { useRouter } from 'next/router'

const Review = ({ userId, state }) => {
  const { userApi } = useApi()
  const router = useRouter()

  const [visibleReviewModal, setVisibleReviewModal] = useState(false)
  const [visibleWriteReviewModal, setVisibleWriteReviewModal] = useState(false)
  const [goodsListStatus, setGoodsListStatus] = useState({
    isSellingReview: true,
  })
  const [goodsList, setGoodsList] = useState({
    elements: [],
    totalElementCount: 0,
  })
  const [reviewOptions, setReviewOptions] = useState({
    memberId: userId,
    params: {
      page: 1,
      size: 10,
    },
  })
  const [postInfoOfReview, setPostInfoOfReview] = useState({
    id: null,
    data: null,
    nickname: null,
    reviewContent: null,
  })

  useListener('fetchUserReview', async () => {
    await fetchReviews()
  })

  useEffect(() => {
    return () => {
      window.removeEventListener('fetchUserReview', null)
    }
  }, [])

  useEffect(async () => {
    await fetchReviews()
  }, [goodsListStatus, reviewOptions])

  const fetchUserReview = async articleId => {
    const res = await userApi.getUserReview(articleId)

    if (Number(res.code) !== 200) {
      alert('리뷰를 불러올 수 없습니다!')
    }

    const { review } = res.data
    setPostInfoOfReview({
      id: review.article.id,
      data: review.article,
      nickname: review.reviewer.nickname,
      reviewContent: review.content,
    })
    setVisibleReviewModal(true)
  }

  const fetchReviews = async () => {
    const res = goodsListStatus.isSellingReview
      ? await userApi.getUserSellReviews(reviewOptions)
      : await userApi.getUserBuyReviews(reviewOptions)

    if (Number(res.code) !== 200) {
      return alert('거래후기 조회 시, 문제가 발생하였습니다!')
    }

    setGoodsList({
      elements: res.data.elements,
      totalElementCount: res.data.pageInfo.totalElementCount,
    })
  }

  const handleReviewOptions = pageNum => {
    setReviewOptions({
      ...reviewOptions,
      params: {
        ...reviewOptions.params,
        page: pageNum,
      },
    })
  }

  const handleReviewModal = async item => {
    setPostInfoOfReview({
      id: item.article.id,
      data: item.article,
      nickname: item.reviewer.nickname,
    })

    if (item.isWritingAvailableFromCurrentMember) {
      setVisibleWriteReviewModal(true)
      return
    }

    await fetchUserReview(item.article.id)
  }

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
                          style={{ border: '1px solid #ccc' }}
                          onClick={() =>
                            router.push(`/post/${item.article.id}`)
                          }>
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
                    {Number(state.userData.id) === Number(userId) && (
                      <div className="review-side-box">
                        <div style={{ width: '100%', textAlign: 'right' }}>
                          {item.time}
                        </div>
                        <Button
                          onClick={() => handleReviewModal(item)}
                          style={reviewBtnStyle}
                          className={`review-review_btn ${
                            !item.isWritingAvailableFromCurrentMember && 'leave'
                          }`}>
                          {item.isWritingAvailableFromCurrentMember
                            ? '후기 남기기'
                            : '후기 보기'}
                        </Button>
                      </div>
                    )}
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          </div>
        </div>
        <Pagination
          size={reviewOptions.params.size}
          postListLength={goodsList.totalElementCount}
          paginate={handleReviewOptions}
          setStartPage={handleReviewOptions}
        />
      </div>
      <ModalMyReview
        postInfo={postInfoOfReview}
        visible={visibleReviewModal}
        onClose={() => setVisibleReviewModal(false)}>
        리뷰 보기 모달
      </ModalMyReview>
      <ModalWriteReview
        postId={postInfoOfReview.id}
        postData={postInfoOfReview.data}
        userNickname={postInfoOfReview.nickname}
        visible={visibleWriteReviewModal}
        needChangeStatus={false}
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
