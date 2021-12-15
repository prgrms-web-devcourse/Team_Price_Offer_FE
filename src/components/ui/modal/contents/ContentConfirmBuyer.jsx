import React, { useEffect, useState } from 'react'
import DIVIDER from '@components/templates/Divider'
import Avatar from '@components/templates/Avatar'
import { articleApi } from '@api/apis'
import Button from '@components/templates/Button'
import { timeForToday } from '@utils/functions'
import router from 'next/router'

const ContentConfirmBuyer = ({ postId }) => {
  const [postData, setPostData] = useState([{}])
  const [offerList, setOfferList] = useState([{}])
  const [selecor, setSelecor] = useState('')
  const [isMounted, setMounted] = useState(false)
  const [offerId, setOfferId] = useState('')

  useEffect(async () => {
    console.log(postId)
    const { data } = await articleApi.getArticleUserID(postId)
    const offerList = await articleApi.getOffersList(postId)
    setPostData(data.article)
    setOfferList(offerList.data)
    setMounted(true)
  }, [])

  const handleClick = (confirmId, e) => {
    const offerer = offerList.elements.filter(x => x.id === confirmId)
    const confrimName = offerer.map(x => x.offerer.nickname)
    console.log(confrimName)
    setSelecor(`${confrimName[0]}`)
    setOfferId(confirmId)
  }

  const confrimClick = async () => {
    const res = await articleApi.selectOffer(offerId)
    console.log(res)
    if (Number(res.code) === 200) {
      alert('구매자 확정 완료!')
      router.push(0)
    } else {
      alert(res.message)
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
              <div className="goodsbox-title">{postData.title} &gt;</div>
              <div className="goodsbox-state">
                {postData.productStatus.name} &gt;
              </div>
              <div className="goodsbox-category">{postData.category.name}</div>
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
                  src="https://picsum.photos/100"
                  alt="avatar"
                />
                <div className="userinfo-detail">
                  <div className="detail-name">
                    <span className="username">
                      {offererList.offerer.nickname}
                    </span>
                    {/* <span className="level">{postData.author.offerLevel}</span> */}
                  </div>
                  <div className="detail-time">
                    {offererList.offerer.address} ·{' '}
                    {timeForToday(offererList.createdDate)}
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="confirm-middle-wrapper-userinfo">
          <Avatar
            className="userinfo-userimg"
            src="https://picsum.photos/100"
            alt="avatar"
          />
          <div className="userinfo-detail">
            <div className="detail-name">
              <span className="username">황금효정</span>
              <span className="level">Lv 1</span>
            </div>
            <div className="detail-time">강북구 수유동 · 1시간전</div>
          </div>
        </div>
        <div className="confirm-middle-wrapper-userinfo">
          <Avatar
            className="userinfo-userimg"
            src="https://picsum.photos/100"
            alt="avatar"
          />
          <div className="userinfo-detail">
            <div className="detail-name">
              <span className="username">황금효정</span>
              <span className="level">Lv 1</span>
            </div>
            <div className="detail-time">강북구 수유동 · 1시간전</div>
          </div>
        </div> */}
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
            <Button onClick={confrimClick} className="confirm-button">
              구매자 확정
            </Button>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default ContentConfirmBuyer
