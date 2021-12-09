import React from 'react'
import PropTypes from 'prop-types'
import GoodsItem from '@components/ui/GoodsItem'

const GoodsList = ({ goodsList, className }) => {
  return (
    <div className={`goods-wrapper ${className}`}>
      <ul className="goods-list">
        {goodsList.map(item => (
          <GoodsItem
            key={item.id}
            src="https://img.khan.co.kr/news/2021/08/15/l_2021081501002249400192111.webp"
            title={item.title}
            location={item.address}
            time={item.time}
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
