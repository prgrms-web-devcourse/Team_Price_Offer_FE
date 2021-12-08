import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Input from '@components/templates/Input'
import IconButton from '@components/templates/IconButton'
import Button from '@components/templates/Button'
import { Global, css } from '@emotion/react'

const Header = props => {
  const logoImgPath = require('@assets/images/logo.svg').default.src
  const userImgPath = require('@assets/images/icon/user_circle.svg').default.src

  const inputStyle = {
    maxWidth: '479px',
    height: '40px',
    fontSize: '16px',
    padding: '11px 15px',
  }

  return (
    <>
      <Global styles={HeaderStyle} />
      <div className="header-wrapper">
        <Link href="/">
          <img src={logoImgPath} alt="logo" className="logo" />
        </Link>

        <div className="header-search-wrapper">
          <Input
            type="text"
            name="search"
            style={inputStyle}
            placeholder="상품명으로 원하는 물건을 검색해보세요!"
          />
        </div>

        <div className="header-widget-wrapper">
          <div className="widget-login">
            <div className="widget-login_pc">
              <IconButton
                src={userImgPath}
                alt="user"
                style={{ width: '24px', height: '24px' }}
              />
              <div>로그인 / 회원가입</div>
            </div>
          </div>
          <button className="widget-login_mobile">로그인</button>
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

    .logo {
      cursor: pointer;
      width: 100px;

      @media (max-width: 510px) {
        width: 66px;
        height: 34px;
      }
    }
  }

  .header-search-wrapper {
    position: relative;
  }

  .header-widget-wrapper {
    border: 1px solid;
  }

  .widget-login_pc {
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
      display: none;
    }
  }

  .widget-login_mobile {
    display: none;
    cursor: pointer;
    width: 61px;
    height: 31px;
    padding: 7px 12px;
    border: 1px solid;
    border-radius: 3px;
    background-color: #ffffff;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.9);

    @media (max-width: 500px) {
      display: flex;
    }
  }
`

export default Header
