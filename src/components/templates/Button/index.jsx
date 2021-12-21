import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Button = ({
  type,
  style,
  className,
  children,
  onClick,
  name,
  value,
  disabled,
}) => {
  const handleClick = e => {
    onClick && onClick(e)
  }
  return (
    <CommonButton
      type={type}
      className={className}
      style={style}
      name={name}
      value={value}
      onClick={handleClick}
      disabled={disabled}>
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
