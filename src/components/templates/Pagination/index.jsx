import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { PRIMARY } from '@utils/constant'
import {
  PAGINATION_ARROW_LEFT,
  PAGINATION_ARROW_RIGHT,
} from '@utils/constant/icon'

const Pagination = ({
  className,
  blockNum = 10,
  postListLength = 155,
  postPerPage = 10,
  paginate,
  setStartPage,
}) => {
  const currentPage = useRef(1)
  const startPage = useRef(1)
  const endPage = useRef(postPerPage)
  const maxPageNumber = Math.ceil(postListLength / postPerPage)
  const pageNumbers = Array.from(
    { length: maxPageNumber },
    (_, index) => index + 1,
  )

  const hadleClickPageNum = num => {
    paginate(num)
    currentPage.current = num
  }

  const prevPage = () => {
    if (startPage.current - blockNum > 0) {
      startPage.current -= blockNum
      endPage.current -= blockNum
      setStartPage(startPage.current)
    }
  }

  const nextPage = () => {
    if (startPage.current + blockNum < maxPageNumber + 1) {
      startPage.current += blockNum
      endPage.current += blockNum
      setStartPage(startPage.current)
    }
  }

  return (
    <Ul>
      <Li>
        <span onClick={prevPage}>
          <img src={PAGINATION_ARROW_LEFT} alt="이전페이지" />
        </span>
      </Li>
      {pageNumbers
        .filter(num => num >= startPage.current && num <= endPage.current)
        .map(num => (
          <Li key={num} className={num === currentPage && 'selected'}>
            <button
              className={className}
              onClick={() => hadleClickPageNum(num)}>
              {num}
            </button>
          </Li>
        ))}
      <Li>
        <span onClick={nextPage}>
          <img src={PAGINATION_ARROW_RIGHT} alt="다음페이지" />
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
