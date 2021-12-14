import React from 'react'
import PropTypes from 'prop-types'
import GoodsList from '@components/ui/GoodsList'

const offer = ({ goodsList }) => {
  return <GoodsList goodsList={goodsList} className="offer-goodList" />
}

offer.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string),
}

export default offer
