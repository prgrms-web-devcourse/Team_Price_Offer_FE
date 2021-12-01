import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Button = ({
  backgroundColor = '#F74F2A',
  color = '#FFFFFF',
  borderRadius = '3px',
  width = '324px',
  height = '50px',
  fontSize = '16px',
  cursor = 'pointer',
  className,
  children,
  onClick,
  ...props
}) => {
  const buttonStyle = {
    backgroundColor,
    color,
    borderRadius,
    width,
    height,
    fontSize,
  }
  const Click = e => {
    e.prevenDefault()
  }
  return (
    <CommonButton
      className={{ className }}
      style={{ ...props.style, ...buttonStyle }}
      onClick={Click}>
      {children}
    </CommonButton>
  )
}

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
}
const CommonButton = styled.button`
  border: none;
  display: block;
  justify-content: center;
  text-align: center;
`

export default Button
