import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const TextArea = ({
  style,
  className,
  onChange,
  name,
  placeholder,
  maxLength,
}) => {
  return (
    <ComonTextArea
      placeholder={placeholder}
      style={style}
      className={className}
      onChange={onChange}
      name={name}
      maxLength={maxLength}
    />
  )
}

TextArea.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  onChange: PropTypes.func,
}

const ComonTextArea = styled.textarea`
  padding: 20px;
  font-family: Roboto, Noto Sans, Helvetica Neue, sans-serif;
  &::placeholder {
    color: #888888;
  }
`
export default TextArea
