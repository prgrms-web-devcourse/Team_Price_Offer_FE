import React from 'react'
import PropTypes from 'prop-types'
import DIVIDER from '@components/templates/Divider'
import Link from 'next/link'
import Input from '@components/templates/Input'
import IconButton from '@components/templates/IconButton'
import Button from '@components/templates/Button'
import { Global, css } from '@emotion/react'

const Header = ({ isLogin }) => {
  console.log(isLogin)
  const logoImgPath = require('@assets/images/logo.svg').default.src
  const userImgPath = require('@assets/images/icon/user_circle.svg').default.src
  const searchImgPcPath = require('@assets/images/icon/search_light.svg')
    .default.src
  const searchImgMobilePath = require('@assets/images/icon/search_black.svg')
    .default.src
  const saleImgPaht = require('@assets/images/icon/sale.svg').default.src
  const menuImgPaht = require('@assets/images/icon/menu_arrow.svg').default.src

  return (
    <>
      <Global styles={HeaderStyle} />
      <div className="header-wrapper">
        <div className="header-right">
          <Link href="/">
            <img src={logoImgPath} alt="logo" className="logo" />
          </Link>

          <div className="header-search-wrapper">
            <Input
              style={{ width: '100%' }}
              className="header-search-input"
              type="text"
              name="search"
              placeholder="상품명으로 원하는 물건을 검색해보세요!"
            />
            {/* <div className="header-search-icon_wrapper"> */}
            <IconButton
              className="search-button_pc"
              src={searchImgPcPath}
              alt="user"
              style={{ width: '24px', height: '24px' }}
            />
            <IconButton
              className="search-button_mobile"
              src={searchImgMobilePath}
              alt="user"
              style={{ width: '30px', height: '30px' }}
            />
            {/* </div> */}
          </div>
        </div>
        <div className="header-widget-wrapper">
          {isLogin ? (
            <div className="widget-islogin">
              <div className="widget-islogin_pc">
                <div className="sale-area">
                  <IconButton
                    src={saleImgPaht}
                    alt="sale"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <div className="sale_button_text">판매하기</div>
                </div>
                <DIVIDER type="vertical" style={{ color: '#DDDDDD' }} />
                <div className="userprofile-area">
                  <IconButton
                    src={userImgPath}
                    alt="user"
                    style={{ width: '24px', height: '24px' }}
                  />
                  <div className="username">족발킬러</div>
                  <IconButton
                    src={menuImgPaht}
                    alt="user"
                    style={{ width: '8px', height: '5px' }}
                  />
                </div>
              </div>
              <div className="widget-islogin_mobile">
                <IconButton
                  src={saleImgPaht}
                  alt="sale"
                  style={{ width: '30px', height: '30px' }}
                />
                <IconButton
                  src={userImgPath}
                  alt="user"
                  style={{ width: '30px', height: '30px' }}
                />
              </div>
            </div>
          ) : (
            <div className="widget-login">
              <div className="widget-login_pc">
                <IconButton
                  src={userImgPath}
                  alt="user"
                  style={{ width: '24px', height: '24px' }}
                />
                <div>로그인 / 회원가입</div>
              </div>
              <button className="widget-login_mobile">
                <div className="widget-login_mobile_text">로그인</div>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

Header.propTypes = {}

const HeaderStyle = css`
  .header-wrapper {
    background: #ffffff;
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    height: 150px;
    align-items: center;
    /* line-height: 150px; */
    /* gap: 100px; */
    /* flex-basis: 0;
    flex-grow: 3; */
    .logo {
      cursor: pointer;
      width: 100px;

      @media (max-width: 706px) {
        width: 66px;
        height: 34px;
      }
    }
  }

  .header-search-wrapper {
    position: relative;
    max-width: 479px;
    width: 100%;
  }

  .header-right {
    width: 100%;
    display: flex;
    gap: 31px;
  }

  .header-search-input {
    max-width: 479px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding: 11px 15px;
    @media (max-width: 706px) {
      display: none;
    }
  }

  .search-button_pc {
    top: 6px;
    left: 93%;
    position: absolute;
    @media (max-width: 706px) {
      display: none;
    }
  }
  .search-button_mobile {
    top: 3px;
    left: 93%;
    position: absolute;
    @media (min-width: 706px) {
      display: none;
    }
    @media (max-width: 706px) {
      position: static;
      margin-left: auto;
    }
  }

  .header-widget-wrapper {
    max-width: 216px;
    /* line-height: 150px; */
    border: 1px solid;
  }
  /* =====================================로그인===================================== */
  .wiget-islogin {
  }

  .widget-islogin_pc {
    margin: 0px;
    padding: 0px;
    width: 100%;
    min-width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    @media (max-width: 706px) {
      display: none;
    }
  }

  .sale-area {
    display: flex;
    align-items: center;
  }

  .userprofile-area {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0px;
  }
  .widget-islogin_mobile {
    align-items: center;
    display: none;
    max-width: 61px;
    width: 100%;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.9);
    @media (max-width: 706px) {
      display: flex;
    }
  }
  /* =====================================비로그인===================================== */
  .wiget-login {
  }

  .widget-login_pc {
    margin: 0px;
    padding: 0px;
    width: 100%;
    min-width: 147px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 706px) {
      display: none;
    }
  }

  .widget-login_mobile {
    display: none;
    cursor: pointer;
    max-width: 61px;
    width: 100%;
    height: 31px;
    padding: 5px 12px;
    border: 1px solid;
    border-radius: 3px;
    background-color: #ffffff;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.9);

    @media (max-width: 706px) {
      display: flex;
      justify-content: center;
    }
  }
  .widget-login_mobile_text {
    font-size: 13px;
    min-width: 39px;
  }
`

export default Header
