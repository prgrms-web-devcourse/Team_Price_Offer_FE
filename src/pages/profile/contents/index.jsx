import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/dist/client/router'
import Spinner from '@components/templates/Spinner'
import Like from './Like'
import Offer from './Offer'
import Review from './Review'
import Sale from './Sale'

const ProfileContents = ({ userId, pageType }) => {
  const SpinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
  }

  switch (pageType) {
    case 'like':
      return <Like />
    case 'offer':
      return <Offer />
    case 'review':
      return <Review userId={userId} />
    case 'sale':
      return <Sale userId={userId} />
    default:
      if (process.browser) {
        const router = useRouter()
        router.push('/')
      }

      return (
        <div style={SpinnerStyle}>
          <Spinner />
        </div>
      )
  }
}

ProfileContents.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pageType: PropTypes.string.isRequired,
}

export default ProfileContents
