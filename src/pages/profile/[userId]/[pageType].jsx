import React, { useEffect, useState } from 'react'
import Link from 'next/dist/client/link'
import Avatar from '@components/templates/Avatar'
import IconButton from '@components/templates/IconButton'
import ModalInfoModify from '@components/ui/modal/ModalInfoModify'
import PageContents from '@pages/profile/contents'
import { CONFIG } from '@utils/constant'

export const getServerSideProps = async context => ({
  props: {
    userId: context.query.userId,
    pageType: context.query.pageType,
  },
})

const ProfilePage = ({ userId, pageType }) => {
  const [visibleConfigModal, setVisibleConfigModal] = useState(false)
  const [userInfo, setUserInfo] = useState({
    isMyAcount: false,
    likedArticleCount: 0,
    offerCount: 0,
  })

  useEffect(() => {
    console.log(userId, pageType)
  }, [userId, pageType])

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
            src="https://w.namu.la/s/69388e6fe9921a1ed22ef19263516ab891b1cc90862c126cde56f200b29a84e3f3d9e56055f0d09c3d42b44ad7d2b0b19194150da1dc6fae31efb66dd4b85d7047660f1da1f6a0d73ecbe134e12e8ba9"
          />
          <div className="profile-box_inform">
            <div className="profile-box_cofig">
              <span className="profile-box_nickname">히텧</span>
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
            </div>
            <span className="profile-box_level">Level 1</span>
            <span className="profile-box_area">동작구 사당동</span>
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
              <div className="profile-list_content">30</div>
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
              <div className="profile-list_content">30</div>
            </li>
          </Link>
        </ul>
      </div>
      <PageContents userId={userId} pageType={pageType} />
    </div>
  )
}

export default ProfilePage
