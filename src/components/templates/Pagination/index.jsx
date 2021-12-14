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
  postListLength = 155,
  postPerPage = 10,
  paginate,
}) => {
  const imgStyle = {
    cursor: 'pointer',
  }

  const pageNumbers = Array.from(
    { length: postListLength / postPerPage },
    (item, index) => index + 1,
  )

  console.log(PRIMARY)

  return (
    <Ul>
      <Li>
        <img style={imgStyle} src={PAGINATION_ARROW_LEFT} alt="이전페이지" />
      </Li>
      {pageNumbers.map(num => (
        <Li key={num}>
          <button
            style={btnStyle}
            className={className}
            // onClick={() => paginate(num)}
          >
            {num}
          </button>
        </Li>
      ))}
      <Li>
        <img style={imgStyle} src={PAGINATION_ARROW_RIGHT} alt="다음페이지" />
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
