import React from 'react'
import PropTypes from 'prop-types'
import GoodsItem from '@components/ui/GoodsItem'

const GoodsList = ({ goodsList, className }) => {
  if (!goodsList || !goodsList.length) {
    return (
      <div className={`goods-wrapper ${className}`}>
        <ul className="goods-list" />
      </div>
    )
  }

  return (
    <div className={`goods-wrapper ${className}`}>
      <ul className="goods-list">
        {goodsList?.map(item => (
          <GoodsItem
            key={item.id}
            id={item.id}
            isLiked={item.isLiked}
            src={item.mainImageUrl}
            title={item.title}
            tradeArea={item.tradeArea}
            tradeStatus={item.tradeStatus}
            modifiedDate={item.modifiedDate}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  )
}
GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
}

export default GoodsList
