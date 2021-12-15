import React, { useState, useCallback } from 'react'
import Divider from '@components/templates/Divider'
import Link from 'next/link'
import Input from '@components/templates/Input'
import IconButton from '@components/templates/IconButton'
import ModalLogin from '@components/ui/modal/ModalLogin'
import Dialog from '@components/templates/Dialog'
import { DIALOGLIST } from '@data/dummy/dialogList'
import Avatar from '@components/templates/Avatar'
import {
  LOGO,
  USER_CIRCLE,
  SEARCH_LIGHT,
  SEARCH_BLACK,
  SALE,
  MENU_ARROW,
  NO_IMAGE_SQUARE,
} from '@utils/constant'
import { useAuthContext } from '@hooks/useAuthContext'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const { state } = useAuthContext()
  const { nickname, profileImageUrl } = state.userData

  const [visible, setVisible] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [isSearchToggle, setSearch] = useState(false)
  const [searchWord, setSearchWord] = useState('')

  const iconBtnStyleLg = { width: '30px', height: '30px' }
  const iconBtnStyleMd = { width: '24px', height: '24px' }
  const iconBtnStyleSm = { width: '8px', height: '5px' }

  const dialogClick = e => {
    e.stopPropagation()
    setDialogVisible(true)
  }

  const handleSearchRouting = () => {
    searchWord &&
      router.push({
        pathname: '/search',
        query: {
          title: searchWord.trim(),
        },
      })

    setSearchWord('')
  }

  return (
    <div className="header-wrapper">
      <div className="header-right">
        <Link href="/">
          <img src={LOGO} alt="logo" className="logo" />
        </Link>
        {isSearchToggle ? (
          <Input
            style={{ width: '100%' }}
            className="header-search-input_mobile"
            type="text"
            name="search"
            placeholder="상품명으로 원하는 물건을 검색해보세요!"
            value={searchWord || ''}
            onChange={e => setSearchWord(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && handleSearchRouting()}
          />
        ) : (
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
            value={searchWord || ''}
            onChange={e => setSearchWord(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && handleSearchRouting()}
          />
          <IconButton
            className="search-button_pc"
            src={SEARCH_LIGHT}
            alt="user"
            style={iconBtnStyleMd}
            onClick={handleSearchRouting}
          />
          <IconButton
            className="search-button_mobile"
            src={SEARCH_BLACK}
            alt="user"
            style={iconBtnStyleLg}
            onClick={() => {
              !searchWord && setSearch(isOpenSearch => !isOpenSearch)
              searchWord && handleSearchRouting()
            }}
          />
        </div>
      </div>
      <div className="header-widget-wrapper">
        {state.token ? (
          <div className="widget-islogin">
            <div className="widget-islogin_pc">
              <div className="sale-area">
                <IconButton src={SALE} alt="sale" style={iconBtnStyleMd} />
                <div className="sale_button_text">판매하기</div>
              </div>
              <Divider type="vertical" style={{ color: '#DDDDDD' }} />
              <div className="userprofile-area">
                <Avatar
                  style={iconBtnStyleLg}
                  src={profileImageUrl || NO_IMAGE_SQUARE}
                />
                <div className="username">{nickname}</div>
                <IconButton
                  className="sidebar"
                  src={MENU_ARROW}
                  alt="user"
                  style={iconBtnStyleSm}
                  onClick={dialogClick}
                />
                <Dialog
                  className="sidear-list"
                  style={{ justifyContent: 'space-between' }}
                  items={DIALOGLIST}
                  visible={dialogVisible}
                  onClose={() => setDialogVisible(false)}
                />
              </div>
            </div>
            <div className="widget-islogin_mobile">
              <IconButton src={SALE} alt="sale" style={iconBtnStyleLg} />
              <IconButton
                className="sidebar"
                src={USER_CIRCLE}
                alt="user"
                style={iconBtnStyleLg}
                onClick={dialogClick}
              />
              <Dialog
                className="sidear-list"
                items={DIALOGLIST}
                visible={dialogVisible}
                onClose={() => setDialogVisible(false)}
              />
            </div>
          </div>
        ) : (
          <div className="widget-login">
            <div className="widget-login_pc" onClick={() => setVisible(true)}>
              <IconButton
                src={USER_CIRCLE}
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
  )
}

export default Header
