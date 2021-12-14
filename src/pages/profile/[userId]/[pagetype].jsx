import React, { useEffect, useState } from 'react'
import Divider from '@components/templates/Divider'
import Avatar from '@components/templates/Avatar'
import Button from '@components/templates/Button'
import IconButton from '@components/templates/IconButton'
import ModalInfoModify from '@components/ui/modal/ModalInfoModify'
import PageContents from '@pages/profile/contents'

export const getServerSideProps = async context => ({
  props: {
    userId: context.query.userId,
    pageType: context.query.pageType,
  },
})

const ProfilePage = ({ userId, pageType }) => {
  const configIconPath = require('@assets/images/icon/config.svg').default.src
  const [visibleConfigModal, setVisibleConfigModal] = useState(false)

  useEffect(() => {
    console.log(userId, pageType)
  }, [])

  const profileImgStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  }

  return (
    <div className="profile">
      <div className="profile-container">
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
                src={configIconPath}
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
        <hr className="profile-divider" />
        <ul className="profile-list">
          <li className="profile-list_item">
            <div className="profile-list_title selected">판매 상품</div>
            <div className="profile-list_content">30</div>
          </li>
          <li className="profile-list_item">
            <div className="profile-list_title">찜한 상품</div>
            <div className="profile-list_content">60</div>
          </li>
          <li className="profile-list_item">
            <div className="profile-list_title">가격 제안</div>
            <div className="profile-list_content">30</div>
          </li>
          <li className="profile-list_item">
            <div className="profile-list_title">거래 후기</div>
            <div className="profile-list_content">30</div>
          </li>
        </ul>
      </div>

      <div className="result-container">
        <div className="result-title">가격 제안</div>
        <div className="result-btn-box">
          <Button className="result-btn_item selected">판매 중</Button>
          <Button className="result-btn_item">판매 완료</Button>
        </div>
        <div className="result-lineup-box">
          <span className="result-lineup_item selected">최신순</span>
          <Divider type="vertical" />
          <span className="result-lineup_item">낮은 가격순</span>
          <Divider type="vertical" />
          <span className="result-lineup_item">높은 가격순</span>
        </div>
        <div className="result-content">
          <PageContents pageType={pageType} />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
