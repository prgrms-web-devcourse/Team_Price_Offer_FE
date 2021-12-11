import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Button = ({ type, style, className, children, onClick }) => {
  const handleClick = () => {
    onClick && onClick()
  }
  return (
    <CommonButton
      type={type}
      className={className}
      style={style}
      onClick={handleClick}>
      {children}
    </CommonButton>
  )
}

Button.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
}
const CommonButton = styled.button`
  border-radius: 3px;
  border: none;
  display: block;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`

export default Button
