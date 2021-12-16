import React, { useState, useEffect } from 'react'
import DIVIDER from '@components/templates/Divider'
import TextArea from '@components/templates/Textarea'
import Button from '@components/templates/Button'
import { articleApi, messageApi } from '@api/apis'
import { useFormik } from 'formik'
import router from 'next/router'
import validate from '@utils/validation'

const ContentChat = ({ postId, offerId }) => {
  const [postData, setPostData] = useState([{}])
  const [offerList, setOfferList] = useState([{}])
  const [nickname, setNickname] = useState('')
  const [memberId, setMemberId] = useState('')

  const [isMounted, setMounted] = useState(false)
  useEffect(async () => {
    const { data } = await articleApi.getArticleUserID(postId)
    const offerList = await articleApi.getOffersList(postId)
    setPostData(data.article)
    setOfferList(offerList.data)
    const offerElements = offerList && offerList.data.elements
    const offerInfo =
      offerElements && offerElements.filter(x => x.id === offerId)
    const userNickname = offerInfo && offerInfo.map(x => x.offerer.nickname)
    setNickname(userNickname[0])
    const memberIdd = offerInfo && offerInfo.map(x => x.offerer.id)
    setMemberId(memberIdd)
    setMounted(true)
  }, [offerId])

  const formik = useFormik({
    initialValues: {
      messageContent: '',
    },
    validate,
    onSubmit: async values => {
      const res = await messageApi.postMessageToOffer({
        memberId,
        offerId,
        articleId: postId,
        content: {
          content: values.messageContent,
        },
      })
      if (Number(res.code) === 200) {
        alert(`${nickname} 님께 쪽지를 보냈습니다. 쪽지함에서 확인해 보세요!`)
        router.reload(`/post/${postId}`)
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
                <div className="seller-name">{nickname}</div>
                <div className="writereview-top-wrapper-text">
                  님께 쪽지 보내기
                </div>
              </div>
            </div>

            <div className="writereview-top-wrapper-explaintext">
              가격에 마음에 드셨다면 쪽지를 보내보세요!
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
              <div className="goodsbox-title">{postData.title} &gt;</div>
              <div className="goodsbox-state">
                {postData.productStatus.name} &gt;
              </div>
              <div className="goodsbox-category">{postData.category.name}</div>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mywritereview-middle-wrapper">
              <TextArea
                id="messageContent"
                name="messageContent"
                className="writereview-area"
                placeholder="상대방에게 쪽지를 보내보세요!"
                value={formik.values.messageContent}
                onChange={formik.handleChange}
                maxLength="100"
              />
              {formik.errors.messageContent ? (
                <div className="error">{formik.errors.messageContent}</div>
              ) : null}

              <div className="review-length">
                {formik.values.messageContent.length} /100
              </div>
            </div>

            <div className="writereview-bottom-wrapper">
              <Button type="submit" className="writereview-button">
                쪽지 보내기
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

ContentChat.propTypes = {}

export default ContentChat
