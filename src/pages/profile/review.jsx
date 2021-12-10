import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@components/templates/Avatar'
import Button from '@components/templates/Button'
import Divider from '@components/templates/Divider'

const reviewList = [
  {
    id: 1,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title:
      '급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처',
    address: '서울시 강북구',
    time: '2분전',
    goodsSold: true,
    review: true,
  },
  {
    id: 2,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    price: '10',
    goodsSold: true,
    review: true,
  },
  {
    id: 3,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: true,
  },
  {
    id: 4,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: false,
  },
  {
    id: 5,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: false,
  },
  {
    id: 6,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: true,
  },
  {
    id: 7,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: false,
  },
  {
    id: 8,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: true,
  },
  {
    id: 9,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: true,
  },
  {
    id: 10,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
    goodsSold: true,
    review: true,
  },
]
const review = props => {
  const ulStyle = {
    listStyle: 'none',
    fontSize: '14px',
  }

  const avatarStyle = {
    width: '85px',
    height: '85px',
  }
  const reviewBtnStyle = {
    height: '30px',
    fontSize: '14px',
  }

  const arrowImgPath = require('@assets/images/icon/profile_arrow.svg').default
    .src

  return (
    <div className="review">
      <ul className="review-list" style={ulStyle}>
        {reviewList.map(item => (
          <>
            <li key={item.id} className="review-item">
              <div className="review-profile-box">
                <Avatar
                  src={item.src}
                  className="review-profile-img"
                  style={avatarStyle}
                />
                <div className="review-profile_inform">
                  <div className="review-reviewer">
                    <span className="review-reviewer_name">
                      {item.reviewer}
                    </span>
                    <span className="review-reviewer_level">
                      Lv. {item.level}
                    </span>
                  </div>
                  <div className="review-reviewer_content">{item.content}</div>
                  <Button
                    className="review-goods_btn-wrapper"
                    style={{ border: '1px solid #ccc' }}>
                    <div className="review-goods_btn">
                      <div className="review-goods_btn_text">
                        {item.goodsSold ? '판매상품' : '구매상품'}
                        <Divider type="vertical" />
                        {item.title}
                      </div>
                      <div className="review-goods_btn_icn">
                        <img
                          src={arrowImgPath}
                          alt="arrow"
                          className="review-goods_icon_arrow"
                        />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="review-side-box">
                <div style={{ width: '100%', textAlign: 'right' }}>
                  {item.time}
                </div>
                <Button
                  style={reviewBtnStyle}
                  className={`review-review_btn ${!item.review && 'leave'}`}>
                  {item.review === true ? '후기 보기' : '후기 남기기'}
                </Button>
              </div>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  )
}

review.propTypes = {}

export default review
