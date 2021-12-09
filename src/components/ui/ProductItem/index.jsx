import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import Like from '@components/templates/ToggleButton'

const ProductItem = ({ src, title, time, location, price }) => {
  const imgContainerStyle = {
    width: '100%',
    height: '300px',
    marginBottom: '10px',
    position: 'relative',
  }
  const imgStyle = {
    width: '100%',
    height: '100%',
  }

  const heartIconStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    width: '35px !important',
    height: '35px !important',
    backgroundColor: 'white',
    opacity: '.7',
    borderRadius: '100%',
    padding: '6px',
    boxSizing: 'border-box',
  }

  return (
    <div className="product">
      <div style={imgContainerStyle} className="product-img-container">
        <Image
          style={imgStyle}
          className="product-img"
          src={src}
          mode="cover"
          ratio="rectangle-h"
          placeholder="https://www.urbansplash.co.uk/images/placeholder-16-9.jpg"
          alt={title}
        />
        <Like
          style={heartIconStyle}
          className="product-icon_heart"
          src={require('@assets/images/icon/heart_blank.svg').default.src}
          alt="좋아요"
          onClick={() => {
            console.log('좌요~좌요~')
          }}
        />
      </div>
      <div className="product-cont">
        <p className="product-cont_title">{title || '상품 이름 없음'}</p>
        <div className="product-cont_meta">
          <span>{location || '지역 정보 없음'}</span>
          <Divider
            type="vertical"
            height="8"
            style={{ border: '1px solid #ddd' }}
          />
          <span>{time || '시간 정보 없음'}</span>
        </div>
        <p className="product-cont_price">{price || '가격 정보 없음'}</p>
      </div>
    </div>
  )
}
ProductItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
}

export default ProductItem