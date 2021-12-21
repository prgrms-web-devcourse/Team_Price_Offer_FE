import React, { useState, useEffect } from 'react'
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
import Button from '@components/templates/Button'

const Header = () => {
  const { state } = useAuthContext()
  const router = useRouter()
  const { nickname, profileImageUrl } = state.userData

  const [visible, setVisible] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [isSearchToggle, setSearch] = useState(false)
  const [searchWord, setSearchWord] = useState('')

  const dialogClick = e => {
    e.stopPropagation()
    setDialogVisible(!dialogVisible)
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
    <div className="header">
      <div className="header-left-section">
        <Link href="/">
          <img src={LOGO} alt="logo" className="header-logo" />
        </Link>
        <div className="header-search-wrapper">
          <Input
            className="search-input pc"
            type="text"
            name="search"
            placeholder="상품명으로 원하는 물건을 검색해보세요!"
            value={searchWord || ''}
            onChange={e => setSearchWord(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && handleSearchRouting()}
          />
          {isSearchToggle && (
            <Input
              className="search-input mobile"
              type="text"
              name="search"
              placeholder="주문할 상품을 검색하세요!"
              value={searchWord || ''}
              onChange={e => setSearchWord(e.target.value)}
              onKeyUp={e => e.key === 'Enter' && handleSearchRouting()}
            />
          )}
          <IconButton
            className="search-button pc"
            src={SEARCH_LIGHT}
            alt="user"
            onClick={handleSearchRouting}
          />
        </div>
      </div>
      <div className="header-right-section">
        <div className="header-login-wrapper">
          {state.token && (
            <>
              <div className="login-container pc">
                <div
                  className="sale-container"
                  onClick={() => router.push('/posting/new')}>
                  <IconButton src={SALE} alt="sale" className="sale-btn_icn" />
                  <Button className="sale-btn_text">판매하기</Button>
                </div>
                <Divider type="vertical" />
                <div className="user-container" onClick={dialogClick}>
                  <Avatar
                    src={profileImageUrl || NO_IMAGE_SQUARE}
                    alt="user-img"
                    className="user-btn_img"
                  />
                  <Button className="user-btn_text">{nickname}</Button>
                  <IconButton
                    className="user-btn_dialog-icn"
                    src={MENU_ARROW}
                    alt="user-dialog"
                  />
                </div>
              </div>
              <div className="login-container mobile">
                <IconButton
                  className="search-btn_icn"
                  src={SEARCH_BLACK}
                  alt="user"
                  onClick={() => {
                    !searchWord && setSearch(isOpenSearch => !isOpenSearch)
                    searchWord && handleSearchRouting()
                  }}
                />
                <IconButton
                  src={SALE}
                  alt="sale"
                  className="sale-btn_icn"
                  onClick={() => router.push('/posting/new')}
                />
                <IconButton
                  className="user-btn_dialog_icn"
                  src={USER_CIRCLE}
                  alt="user"
                  onClick={dialogClick}
                />
              </div>
              <Dialog
                className="user-btn_dialog"
                items={DIALOGLIST}
                visible={dialogVisible}
                onClose={() => setDialogVisible(false)}
              />
            </>
          )}
        </div>
        <div className="header-logout-wrapper">
          {!state.token && (
            <>
              <div className="logout-container">
                <IconButton
                  className="search-btn_icn"
                  src={SEARCH_BLACK}
                  alt="user"
                  onClick={() => {
                    !searchWord && setSearch(isOpenSearch => !isOpenSearch)
                    searchWord && handleSearchRouting()
                  }}
                />
                <IconButton
                  src={USER_CIRCLE}
                  alt="user-icon"
                  className="logout-btn_icn"
                  onClick={() => setVisible(true)}
                />
                <Button
                  className="logout-btn_text"
                  onClick={() => setVisible(true)}
                />
              </div>
              <ModalLogin visible={visible} onClose={() => setVisible(false)}>
                로그인 모달
              </ModalLogin>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = ({ query }) => {
  return { query }
}

export default Header
