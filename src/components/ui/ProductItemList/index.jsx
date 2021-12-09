import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from '@components/ui/ProductItem'

const ProdductItemList = ({ goodsList, className }) => {
  return (
    <div className={`goods-wrapper ${className}`}>
      <ul className="goods-list">
        {goodsList.map(item => (
          <ProductItem
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
ProdductItemList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
}

export default ProdductItemList
