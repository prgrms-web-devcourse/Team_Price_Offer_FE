import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import Like from '@components/templates/ToggleButton'
import Button from '@components/templates/Button'

const GoodsItem = ({ src, title, time, location, price, btnValue = false }) => {
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

  const btnStyle = {
    width: '60px',
    height: '20px',
    fontSize: '10px',
  }

  return (
    <div className="goods">
      <div style={imgContainerStyle} className="goods-img-container">
        <Image
          style={imgStyle}
          className="goods-img"
          src={src}
          mode="cover"
          ratio="rectangle-h"
          placeholder="https://www.urbansplash.co.uk/images/placeholder-16-9.jpg"
          alt={title}
        />
        <Like
          style={heartIconStyle}
          className="goods-icon_heart"
          src={require('@assets/images/icon/heart_blank.svg').default.src}
          alt="좋아요"
          onClick={() => {
            console.log('좌요~좌요~')
          }}
        />
      </div>
      <div className="goods-cont">
        <p className="goods-cont_title">{title || '상품 이름 없음'}</p>
        <div className="goods-cont_meta">
          <span>{location || '지역 정보 없음'}</span>
          <Divider
            type="vertical"
            height="8"
            style={{ border: '1px solid #ddd' }}
          />
          <span>{time || '시간 정보 없음'}</span>
        </div>
        <div className="goods-cont_bottom">
          <p className="goods-cont_price">{price || '가격 정보 없음'}</p>
          {btnValue && (
            <Button style={btnStyle} className="goods-cont_btn">
              후기 보기
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

GoodsItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
}

export default GoodsItem
