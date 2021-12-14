import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@components/templates/Avatar'
import ICONBUTTON from '@components/templates/IconButton'
import DIVIDER from '@components/templates/Divider'
import GOODSIMG from '@components/templates/Banner'
import BUTTON from '@components/templates/Button'
import Dialog from '@components/templates/Dialog'
import { STATUSLIST } from '@data/dummy/postStatusdialogList'
import { OFFER, OPTIONS } from '@utils/constant/icon'
import { useRouter } from 'next/router'
import { articleApi } from '@api/apis'
import { useAuthContext } from '@hooks/useAuthContext'
import { timeForToday } from '@utils/functions'
import useStorage from '@hooks/useStorage'
import SelectBox from '@components/templates/Selectbox'
import Like from '../components/templates/ToggleButton'

const { getItem, setItem, clear } = useStorage()

const Post = props => {
  const { state } = useAuthContext()
  const userId = state.userData.id
  const router = useRouter()
  // const { postId } = router.query
  const postId = 9

  setItem('postId', postId)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [postData, setPostData] = useState([{}])
  const [isWriter, setisWriter] = useState(false)
  const [imgUrls, setimgUrls] = useState([])
  const [tradeStatus, setTradeStatus] = useState(false)
  const [isMounted, setMounted] = useState(false)

  useEffect(async () => {
    const imageUrls = await articleApi.getImgUrlList(postId)
    const { data } = await articleApi.getArticleUserID(postId)
    await setPostData(data.article)
    await setimgUrls(imageUrls.data.imageUrls)
    data.article.author.id === userId ? setisWriter(true) : setisWriter(false)
    data.article.tradeStatus.name === '판매중'
      ? setTradeStatus(true)
      : setTradeStatus(false)
    setMounted(true)
  }, [state])

  console.log('거래상태:', tradeStatus)
  console.log('게시글 작성자 여부', isWriter)
  console.log('포스트 데이터', postData)
  console.log('포스트 이미지 데이터', imgUrls)

  const dialogClick = e => {
    e.stopPropagation()
    setDialogVisible(true)
  }

  const handleChange = async e => {
    const code = parseInt(e.target.value)
    const postId = getItem('postId')
    console.log(code)

    if (code === 2) {
      alert(code)
      const res = await articleApi.changeTradeStatus({
        articleId: postId,
        option: {
          code: 2,
        },
      })
      router.push(0)
    }
    if (code === 4) {
      const res = await articleApi.changeTradeStatus({
        articleId: postId,
        option: {
          code: 4,
        },
      })
      router.push(0)
    }
    if (code === 8) {
      const res = await articleApi.changeTradeStatus({
        articleId: postId,
        option: {
          code: 8,
        },
      })
      router.push(0)
    }
  }

  return (
    <div className="detail">
      {isMounted ? (
        <>
          <div className="detail-info-wrapper">
            <div className="img-wrapper">
              {tradeStatus ? (
                <GOODSIMG
                  imgUrls={imgUrls}
                  style={{
                    width: '100%',
                    height: '380px',
                    padding: '0px',
                  }}
                  src="https://picsum.photos/200"
                  ratio="r"
                />
              ) : (
                <div className="finish">
                  <GOODSIMG
                    imgUrls={imgUrls}
                    style={{
                      width: '100%',
                      height: '380px',
                      padding: '0px',
                      filter: 'brightness(50%)',
                    }}
                    src="https://picsum.photos/200"
                    ratio="r"
                  />
                  <div className="finish-message">예약완료</div>
                </div>
              )}
            </div>
            <div className="post-info-wrapper">
              <div className="post-info">
                <div className="post-info-user">
                  <Avatar
                    src="https://picsum.photos/200"
                    style={{ width: '46.97px', height: '47px' }}
                  />
                  <div className="user-name">{postData.author.nickname}</div>
                </div>

                <DIVIDER
                  type="horizontal"
                  style={{
                    marginTop: '15px',
                    backgroundColor: '#D2D2D2',
                    width: '100%',
                  }}
                />
                {isWriter ? (
                  <>
                    <div className="status-wrapper">
                      <SelectBox
                        style={{
                          fontSize: '10px',
                          width: '100px',
                          height: '30px',
                        }}
                        onChange={handleChange}
                        formName="trade"
                        options={STATUSLIST}
                        className="status"
                        defaultOption={{
                          code: postData.tradeStatus.code,
                          name: postData.tradeStatus.name,
                        }}
                      />
                      <select
                        style={{
                          fontSize: '10px',
                          width: '100px',
                          height: '30px',
                        }}
                        className="status2"
                        defaultOption={{
                          code: postData.tradeStatus.code,
                          name: postData.tradeStatus.name,
                        }}
                        onChange={handleChange}>
                        <option
                          value={postData.tradeStatus.code}
                          text={postData.tradeStatus.name}
                          label={postData.tradeStatus.name}
                          disabled
                        />

                        {STATUSLIST.map(({ code, name }) => (
                          <option
                            key={code}
                            value={code}
                            text={name}
                            label={name}
                          />
                        ))}
                      </select>
                      <ICONBUTTON
                        className="options"
                        src={OPTIONS}
                        onClick={dialogClick}
                        style={{
                          width: '30px',
                          height: '30px',
                        }}
                      />
                      <Dialog
                        className="status-list"
                        style={{ justifyContent: 'space-between' }}
                        items={[
                          {
                            code: 1,
                            name: '게시글 수정',
                          },
                          {
                            code: 99,
                            name: '게시글 삭제',
                          },
                        ]}
                        visible={dialogVisible}
                        onClose={() => setDialogVisible(false)}
                      />
                    </div>
                  </>
                ) : (
                  ''
                )}
                <div className="post-info-top">
                  <div className="post-title">{postData.title}</div>
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
                    style={{
                      padding: '0px',
                      height: '25px',
                      lineHeight: '30px',
                    }}
                  />
                </div>

                <div className="post-price">{postData.price} 원</div>

                <div className="post-info-bottom">
                  <div className="post-info-bottom_time">
                    <div className="info-key">작성시간</div>
                    <div className="info-value">
                      {timeForToday(postData.modifiedDate)}
                    </div>
                  </div>
                  <div className="post-info-bottom_time">
                    <div className="info-key">거래지역</div>
                    <div className="info-value">{postData.tradeArea}</div>
                  </div>
                  <div className="post-info-bottom_time">
                    <div className="info-key">상품상태</div>
                    <div className="info-value">{postData.tradeArea}</div>
                  </div>
                  <div className="post-info-bottom_time">
                    <div className="info-key">거래방식</div>
                    <div className="info-value">
                      {postData.tradeMethod.name}
                    </div>
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
              <div className="goods-info-content">{postData.content}</div>
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
                    <ICONBUTTON className="offer-button" src={OFFER} />
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
        </>
      ) : (
        ''
      )}
    </div>
  )
}

Post.propTypes = {}

export default Post
