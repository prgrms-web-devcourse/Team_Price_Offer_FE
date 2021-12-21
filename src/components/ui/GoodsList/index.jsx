import React from 'react'
import PropTypes from 'prop-types'
import GoodsItem from '@components/ui/GoodsItem'

const GoodsList = ({ goodsList, className = '', haveAuth }) => {
  return (
    <div className={`goods-wrapper ${className}`}>
      <div className="goods-list">
        {goodsList.map(item => (
          <GoodsItem key={item.id} item={item} haveAuth={haveAuth} />
        ))}
      </div>
    </div>
  )
}
GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
}

export default GoodsList
