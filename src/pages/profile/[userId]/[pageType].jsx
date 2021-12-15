import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/dist/client/link'
import Avatar from '@components/templates/Avatar'
import IconButton from '@components/templates/IconButton'
import ModalInfoModify from '@components/ui/modal/ModalInfoModify'
import PageContents from '@pages/profile/contents'
import { CONFIG, NOIMG } from '@utils/constant'
import { useAuthContext } from '@hooks/useAuthContext'

export const getServerSideProps = async context => ({
  props: {
    userId: context.query.userId,
    pageType: context.query.pageType,
  },
})

const ProfilePage = ({ userId, pageType }) => {
  const { state, handleGetUserProfile } = useAuthContext()
  const { userData } = state
  const [userInfo, setUserInfo] = useState({
    isMyAcount: false,
  })
  const [visibleConfigModal, setVisibleConfigModal] = useState(false)

  useEffect(async () => {
    if (Number(userData.id) === Number(userId)) {
      setUserInfo({
        ...userInfo,
        ...userData,
        isMyAcount: true,
      })
      await handleGetUserProfile()
      return
    }

    setUserInfo({
      ...userInfo,
      id: userId,
      nickname: '타사용자',
      offerLevel: 1,
      address: '서울시 동작구',
      profileImageUrl: null,
      sellingArticleCount: 0,
      likedArticleCount: 0,
      offerCount: 0,
      reviewCount: 0,
      isMyAcount: false,
    })
  }, [])

  useEffect(() => {
    if (Number(userData.id) === Number(userId)) {
      setUserInfo(prevState => ({
        ...userData,
        isMyAcount: prevState.isMyAcount,
      }))
      return
    }
  }, [state.userData])

  const profileImgStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  }

  return (
    <div className="profile">
      <div
        className={`profile-container${
          !userInfo.isMyAcount ? ' other-profile' : ''
        }`}>
        <div className="profile-box">
          <Avatar
            className="profile-box_img"
            style={profileImgStyle}
            src={userInfo.profileImageUrl || NOIMG}
          />
          <div className="profile-box_inform">
            <div className="profile-box_cofig">
              <span className="profile-box_nickname">{userInfo.nickname}</span>
              {userInfo.isMyAcount && (
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
          {userInfo.isMyAcount && (
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
      <PageContents userId={userId} pageType={pageType} />
    </div>
  )
}

export default ProfilePage
