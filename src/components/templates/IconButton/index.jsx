import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const IconButton = ({ style, className, alt, src, onClick }) => {
  const handleClick = e => {
    e.preventDefault()
    onClick(e)
  }

  return (
    <IconWrapper style={style} className={className} onClick={handleClick}>
      <img src={src} alt={alt} />
    </IconWrapper>
  )
}

IconButton.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

const IconWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`

export default IconButton
