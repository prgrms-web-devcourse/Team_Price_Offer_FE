import React from 'react'
import PropTypes from 'prop-types'
import GoodsList from '@components/ui/GoodsList'

const like = ({ goodsList }) => {
  return <GoodsList goodsList={goodsList} className="like-goodList" />
}

like.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string),
}

export default like
