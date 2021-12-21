import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/dist/client/router'
import Like from './Like'
import Offer from './Offer'
import Review from './Review'
import Sale from './Sale'

const ProfileContents = ({ userId, pageType, state }) => {
  switch (pageType) {
    case 'like':
      return <Like />
    case 'offer':
      return <Offer />
    case 'review':
      return <Review userId={userId} state={state} />
    case 'sale':
      return <Sale userId={userId} />
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
