import React from 'react'
import Divider from '@components/templates/Divider'
import Avatar from '@components/templates/Avatar'

const profile = () => {
  const profileImgStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  }
  return (
    <div className="profile_wrapper">
      <div className="profile_container">
        <div className="profile_box">
          <Avatar
            className="profile_img"
            style={profileImgStyle}
            src="https://w.namu.la/s/69388e6fe9921a1ed22ef19263516ab891b1cc90862c126cde56f200b29a84e3f3d9e56055f0d09c3d42b44ad7d2b0b19194150da1dc6fae31efb66dd4b85d7047660f1da1f6a0d73ecbe134e12e8ba9"
          />
          <div className="profile_box_inform">
            <span className="profile_nickname">히텧</span>
            <span className="profile_level">Level 1</span>
            <span className="profile_area">동작구 사당동</span>
          </div>
        </div>
        <Divider
          type="vertical"
          style={{ height: '150px', marinTop: '15px' }}
        />

        <div className="profile_list_box">
          <div className="profile_list_item">
            <div className="profile_list_title">판매 상품</div>
            <div className="profile_list_content">30</div>
          </div>
          <div className="profile_list_item">
            <div className="profile_list_title">찜한 상품</div>
            <div className="profile_list_content">60</div>
          </div>
          <div className="profile_list_item">
            <div className="profile_list_title">가격 제안</div>
            <div className="profile_list_content">30</div>
          </div>
          <div className="profile_list_item">
            <div className="profile_list_title">거래 후기</div>
            <div className="profile_list_content">30</div>
          </div>
        </div>
      </div>

      <div className="profile_content" />
    </div>
  )
}

profile.propTypes = {}

export default profile
