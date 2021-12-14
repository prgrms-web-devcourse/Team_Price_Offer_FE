import React from 'react'
import PropTypes from 'prop-types'
import GoodsList from '@components/ui/GoodsList'

const sale = ({ goodsList }) => {
  return <GoodsList goodsList={goodsList} className="sale-goodList" />
}

sale.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string),
}

export default sale
