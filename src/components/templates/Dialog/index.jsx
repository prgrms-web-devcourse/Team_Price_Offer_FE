import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useAuthContext } from '@hooks/useAuthContext'
import Router from 'next/router'
import useStorage from '@hooks/useStorage'
import { articleApi } from '@api/apis'
import { useRouter } from 'next/dist/client/router'
import { useLoadingContext } from '@hooks/useLoadingContext'
import swal from 'sweetalert'

const Dialog = ({
  style,
  className,
  visible = false,
  items,
  onClose,
  isFinishtrade,
}) => {
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
      onClose && onClose()
      return
    }

    if (code === 'logout') {
      await handleLogout()
      onClose && onClose()
      return
    }

    if (code === 'message') {
      Router.push(`/message/${id}/${roomId}`)
      onClose && onClose()
      return
    }

    if (code === 'modify') {
      if (isFinishtrade) {
        swal({
          // className: 'finish-alert',
          title: '거래가 완료된 게시글은 수정 할 수 없어요!',
          text: '다른 상품을 등록하거나 찾아볼까요?',
          icon: 'error',
          button: '네',
        })
        onClose && onClose()
        return
      }

      const getPostId = getItem('postId').replaceAll('"', '')
      router.push(`/posting/${getPostId}`)
      onClose && onClose()
    }

    if (code === 'delete') {
      const getPostId = getItem('postId').replaceAll('"', '')

      swal({
        title: '정말 삭제할까요?',
        text: '삭제한 게시물은 되돌릴 수 없어요',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then(async deletPost => {
        if (deletPost) {
          const res = await articleApi.deleteArticle(getPostId)
          if (Number(res.code) === 200) {
            swal({
              // className: 'finish-alert',
              title: '게시글이 정상적으로 삭제되었어요!',
              icon: 'success',
              button: '네',
            })
            router.push('/')
          } else {
            swal({
              // className: 'finish-alert',
              title: res.message,
              icon: 'error',
              button: '네',
            })
          }
        }
      })
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
