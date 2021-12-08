import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import IconButton from '@components/templates/IconButton'

const ProductItem = props => {
  const imgStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  }

  const heartIconStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    width: '30px !important',
    height: '30px !important',
  }

  return (
    <div className="product">
      <div className="product-img-container">
        <Image
          style={imgStyle}
          className="product-img"
          src="https://picsum.photos/200/300"
        />
        <IconButton
          style={heartIconStyle}
          className="product-icon_heart"
          src={require('@assets/images/icon/heart_blank.svg')}
          alt="필터"
          onClick={() => {
            console.log('필터')
          }}
        />
      </div>
      <p className="product-cont_title">MaisonMargiela wool swater</p>
      <div className="product-cont_meta">
        <span>관악구 봉천동</span>
        <Divider
          type="vertical"
          height="8"
          style={{ border: '1px solid #ddd' }}
        />
        <span>2분 전</span>
      </div>
      <p className="product-cont_price">165,000원</p>
    </div>
  )
}
ProductItem.propTypes = {}

export default ProductItem
