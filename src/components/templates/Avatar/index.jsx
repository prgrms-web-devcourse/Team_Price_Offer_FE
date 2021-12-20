import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { USER } from '@utils/constant'

const Avatar = ({ style, className, src }) => {
  const onError = e => {
    e.target.src = USER
  }

  return (
    <AvatarWrapper
      onError={onError}
      style={style}
      className={className}
      src={src}>
      <img src={src} alt="avatar" onError={onError} />
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  src: PropTypes.string,
}

const AvatarWrapper = styled.div(({ src }) => ({
  border: '2px solid #ccc',
  borderRadius: '100%',

  img: {
    width: src ? '100%' : '84%',
    height: src ? '100%' : '84%',
    padding: src ? 0 : '20% 8% 10% 8%',
    borderRadius: '100%',
  },
}))

export default Avatar
