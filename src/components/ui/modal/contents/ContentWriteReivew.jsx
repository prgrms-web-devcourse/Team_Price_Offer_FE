import React, { useState, useEffect } from 'react'
import DIVIDER from '@components/templates/Divider'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'
import { userApi, articleApi } from '@api/apis'
import { useFormik } from 'formik'
import router from 'next/router'
import validate from '@utils/validation'
import {
  REVIEW_SOSO,
  REVIEW_GOOD,
  REVIEW_BAD,
  REVIEW_SOSO_CHECKED,
  REVIEW_GOOD_CHECKED,
  REVIEW_BAD_CHECKED,
} from '@utils/constant'

const hoverEvent = (e, img) => {
  e.currentTarget.src = img
}

const ContentWriteReivew = ({
  postId,
  postData,
  userNickname,
  needChangeStatus,
  onClose,
}) => {
  const [badImg, setbadImg] = useState(REVIEW_BAD)
  const [goodImg, setGoodImg] = useState(REVIEW_GOOD)
  const [sosoImg, setSosoImg] = useState(REVIEW_SOSO)
  const [reviewPostData, setReviewPostData] = useState([
    {
      title: '',
      productStatus: { name: '' },
      category: { name: '' },
    },
  ])
  const [isMounted, setMounted] = useState(false)

  useEffect(async () => {
    setReviewPostData(postData)
    setMounted(true)
  }, [postData])

  const formik = useFormik({
    initialValues: {
      reviewContent: '',
      evaluation: '',
    },
    validate,
    onSubmit: async values => {
      await console.log(values)
      const res = await userApi.postReview({
        articleId: postId,
        payload: {
          score: values.evaluation,
          content: values.reviewContent,
        },
      })
      if (Number(res.code) === 200) {
        alert(`${userNickname} 님께 거래후기를 남겼습니다!`)

        if (!needChangeStatus) {
          onClose && onClose()
          return
        }
        const resTradeStatus = await articleApi.changeTradeStatus({
          articleId: postId,
          option: {
            code: 8,
          },
        })
        if (Number(resTradeStatus.code) === 200) {
          alert('해당 상품의 거래가 종료되었습니다!')
          router.reload(`/post/${postId}`)
        } else {
          alert(resTradeStatus.message)
        }
      } else {
        alert(res.message)
      }
    },
  })

  return (
    <div className="writereview">
      {isMounted && (
        <>
          <div className="writereview-top-wrapper">
            <div className="text-wrapper">
              <div className="text-wrapper-texts">
                <div className="seller-name">{userNickname}</div>
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
              <div className="goodsbox-title">{reviewPostData?.title}</div>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="writereview-middle-wrapper">
              {formik.errors.evaluation && (
                <div className="error" style={{ textAlign: 'center' }}>
                  {formik.errors.evaluation}
                </div>
              )}
              <div className="icon-list">
                <label
                  className="evaluation"
                  htmlFor="evaluation-good"
                  value={formik.values.evaluation}
                  style={{ cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="evaluation"
                    id="evaluation-good"
                    src={REVIEW_GOOD}
                    className="icon"
                    value={2}
                    onClick={e => {
                      console.log(e.target.value)
                      if (e.target.checked) {
                        setGoodImg(REVIEW_GOOD_CHECKED)
                        setSosoImg(REVIEW_SOSO)
                        setbadImg(REVIEW_BAD)
                      }
                    }}
                    onChange={formik.handleChange}
                  />
                  <img
                    src={goodImg}
                    alt="좋다"
                    onFocus={e => {
                      hoverEvent(e, REVIEW_GOOD_CHECKED)
                    }}
                    onMouseOver={e => {
                      hoverEvent(e, REVIEW_GOOD_CHECKED)
                    }}
                    onBlur={e => {
                      if (goodImg === REVIEW_GOOD) {
                        hoverEvent(e, REVIEW_GOOD)
                      }
                    }}
                    onMouseOut={e => {
                      if (goodImg === REVIEW_GOOD) {
                        hoverEvent(e, REVIEW_GOOD)
                      }
                    }}
                  />
                </label>
                <label
                  className="evaluation"
                  htmlFor="evaluation-soso"
                  value={formik.values.evaluation}
                  style={{ cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="evaluation"
                    id="evaluation-soso"
                    src={REVIEW_SOSO}
                    className="icon"
                    value={1}
                    onChange={formik.handleChange}
                    onClick={e => {
                      console.log(e.target.value)
                      if (e.target.checked) {
                        setGoodImg(REVIEW_GOOD)
                        setSosoImg(REVIEW_SOSO_CHECKED)
                        setbadImg(REVIEW_BAD)
                      }
                    }}
                  />
                  <img
                    src={sosoImg}
                    onFocus={e => {
                      hoverEvent(e, REVIEW_SOSO_CHECKED)
                    }}
                    onMouseOver={e => {
                      hoverEvent(e, REVIEW_SOSO_CHECKED)
                    }}
                    onBlur={e => {
                      if (sosoImg === REVIEW_SOSO) {
                        hoverEvent(e, REVIEW_SOSO)
                      }
                    }}
                    onMouseOut={e => {
                      if (sosoImg === REVIEW_SOSO) {
                        hoverEvent(e, REVIEW_SOSO)
                      }
                    }}
                    alt="보통이다"
                  />
                </label>
                <label
                  className="evaluation"
                  htmlFor="evaluation-bad"
                  value={formik.values.evaluation}
                  style={{ cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="evaluation"
                    id="evaluation-bad"
                    src={REVIEW_BAD}
                    className="icon"
                    value={-1}
                    onChange={formik.handleChange}
                    onClick={e => {
                      console.log(e.target.value)
                      if (e.target.checked) {
                        setGoodImg(REVIEW_GOOD)
                        setSosoImg(REVIEW_SOSO)
                        setbadImg(REVIEW_BAD_CHECKED)
                      }
                    }}
                  />
                  <img
                    src={badImg}
                    alt="안좋다"
                    onFocus={e => {
                      hoverEvent(e, REVIEW_BAD_CHECKED)
                    }}
                    onMouseOver={e => {
                      hoverEvent(e, REVIEW_BAD_CHECKED)
                    }}
                    onBlur={e => {
                      if (badImg === REVIEW_BAD) {
                        hoverEvent(e, REVIEW_BAD)
                      }
                    }}
                    onMouseOut={e => {
                      if (badImg === REVIEW_BAD) {
                        hoverEvent(e, REVIEW_BAD)
                      }
                    }}
                  />
                </label>
              </div>

              <TextArea
                id="reviewContent"
                name="reviewContent"
                className="writereview-area"
                placeholder="상대방에게 거래후기를 남겨주세요!"
                value={formik.values.reviewContent}
                onChange={formik.handleChange}
                maxLength="100"
              />
              {formik.errors.reviewContent && (
                <div className="error" style={{ textAlign: 'center' }}>
                  {formik.errors.reviewContent}
                </div>
              )}
              <div className="review-length">
                {formik.values.reviewContent.length} /100
              </div>
            </div>

            <div className="writereview-bottom-wrapper">
              <Button type="submit" className="writereview-button">
                거래 후기 남기기
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default ContentWriteReivew
