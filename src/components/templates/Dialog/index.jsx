import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useAuthContext } from '@hooks/useAuthContext'
import Router from 'next/router'
import useStorage from '@hooks/useStorage'
import { articleApi } from '@api/apis'
import { useRouter } from 'next/dist/client/router'

const Dialog = ({
  style,
  className,
  visible = false,
  items,
  onClose,
  isFinishtrade,
}) => {
  const { state } = useAuthContext()
  const router = useRouter()
  const dialogRef = useRef(null)
  const { handleLogout, state } = useAuthContext()
  const { id } = state.userData
  const roomId = null
  // const router = useRouter

  // const handleClickItem = async code => {
  //   console.log(code)
  //   console.log(id)
  const { getItem, setItem, clear } = useStorage()

  const handleClickItem = async code => {
    if (code === 'profile') {
      router.push(`/profile/${state.userData.id}/sale`)
      return
    }

    if (code === 'logout') {
      await handleLogout()
      return
    }

    if (code === 'message') {
      Router.push(`/message/${id}/${roomId}`)
    }

    if (code === 'modify') {
      if (isFinishtrade) {
        alert('거래가 완료된 게시글은 수정 할 수 없어요!')
        return
      }
      const getPostId = getItem('postId').replaceAll('"', '')
      router.push(`/posting/${getPostId}`)
    }

    if (code === 'delete') {
      const getPostId = getItem('postId').replaceAll('"', '')
      if (confirm('정말 삭제하시겠습니까?')) {
        const res = await articleApi.deleteArticle(getPostId)
        if (Number(res.code) === 200) {
          alert('게시글이 삭제 되었습니다.')
          router.push('/')
        } else {
          alert(res.message)
        }
      }
    }
  }

  const handleClickAway = ({ target }) => {
    !dialogRef?.current?.contains(target) && onClose()
  }

  useEffect(() => {
    document.addEventListener('click', e => handleClickAway(e))

    return () => {
      document.removeEventListener('click', e => handleClickAway(e))
    }
  }, [])

  return (
    <DialogWrapper
      ref={dialogRef}
      visible={visible}
      style={style}
      className={className}>
      {items.map(item => (
        <li key={`test-${item.code}`}>
          <span onClick={() => handleClickItem(item.code)}>{item.name}</span>
        </li>
      ))}
    </DialogWrapper>
  )
}

Dialog.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  visible: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func,
}

const DialogWrapper = styled.ul(({ visible }) => ({
  display: visible ? 'flex' : 'none',
  position: 'absolute',
  width: '147px',
  margin: 0,
  padding: '20px',
  listStyle: 'none',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#fff',

  li: {
    '&:not(:first-of-type, :last-child)': {
      padding: '20px 0',
    },

    span: {
      cursor: 'pointer',
    },
  },
}))

export default Dialog
