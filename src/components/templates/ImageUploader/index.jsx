import React from 'react'
import PropTypes from 'prop-types'

const ImageUploader = ({ style, className, onChange, children }) => {
  const handleChange = async e => {
    onChange && onChange(e)
  }

  return (
    <label htmlFor="upload">
      <span style={{ cursor: 'pointer', ...style }} className={className}>
        {children}
      </span>
      <input
        id="upload"
        type="file"
        accept="img/*"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </label>
  )
}

ImageUploader.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

export default ImageUploader
