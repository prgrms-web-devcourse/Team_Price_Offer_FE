import React, { useState, useEffect } from 'react'
import DIVIDER from '@components/templates/Divider'
import Iconbutton from '@components/templates/IconButton'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'
import useStorage from '@hooks/useStorage'
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
} from '@utils/constant/icon'

const { getItem } = useStorage()
const goodImgurl = REVIEW_GOOD
const sosoImgurl = REVIEW_SOSO
const badImgurl = REVIEW_BAD
const goodImgurlChecked = REVIEW_GOOD_CHECKED
const sosoImgurlChecked = REVIEW_SOSO_CHECKED
const badImgurlChecked = REVIEW_BAD_CHECKED

const ContentWriteReivew = ({
  postId,
  postData,
  userNickname,
  needChangeStatus,
}) => {
  const [badImg, setbadImg] = useState(badImgurl)
  const [goodImg, setGoodImg] = useState(goodImgurl)
  const [sosoImg, setSosoImg] = useState(sosoImgurl)
  const [offerList, setOfferList] = useState([{}])
  const [reviewPostData, setReviewPostData] = useState([
    {
      title: '',
      productStatus: { name: '' },
      category: { name: '' },
    },
  ])
  const [selector, setSeletcor] = useState('')
  const [isMounted, setMounted] = useState(false)

  useEffect(async () => {
    // const { data } = await articleApi.getArticleUserID(postId)
    setReviewPostData(postData)
    setSeletcor(userNickname)
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
      {isMounted ? (
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
              {formik.errors.evaluation ? (
                <div className="error" style={{ textAlign: 'center' }}>
                  {formik.errors.evaluation}
                </div>
              ) : null}
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
                    src={goodImgurl}
                    className="icon"
                    value={2}
                    onClick={e => {
                      console.log(e.target.value)
                      if (e.target.checked) {
                        setGoodImg(goodImgurlChecked)
                        setSosoImg(sosoImgurl)
                        setbadImg(badImgurl)
                      }
                    }}
                    onChange={formik.handleChange}
                  />
                  <img src={goodImg} alt="좋다" />{' '}
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
                    src={sosoImgurl}
                    className="icon"
                    value={1}
                    onChange={formik.handleChange}
                    onClick={e => {
                      console.log(e.target.value)
                      if (e.target.checked) {
                        setGoodImg(goodImgurl)
                        setSosoImg(sosoImgurlChecked)
                        setbadImg(badImgurl)
                      }
                    }}
                    // style={{ display: 'none' }}
                  />
                  <img src={sosoImg} alt="보통이다" />
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
                    src={sosoImgurl}
                    className="icon"
                    value={-1}
                    onChange={formik.handleChange}
                    onClick={e => {
                      console.log(e.target.value)
                      if (e.target.checked) {
                        setGoodImg(goodImgurl)
                        setSosoImg(sosoImgurl)
                        setbadImg(badImgurlChecked)
                      }
                    }}
                  />
                  <img src={badImg} alt="안좋다" />
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
              {formik.errors.reviewContent ? (
                <div className="error" style={{ textAlign: 'center' }}>
                  {formik.errors.reviewContent}
                </div>
              ) : null}
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
      ) : (
        ''
      )}
    </div>
  )
}

export default ContentWriteReivew
