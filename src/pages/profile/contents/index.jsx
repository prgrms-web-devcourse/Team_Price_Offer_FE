import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/dist/client/router'
import Like from './Like'
import Offer from './Offer'
import Review from './Review'
import Sale from './Sale'

const ProfileContents = ({ userId, pageType, state, onClick }) => {
  const handleClick = e => {
    onClick && onClick(e)
  }

  switch (pageType) {
    case 'like':
      return (
        <div onClick={handleClick}>
          <Like />
        </div>
      )
    case 'offer':
      return (
        <div onClick={handleClick}>
          <Offer />
        </div>
      )
    case 'review':
      return (
        <div onClick={handleClick}>
          <Review userId={userId} state={state} />
        </div>
      )
    case 'sale':
      return (
        <div onClick={handleClick}>
          <Sale userId={userId} state={state} />
        </div>
      )
    default:
      if (process.browser) {
        const router = useRouter()
        router.push('/')
      }

      return null
  }
}

ProfileContents.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pageType: PropTypes.string.isRequired,
  state: PropTypes.shape({ root: PropTypes.string }),
}

export default ProfileContents
