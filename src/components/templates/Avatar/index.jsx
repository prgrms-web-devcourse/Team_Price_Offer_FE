import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ICON_TYPES } from '@utils/constant/icon'

const { user } = ICON_TYPES

const Avatar = ({ style, className, src }) => {
  return (
    <AvatarWrapper style={style} className={className} src={src}>
      <img src={user} alt="avatar" />
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
