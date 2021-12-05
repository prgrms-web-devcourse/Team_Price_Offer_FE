import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Input = ({
  type,
  name,
  value,
  defaultValue = '',
  style,
  className,
  placeholder = '정보를 입력하세요.',
  onChange,
}) => {
  return (
    <InputTemplate
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      style={style}
      className={className}
      placeholder={placeholder}
      onChange={e => onChange({ args: e.target.value })}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

const InputTemplate = styled.input`
  width: 324px;
  height: 40px;
  color: black;
  border: 1px solid #ebebeb;
  font-size: 18px;
  padding: 1% 2%;
`

export default Input
