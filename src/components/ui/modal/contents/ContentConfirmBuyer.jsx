import React, { useEffect, useState } from 'react'
import DIVIDER from '@components/templates/Divider'
import Avatar from '@components/templates/Avatar'
import { articleApi } from '@api/apis'
import Button from '@components/templates/Button'
import { USER } from '@utils/constant'
import { timeForToday } from '@utils/functions'
import router from 'next/router'
import useStorage from '@hooks/useStorage'
import WriteReview from '@components/ui/modal/ModalWriteReview'

const { getItem } = useStorage()

const ContentConfirmBuyer = ({ postId }) => {
  const [postData, setPostData] = useState([{}])
  const [offerList, setOfferList] = useState([{}])
  const [selecor, setSelecor] = useState('')
  const [isMounted, setMounted] = useState(false)
  const [offerId, setOfferId] = useState('')
  const [reviewVisible, setReviewVisible] = useState(false)

  useEffect(async () => {
    const { data } = await articleApi.getArticleUserID(postId)
    const offerList = await articleApi.getOffersList(postId)
    setPostData(data.article)
    setOfferList(offerList.data)
    setMounted(true)
  }, [])

  const handleClick = (confirmId, e) => {
    const offerer = offerList.elements.filter(x => x.id === confirmId)
    const confrimName = offerer.map(x => x.offerer.nickname)
    setSelecor(`${confrimName[0]}`)
    setOfferId(confirmId)
  }

  const confirmClick = async () => {
    const res = await articleApi.selectOffer(offerId)
    if (Number(res.code) === 200) {
      alert('구매자 확정 완료!')
      setReviewVisible(true)
    } else {
      alert(res.message)
      if (res.message === '이미 선택된 offer가 존재합니다.') {
        alert('리뷰를 작성해서 거래를 종료하세요!')
        setReviewVisible(true)
        return
      }
      router.reload(`/post/${postId}`)
    }
  }
  return (
    <div className="confrim">
      {isMounted ? (
        <>
          <div className="confirm-top-wrapper">
            <div className="confirm-top-wrapper-confirmtext">
              구매자를 확정해주세요!
            </div>
            <div className="confirm-top-wrapper-explaintext">
              판매 완료는 반드시 구매자를 확정해야 합니다!
            </div>
            <div className="confirm-top-wrapper-goodsbox">
              <div className="goodsbox-text">거래상품</div>
              <div>
                <DIVIDER
                  type="vertical"
                  marginSize="3"
                  style={{ border: '0px solid #ddd' }}
                />
              </div>
              <div className="goodsbox-title">{postData.title}</div>
            </div>
          </div>

          <DIVIDER
            type="horizontal"
            marginSize="1"
            style={{
              width: '100%',
              border: '1px solid #ddd',
            }}
          />

          <div className="confirm-middle-wrapper">
            {offerList.elements.map(offererList => (
              <div
                onClick={e => {
                  handleClick(offererList.id, e)
                }}
                className="confirm-middle-wrapper-userinfo"
                key={offererList.id}>
                <Avatar
                  className="userinfo-userimg"
                  src={offererList.offerer.profileImage || USER}
                  alt="avatar"
                />
                <div className="userinfo-detail">
                  <div className="detail-name">
                    <span className="username">
                      {offererList.offerer.nickname}
                    </span>
                    <span className="level">
                      Lv. {postData.author.offerLevel}
                    </span>
                  </div>
                  <div className="price">
                    제안가격: {offererList.price.toLocaleString()} 원
                  </div>
                  <div className="detail-time">
                    {offererList.offerer.address} ·{' '}
                    {timeForToday(offererList.createdDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="confirm-bottom-wrapper">
            {selecor.length > 0 ? (
              <div className="selector-message">
                마음에 드는 구매자가
                <span className="selector"> {selecor}</span> 님 인가요?
              </div>
            ) : (
              ''
            )}
            <Button onClick={confirmClick} className="confirm-button">
              구매자 확정
            </Button>
          </div>
          <WriteReview
            visible={reviewVisible}
            postId={postId}
            postData={postData}
            userNickname={selecor}
            needChangeStatus
          />
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default ContentConfirmBuyer
