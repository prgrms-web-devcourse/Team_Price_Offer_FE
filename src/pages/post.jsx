import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@components/templates/Avatar'
import ICONBUTTON from '@components/templates/IconButton'
import DIVIDER from '@components/templates/Divider'
import GOODSIMG from '@components/templates/Banner'
import BUTTON from '@components/templates/Button'
import { ICON_TYPES } from '@utils/constant/icon'
import Like from '../components/templates/ToggleButton'

const { offer } = ICON_TYPES
const postDetail = props => {
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
      mainImageUrl: 'https://picsum.photos/200',
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
    <div className="detail">
      <div className="detail-info-wrapper">
        <div className="img-wrapper">
          <GOODSIMG
            imgUrls={[
              'https://picsum.photos/200',
              'https://picsum.photos/200',
              null,
            ]}
            style={{
              width: '100%',
              height: '380px',
              padding: '0px',
            }}
            src="https://picsum.photos/200"
            ratio="r"
          />
        </div>
        <div className="post-info-wrapper">
          <div className="post-info">
            <div className="post-info-user">
              <Avatar
                src="https://picsum.photos/200"
                style={{ width: '46.97px', height: '47px' }}
              />
              <div className="user-name">크리스마스 선물 도둑</div>
            </div>

            <DIVIDER
              type="horizontal"
              style={{
                marginTop: '15px',
                backgroundColor: '#D2D2D2',
                width: '100%',
              }}
            />

            <div className="post-info-top">
              <div className="post-title">
                산타 양말 팔아요팔아요팔아요팔아요팔아요팔아요팔팔아요
              </div>
              {/* <ICONBUTTON
                src="./favicon.ico"
                alt="likeButton"
                style={{
                  width: '30px',
                  height: '30px',
                  marginLeft: 'auto',
                  lineHeight: '30px',
                }}
              /> */}
              <Like
                className="like-button"
                style={{ padding: '0px', height: '25px', lineHeight: '30px' }}
              />
            </div>

            <div className="post-price">4,000 원</div>

            <div className="post-info-bottom">
              <div className="post-info-bottom_time">
                <div className="info-key">작성시간</div>
                <div className="info-value">1시간전</div>
              </div>
              <div className="post-info-bottom_time">
                <div className="info-key">거래지역</div>
                <div className="info-value">제주 서귀포시</div>
              </div>
              <div className="post-info-bottom_time">
                <div className="info-key">상품상태</div>
                <div className="info-value">새 상품</div>
              </div>
              <div className="post-info-bottom_time">
                <div className="info-key">거래방식</div>
                <div className="info-value">직거래</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-offer-wrapper">
        <div className="goods-info">
          <div className="goods-info-title">상품정보</div>
          <DIVIDER
            type="horizontal"
            style={{
              marginTop: '20px',
              backgroundColor: '#000000',
              width: '100%',
              height: '2px',
              fontWeight: 'bold',
            }}
          />
          <div className="goods-info-content">
            hello worldhello worldhello worldhello worldhello worldhello
            worldhello worldhello worldhello world
          </div>
        </div>
        <div className="goods-info">
          <div className="goods-info-title">가격제안</div>
          <DIVIDER
            type="horizontal"
            style={{
              marginTop: '20px',
              backgroundColor: '#000000',
              height: '2px',
              width: '100%',
            }}
          />
          <div className="offer-wrapper">
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
            <div className="offer-user-info">
              <div className="offer-subinfo">
                <div className="offer-username">산타</div>
                <div className="offer-address">제주서귀포시 • 1시간전</div>
                <div className="offer-time" />
              </div>
              <div className="offer-suggestinfo">
                {' '}
                <div className="offer-price">600원</div>
                <ICONBUTTON className="offer-button" src={offer} />
              </div>
            </div>
          </div>
          <DIVIDER
            type="horizontal"
            style={{
              marginTop: '20px',
              backgroundColor: '#CCCCCC',
              width: '100%',
            }}
          />
          <div className="offer-option">
            <div className="offer-page">1 2 3</div>
            <div className="offer-state">
              <div className="offer-state_ban">
                예약중인 물건은 가격제안을 할 수 없어요!
              </div>
              <BUTTON className="offer-button">가격 제안하기(0/2)</BUTTON>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

postDetail.propTypes = {}

export default postDetail
