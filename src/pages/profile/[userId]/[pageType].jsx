import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/dist/client/link'
import Avatar from '@components/templates/Avatar'
import IconButton from '@components/templates/IconButton'
import ModalInfoModify from '@components/ui/modal/ModalInfoModify'
import PageContents from '@pages/profile/contents'
import { CONFIG, NOIMG } from '@utils/constant'
import { useAuthContext } from '@hooks/useAuthContext'
import { authApi } from '@api/apis'
// import Spinner from '@components/templates/Spinner'
import styled from '@emotion/styled'
import { useAsyncContext } from '@hooks/useAsyncContext'

export const getServerSideProps = async context => ({
  props: {
    userId: context.query.userId,
    pageType: context.query.pageType,
  },
})

const ProfilePage = ({ userId, pageType }) => {
  const { state } = useAuthContext()
  const { handleLoadingOn, handleLoadingOff } = useAsyncContext()
  // const [isLoading, setIsLoading] = useState(true)
  const [isMyAcount, setisMyAcount] = useState(false)
  const [userInfo, setUserInfo] = useState({
    id: null,
    email: null,
    offerLevel: null,
    nickname: null,
    profileImageUrl: null,
    address: null,
    sellingArticleCount: null,
    likedArticleCount: null,
    offerCount: null,
    reviewCount: null,
  })
  const [visibleConfigModal, setVisibleConfigModal] = useState(false)

  useEffect(async () => {
    handleLoadingOn()

    const currentStateUserId = state.userData.id
    await fetchUserProfile(currentStateUserId)

    checkMyAcount(currentStateUserId)
      ? setisMyAcount(true)
      : setisMyAcount(false)

    handleLoadingOff()
  }, [userId, state.userData])

  const fetchUserProfile = useCallback(
    async currentStateUserId => {
      const res = checkMyAcount(currentStateUserId)
        ? await authApi.getUserProfile()
        : await authApi.getOtherUserProfile(userId)

      setUserInfo({
        ...userInfo,
        ...res.data.member,
        sellingArticleCount: res.data.sellingArticleCount,
        likedArticleCount: res.data.likedArticleCount,
        offerCount: res.data.offerCount,
        reviewCount: res.data.reviewCount,
      })
    },
    [userId],
  )

  const checkMyAcount = useCallback(
    (currentStateUserId = state.userData.id) => {
      return Number(currentStateUserId) === Number(userId)
    },
    [userId, state.userData.id],
  )

  const dispatchEvent = useCallback(async e => {
    if (e.target.name !== 'like') {
      return
    }

    if (checkMyAcount()) {
      setTimeout(() => {
        fetchUserProfile(state.userData.id)
      }, 500)
    }
  }, [])

  const profileImgStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  }

  return (
    <div className="profile">
      <div
        className={`profile-container${!isMyAcount ? ' other-profile' : ''}`}>
        <div className="profile-box">
          <Avatar
            className="profile-box_img"
            style={profileImgStyle}
            src={userInfo.profileImageUrl || NOIMG}
          />
          <div className="profile-box_inform">
            <div className="profile-box_cofig">
              <span className="profile-box_nickname">{userInfo.nickname}</span>
              {isMyAcount && (
                <>
                  <IconButton
                    className="profile-box_icon"
                    src={CONFIG}
                    alt="회원정보 수정"
                    onClick={() => setVisibleConfigModal(true)}
                  />
                  <ModalInfoModify
                    visible={visibleConfigModal}
                    onClose={() => setVisibleConfigModal(false)}
                  />
                </>
              )}
            </div>
            <span className="profile-box_level">
              Level {userInfo.offerLevel || 1}
            </span>
            <span className="profile-box_area">{userInfo.address}</span>
          </div>
        </div>
        <div className="profile-divider" />
        <ul className="profile-list">
          <Link href={`/profile/${userId}/sale`}>
            <li className="profile-list_item">
              <div
                className={`profile-list_title ${
                  pageType === 'sale' ? 'selected' : ''
                }
                `}>
                판매 상품
              </div>
              <div className="profile-list_content">
                {userInfo.sellingArticleCount || 0}
              </div>
            </li>
          </Link>
          {isMyAcount && (
            <>
              <Link href={`/profile/${userId}/like`}>
                <li className="profile-list_item">
                  <div
                    className={`profile-list_title ${
                      pageType === 'like' ? 'selected' : ''
                    }`}>
                    찜한 상품
                  </div>
                  <div className="profile-list_content">
                    {userInfo.likedArticleCount || 0}
                  </div>
                </li>
              </Link>
              <Link href={`/profile/${userId}/offer`}>
                <li className="profile-list_item">
                  <div
                    className={`profile-list_title ${
                      pageType === 'offer' ? 'selected' : ''
                    }`}>
                    가격 제안
                  </div>
                  <div className="profile-list_content">
                    {userInfo.offerCount || 0}
                  </div>
                </li>
              </Link>
            </>
          )}
          <Link href={`/profile/${userId}/review`}>
            <li className="profile-list_item">
              <div
                className={`profile-list_title ${
                  pageType === 'review' ? 'selected' : ''
                }`}>
                거래 후기
              </div>
              <div className="profile-list_content">
                {userInfo.reviewCount || 0}
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <PageContents
        userId={userId}
        pageType={pageType}
        state={state}
        onClick={dispatchEvent}
      />
    </div>
  )
}

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`

export default ProfilePage
