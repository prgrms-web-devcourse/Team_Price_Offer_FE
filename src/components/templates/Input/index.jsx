import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Input = ({
  type,
  name,
  value,
  style,
  className,
  placeholder = '정보를 입력하세요.',
  onChange,
  onKeyUp,
  maxLength,
  noSpace = false,
}) => {
  return (
    <InputTemplate
      type={type}
      name={name}
      value={value}
      style={style}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onKeyUp={onKeyUp}
      maxLength={maxLength}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
}

const InputTemplate = styled.input`
  color: black;
  border: 1px solid #cccccc;
  font-size: 18px;
  padding: 1% 2%;
`

export default Input
