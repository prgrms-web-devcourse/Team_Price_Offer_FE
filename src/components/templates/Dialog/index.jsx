import React, { useEffect, useRef } from 'react'
import Router from "next/router";
import PropTypes from 'prop-types'
import useStorage from '@utils/storage.js'
import styled from '@emotion/styled'

const Dialog = ({ style, className, visible = false, items, onClose }) => {
  const dialogRef = useRef(null)
  const { setItem,getItem,removeItem,clear } = useStorage();

  const handleClickItem = code => {
    console.log(`${code}로 router 이동 처리`)
    if (code === 'logout') {
      clear()
    }
    Router.push(0)

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
