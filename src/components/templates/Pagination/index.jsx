import React from 'react'
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
  blockNum = 10,
  postListLength = 155,
  postPerPage = 10,
  paginate,
  prevPage,
  nextPage,
}) => {
  const imgStyle = {
    cursor: 'pointer',
  }

  const maxPageNumber = Math.ceil(postListLength / postPerPage) - 1
  const pageNumbers = Array.from(
    { length: maxPageNumber },
    (_, index) => index + 1,
  )

  console.log(PRIMARY)

  return (
    <Ul>
      <Li>
        <span onClick={prevPage}>
          <img style={imgStyle} src={PAGINATION_ARROW_LEFT} alt="이전페이지" />
        </span>
      </Li>
      {pageNumbers.map(num => (
        <Li key={num}>
          <button
            style={btnStyle}
            className={className}
            onClick={() => paginate(num)}>
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
