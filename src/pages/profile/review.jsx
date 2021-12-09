import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@components/templates/Avatar'
import Button from '@components/templates/Button'

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
  },
  {
    id: 3,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
  {
    id: 4,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
  {
    id: 5,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
  {
    id: 6,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
  {
    id: 7,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
  {
    id: 8,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
  {
    id: 9,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
  {
    id: 10,
    reviewer: '황금효정',
    level: '1',
    content: '쿨거래 좌요 좌요잉',
    src: 'https://i.pinimg.com/736x/2b/21/0a/2b210ad8318d297115b7d95335b918ec--japan.jpg',
    title: '급처급처',
    time: '2분전',
  },
]
const review = props => {
  const ulStyle = {
    listStyle: 'none',
    fontSize: '14px',
  }

  const avatarStyle = {
    width: '90px',
    height: '90px',
  }

  const btnStyle = {
    width: '90px',
    height: '30px',
    fontSize: '14px',
  }

  return (
    <div className="review">
      <ul className="review-list" style={ulStyle}>
        {reviewList.map(item => (
          <li key={item.id} className="review-item">
            <div className="review-profile-box">
              <Avatar
                src={item.src}
                className="review-profile-img"
                style={avatarStyle}
              />
              <div className="review-profile_inform">
                <div className="review-reviewer-box">
                  <span className="review-reviewer-name">{item.reviewer}</span>
                  <span className="review-reviewer-level">
                    Lv. {item.level}
                  </span>
                </div>
                <span>{item.content}</span>
                <div>{item.title}</div>
              </div>
              <div className="review-side-box">
                <span>{item.time}</span>
                <Button style={btnStyle}>후기 남기기</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

review.propTypes = {}

export default review
