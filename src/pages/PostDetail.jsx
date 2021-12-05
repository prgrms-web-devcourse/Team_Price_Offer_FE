import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@components/templates/Avatar'
import IMG from '@components/templates/Image'
import ICONBUTTON from '@components/templates/IconButton'
import DIVIDER from '@components/templates/Divider'
import styles from '../assets/css/PostDetail.module.css'

const PostDetail = props => {
  const detailInfo = JSON.stringify([
    {
      id: 1,
      author: {
        id: 1,
        email: 'awesomeo184@gmail.com',
        appleLevel: 1,
        nickname: 'awesomeo184',
        profileImage: 'profile_image_url',
        address: '동대문구 회기동',
      },
      title: 'article_title',
      content: 'article_content',
      category: {
        code: 1,
        name: '인기매물',
      },
      tradeStatus: {
        code: 2,
        name: '예약중',
      },
      tradeArea: '동대문구 회기동',
      tradeMethod: {
        code: 2,
        name: '직거래',
      },
      quantity: 1,
      price: 20000,
      mainImageUrl: '/favicon.ico',
      createdDate: '2021-12-02 19:19:18',
      modifiedDate: null,
      likeCounts: 32,
      liked: false,
    },
  ])
  const offerList = [
    {
      pageInfo: {
        currentPage: 0,
        lastPage: 6,
        countPerPage: 5,
        totalSize: 29,
      },
      offers: [
        {
          id: 23,
          offerer: {
            id: 1,
            nickname: 'awesomeo184',
            address: '동대문구 회기동',
          },
          articleId: 2,
          price: 1500,
          createdDate: '2021-12-02 19:19:18',
          isSelected: false,
        },
        {
          id: 24,
          offerer: {
            id: 2,
            nickname: 'awesomeo184',
            address: '동대문구 회기동',
          },
          articleId: 2,
          price: 1700,
          createdDate: '2021-12-03 19:19:18',
          isSelected: true,
        },
      ],
    },
  ]
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header} />
      </div>
      <div className={styles.detailInfoWrapper}>
        <div className={styles.imgWrapper}>
          <IMG
            width="486px"
            height="380px"
            padding="0px"
            src="/favicon.ico"
            ratio="r"
          />
        </div>
        <div className={styles.postInfoWrapper}>
          <div className={styles.postInfo}>
            <div className={styles.postInfoUser}>
              <Avatar
                src="https://picsum.photos/200"
                style={{ width: '46.97px', height: '47px' }}
              />
              <div className={styles.userName}>크리스마스 선물 도둑</div>
            </div>

            <DIVIDER
              type="horizontal"
              style={{
                marginTop: '15px',
                backgroundColor: '#D2D2D2',
                width: '100%',
              }}
            />

            <div className={styles.postInfoTop}>
              <div className={styles.postTitle}>
                산타 양말 팔아요팔아요팔아요팔아요팔아요팔아요
              </div>
              <ICONBUTTON
                src="./favicon.ico"
                alt="likeButton"
                style={{
                  width: '30px',
                  height: '30px',
                  marginLeft: 'auto',
                  lineHeight: '30px',
                }}
              />
            </div>

            <div className={styles.postPrice}>4,000 원</div>

            <div className={styles.postInffoBottom}>
              <div className={styles.postInffoBottom_time}>
                <div className={styles.infoKey}>작성시간</div>
                <div className={styles.infoValue}>1시간전</div>
              </div>
              <div className={styles.postInffoBottom_time}>
                <div className={styles.infoKey}>거래지역</div>
                <div className={styles.infoValue}>제주 서귀포시</div>
              </div>
              <div className={styles.postInffoBottom_time}>
                <div className={styles.infoKey}>상품상태</div>
                <div className={styles.infoValue}>새 상품</div>
              </div>
              <div className={styles.postInffoBottom_time}>
                <div className={styles.infoKey}>거래방식</div>
                <div className={styles.infoValue}>직거래</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoOfferWrapper}>
        <div className={styles.goodsInfo}>
          <div className={styles.goodsinfoTitle}>상품정보</div>
          <DIVIDER
            type="horizontal"
            style={{
              marginTop: '20px',
              backgroundColor: '#000000',
              width: '488px',
              height: '2px',
              fontWeight: 'bold',
            }}
          />
          <div className={styles.goodsinfoContent}>
            hello worldhello worldhello worldhello worldhello worldhello
            worldhello worldhello worldhello world
          </div>
        </div>
        <div className={styles.goodsInfo}>
          <div className={styles.goodsinfoTitle}>가격제안</div>
          <DIVIDER
            type="horizontal"
            style={{
              marginTop: '20px',
              backgroundColor: '#000000',
              height: '2px',
              width: '453px',
            }}
          />
          <div className={styles.offerWrapper}>
            {/* {offerList.map(offerList => (
                        <div className={styles.offerUserInfo}>
                            <div className={styles.offerUsername}>{offerList.userName}</div>
                                <div className={styles.offersubInfo}>
                                <div className={styles.offerAddress}>{offerList.addRess}</div>
                                    <div className={styles.offerTime}>{offerList.time}</div>
                                </div>
                            <div className={styles.offerPrice}>{offerList.price}</div>
                        </div>
                        ))} */}
            <div className={styles.offerUserInfo}>
              <div className={styles.offerUsername}>산타</div>
              <div className={styles.offersubInfo}>
                <div className={styles.offerAddress}>
                  제주서귀포시 • 1시간전
                </div>
                <div className={styles.offerTime} />
                <div className={styles.offerPrice}>600원</div>
              </div>
            </div>
          </div>
          <DIVIDER
            type="horizontal"
            style={{
              marginTop: '20px',
              backgroundColor: '#CCCCCC',
              width: '453px',
            }}
          />
        </div>
      </div>
    </>
  )
}

PostDetail.propTypes = {}

export default PostDetail
