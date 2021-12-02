import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Input = ({
  name,
  defaultValue = '',
  style,
  className,
  placeholder = '정보를 입력하세요.',
  value,
  onChange,
}) => {
  const inputStyle = {
    width: '324px',
    height: '40px',
    color: 'black',
    border: '1px solid #ebebeb',
    fontSize: '18px',
    padding: '1% 2%',
  }

  return (
    <input
      type="text"
      name={name}
      value={value}
      style={{ ...style, ...inputStyle }}
      className={className}
      placeholder={placeholder}
      onChange={() => onChange}
      defaultValue={defaultValue}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
