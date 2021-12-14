import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useAuthContext } from '@hooks/useAuthContext'
import useStorage from '@hooks/useStorage'
import { articleApi } from '@api/apis'
import router from 'next/router'

const Dialog = ({ style, className, visible = false, items, onClose }) => {
  const dialogRef = useRef(null)
  const { handleLogout } = useAuthContext()
  const { getItem, setItem, clear } = useStorage()

  const handleClickItem = async code => {
    if (code === 'logout') {
      await handleLogout()
      return
    }

    if (code === 2) {
      const postId = getItem('postId')
      const res = await articleApi.changeTradeStatus({
        articleId: postId,
        option: {
          code: 2,
        },
      })
      router.push(-1)
    }
    if (code === 4) {
      const postId = getItem('postId')
      const res = await articleApi.changeTradeStatus({
        articleId: postId,
        option: {
          code: 4,
        },
      })
      router.push(0)
    }
    if (code === 8) {
      const postId = getItem('postId')
      const res = await articleApi.changeTradeStatus({
        articleId: postId,
        option: {
          code: 8,
        },
      })
      router.push(0)
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
