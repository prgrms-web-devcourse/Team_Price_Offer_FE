import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import LikeButton from '@components/ui/LikeButton'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { timeForToday, convertPrice } from '@utils/functions'

const GoodsItem = ({ item, haveAuth }) => {
  const router = useRouter()

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

  const handleOnClick = (e, postId) => {
    if (e.target.name === 'like') {
      return
    }

    router.push(`/post/${postId}`)
  }

  return (
    <div className="goods">
      <ImgContainer
        className="goods-img-container"
        onClick={e => handleOnClick(e, item.id)}>
        {item.tradeStatus.code !== 4 && (
          <ImgMask>
            <span>{item.tradeStatus.name}</span>
          </ImgMask>
        )}
        <Image
          style={imgStyle}
          className="goods-img"
          src={item.mainImageUrl}
          mode="cover"
          ratio="rectangle-h"
          placeholder="https://www.urbansplash.co.uk/images/placeholder-16-9.jpg"
          alt={item.title}
        />
        {haveAuth && (
          <LikeButton
            name="like"
            className="goods-icon_heart"
            style={heartIconStyle}
            postId={item.id}
            isLiked={item.isLiked}
          />
        )}
      </ImgContainer>
      <div className="goods-cont">
        <p
          className="goods-cont_title"
          style={{ cursor: 'pointer' }}
          onClick={() => handleOnClick(item.id)}>
          {item.title || '상품 이름 없음'}
        </p>
        <div className="goods-cont_meta">
          <span>{item.tradeArea || '지역 정보 없음'}</span>
          <Divider
            type="vertical"
            height="8"
            style={{ border: '1px solid #ddd' }}
          />
          <span>{timeForToday(item.createdDate) || '시간 정보 없음'}</span>
        </div>
        <div className="goods-cont_bottom">
          <p className="goods-cont_price">
            {`${convertPrice(item.price)}원` || '가격 정보 없음'}
          </p>
        </div>
      </div>
    </div>
  )
}

GoodsItem.propTypes = {
  item: PropTypes.shape({ root: PropTypes.string.isRequired }),
}

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
  cursor: pointer;
`

const ImgMask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 17px;
  pointer-events: none;
  user-select: none;
  cursor: pointer;
`

export default GoodsItem
