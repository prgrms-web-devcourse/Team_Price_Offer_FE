import React, { useState, useEffect } from 'react'
import DIVIDER from '@components/templates/Divider'
import Link from 'next/link'
import Input from '@components/templates/Input'
import IconButton from '@components/templates/IconButton'
import ModalLogin from '@components/ui/modal/ModalLogin'
import Dialog from '@components/templates/Dialog'
import useStorage from '@hooks/useStorage'
import { Global, css } from '@emotion/react'
import Avatar from '@components/templates/Avatar'
import {
  LOGO,
  USER_CIRCLE,
  SEARCH_LIGHT,
  SEARCH_BLACK,
  SALE,
  MENU_ARROW,
} from '@utils/constant/icon'
import { useRouter } from 'next/router'

const Header = () => {
  const logoImgPath = LOGO
  const userImgPath = USER_CIRCLE
  const searchImgPcPath = SEARCH_LIGHT
  const searchImgMobilePath = SEARCH_BLACK
  const saleImgPaht = SALE
  const menuImgPaht = MENU_ARROW
  const { getItem } = useStorage()
  const [isLogin, setIsLogin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (getItem('userToken') === null) {
      console.log('isLoginState:', isLogin)
      setIsLogin(false)
    } else {
      setIsLogin(true)
      console.log('isLoginState:', isLogin)
    }
  }, [getItem('userToken')])

  let userData
  if (getItem('userData') === null) {
    userData = { nickname: null }
  } else {
    userData = getItem('userData')
  }

  const [visible, setVisible] = useState(false) // 모달의 초기값 false

  const [dialogVisible, setDialogVisible] = useState(false)

  const [isSearchToggle, setSearch] = useState(false) // 메뉴의 초기값을 false로 설정

  const dialogClick = e => {
    e.stopPropagation()
    setDialogVisible(true)
    console.log(dialogVisible)
  }
  console.log(userImgPath)

  const handleSearchRouting = async e => {
    if (e.key === 'Enter') {
      const { value } = e.target

      router.push({
        pathname: '/search',
        query: {
          title: value,
        },
      })
    }
  }

  const toggleSearch = () => {
    setSearch(isOpenSearch => !isOpenSearch) // on,off
  }
  return (
    <>
      <Global styles={HeaderStyle} />
      <div className="header-wrapper">
        <div className="header-right">
          <Link href="/">
            <img src={logoImgPath} alt="logo" className="logo" />
          </Link>
          {/* 모바일 검색창 */}
          {isSearchToggle ? (
            <>
              <Input
                style={{ width: '100%' }}
                className="header-search-input_mobile"
                type="text"
                name="search"
                placeholder="상품명으로 원하는 물건을 검색해보세요!"
                onKeyUp={handleSearchRouting}
              />
            </>
          ) : (
            // 토글이 아니라면 숨긴다
            <Input
              style={{ width: '100%', display: 'none' }}
              className="header-search-input_mobile"
            />
          )}
          <div className="header-search-wrapper">
            <Input
              style={{ width: '100%' }}
              className="header-search-input"
              type="text"
              name="search"
              placeholder="상품명으로 원하는 물건을 검색해보세요!"
              onKeyUp={handleSearchRouting}
            />
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
              onClick={toggleSearch}
            />
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
                  <Avatar src={userData.profileImage} />
                  <div className="username">{userData.nickname}</div>
                  <IconButton
                    className="sidebar"
                    src={menuImgPaht}
                    alt="user"
                    style={{ width: '8px', height: '5px' }}
                    onClick={dialogClick}
                  />
                  <Dialog
                    className="sidear-list"
                    style={{ justifyContent: 'space-between' }}
                    items={[
                      {
                        code: 'profile',
                        name: '내 프로필',
                      },
                      {
                        code: 'message',
                        name: '내 쪽지함',
                      },
                      {
                        code: 'logout',
                        name: '로그아웃',
                      },
                    ]}
                    visible={dialogVisible}
                    onClose={() => setDialogVisible(false)}
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
                  className="sidebar"
                  src={userImgPath}
                  alt="user"
                  style={{ width: '30px', height: '30px' }}
                  onClick={dialogClick}
                />
                <Dialog
                  className="sidear-list"
                  items={[
                    {
                      code: 'profile',
                      name: '내 프로필',
                    },
                    {
                      code: 'message',
                      name: '내 쪽지함',
                    },
                    {
                      code: 'logout',
                      name: '로그아웃',
                    },
                  ]}
                  visible={dialogVisible}
                  onClose={() => setDialogVisible(false)}
                />
              </div>
            </div>
          ) : (
            <div className="widget-login">
              <div className="widget-login_pc" onClick={() => setVisible(true)}>
                <IconButton
                  src={userImgPath}
                  alt="user"
                  style={{ width: '24px', height: '24px' }}
                />
                <div>로그인 / 회원가입</div>
              </div>
              <button
                className="widget-login_mobile"
                onClick={() => setVisible(true)}>
                <div className="widget-login_mobile_text">로그인</div>
              </button>
              <ModalLogin visible={visible} onClose={() => setVisible(false)}>
                로그인 모달
              </ModalLogin>
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
    display: flex;
    justify-content: space-between;
    height: 150px;
    align-items: center;
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
  .header-search-input_mobile {
    position: absolute;
    left: 100px;
    top: 100px;
    max-width: 255px;
    width: 100%;
    height: 30px;
    font-size: 9px;
    padding: 11px 15px;
    &::placeholder {
      font-size: 13px;
    }
    @media (min-width: 706px) {
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
    position: relative;
    max-width: 216px;
    /* line-height: 150px; */
    border: none;
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
    cursor: pointer;
    @media (max-width: 706px) {
      display: none;
    }
  }

  .widget-login_mobile {
    display: none;
    font-family: noto-sans;
    cursor: pointer;
    max-width: 61px;
    width: 100%;
    height: 31px;
    padding: 5px 12px;
    border: solid 1px black;
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

  .sidear-list {
    display: flex;
    z-index: 100;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 90px;
    height: 109px;
    border: solid black;
    font-size: 13px;
    top: 30px;
    left: 40px;

    @media (max-width: 706px) {
      z-index: 100;
      left: -91px;
      height: 109px;
    }
  }
`

export default Header
