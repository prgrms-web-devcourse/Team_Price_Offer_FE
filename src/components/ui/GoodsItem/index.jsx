import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Link from 'next/dist/client/link'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import Like from '@components/templates/ToggleButton'
import Button from '@components/templates/Button'
import useConvertTime from '@hooks/useConvertTime'
import { NO_IMAGE_RECTANGLE_H } from '@utils/constant'

const GoodsItem = ({
  id,
  src,
  isLiked,
  title,
  modifiedDate,
  tradeArea,
  tradeStatus,
  price,
  btnValue = false,
}) => {
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
    <div style={{ cursor: 'pointer' }}>
      <Link href={`/post/${id}`}>
        <div className="goods">
          <div style={imgContainerStyle} className="goods-img-container">
            {tradeStatus?.code === 8 && <ImgMask>{tradeStatus.name}</ImgMask>}
            <Image
              style={imgStyle}
              className="goods-img"
              src={src || NO_IMAGE_RECTANGLE_H}
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
              <span>{tradeArea || '지역 정보 없음'}</span>
              <Divider
                type="vertical"
                height="8"
                style={{ border: '1px solid #ddd' }}
              />
              <span>{useConvertTime(modifiedDate) || '시간 정보 없음'}</span>
            </div>
            <div className="goods-cont_bottom">
              <p className="goods-cont_price">
                {`${price}원` || '가격 정보 없음'}
              </p>
              {btnValue && (
                <Button style={btnStyle} className="goods-cont_btn">
                  후기 보기
                </Button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

GoodsItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  title: PropTypes.string,
  modifiedDate: PropTypes.string,
  tradeArea: PropTypes.string,
  tradeStatus: PropTypes.objectOf(PropTypes.string),
  price: PropTypes.number,
}

const ImgMask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
`

export default GoodsItem
