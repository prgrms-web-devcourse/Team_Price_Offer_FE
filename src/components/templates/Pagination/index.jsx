import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { PRIMARY } from '@utils/constant'
import {
  PAGINATION_ARROW_LEFT,
  PAGINATION_ARROW_RIGHT,
} from '@utils/constant/icon'

const Pagination = ({
  btnStyle,
  className,
  postListLength = 155,
  postPerPage = 10,
  paginate,
}) => {
  const imgStyle = {
    cursor: 'pointer',
  }
  const currentPage = useRef(1)
  const blockNum = useRef(10)
  const maxPageNumber = Math.ceil(postListLength / postPerPage) - 1
  const pageNumbers = Array.from(
    { length: maxPageNumber },
    (_, index) => index + 1,
  )

  const hadleClickPageNum = num => {
    paginate(num)
    currentPage.current = num
    console.log('하이', num)
  }
  const prevPage = () => {
    currentPage.current - 1 > 0 && (currentPage.current -= 1)
    console.log(currentPage)
  }

  const nextPage = () => {
    currentPage.current + 1 < maxPageNumber + 1 && (currentPage.current += 1)
    console.log(currentPage)
  }
  // const showPageArray = pageNumbers.splice(currentPage)

  return (
    <Ul>
      <Li>
        <span onClick={prevPage}>
          <img style={imgStyle} src={PAGINATION_ARROW_LEFT} alt="이전페이지" />
        </span>
      </Li>
      {pageNumbers.map(num => (
        <Li key={num} className={num === currentPage && 'selected'}>
          <button
            style={btnStyle}
            className={className}
            onClick={() => hadleClickPageNum(num)}>
            {num}
          </button>
        </Li>
      ))}
      <Li>
        <span onClick={nextPage}>
          <img style={imgStyle} src={PAGINATION_ARROW_RIGHT} alt="다음페이지" />
        </span>
      </Li>
    </Ul>
  )
}

const Ul = styled.ul`
  list-style: none;
`
const Li = styled.li`
  float: left;
`

Pagination.propTypes = {}

export default Pagination
