import React from 'react'
import PropTypes from 'prop-types'
import Like from './Like'
import Offer from './Offer'
import Review from './Review'
import Sale from './Sale'

const ProfileContents = ({ pageType }) => {
  switch (pageType) {
    case 'like':
      return <Like />
    case 'offer':
      return <Offer />
    case 'review':
      return <Review />
    default:
      return <Sale />
  }
}

ProfileContents.propTypes = {
  pageType: PropTypes.string.isRequired,
}

export default ProfileContents
