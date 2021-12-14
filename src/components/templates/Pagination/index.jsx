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

  const containerStyle = {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const ulStyle = {
    margin: '0 20px',
    minWidth: '340px',
    display: 'flex',
    justifyContent: 'center',
  }

  const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 2px',
    backgroundColor: 'white',
  }

  const defaultBtnStyle = {
    border: 'none',
    padding: '20%',
    borderRadius: '100%',
    width: '30px',
    height: '30px',
    fontSize: '14px',
    cursor: 'pointer',
    ...btnStyle,
  }

  return (
    <PaginationContainer style={containerStyle} className={className}>
      <span onClick={prevPage} style={{ cursor: 'pointer' }}>
        <img src={PAGINATION_ARROW_LEFT} alt="이전페이지" />
      </span>
      <Ul style={ulStyle}>
        {pageNumbers
          .filter(num => num >= startPage.current && num <= endPage.current)
          .map(num => (
            <Li style={listStyle} key={num}>
              <Btn
                style={defaultBtnStyle}
                className={num === currentPage.current && 'selected'}
                onClick={() => hadleClickPageNum(num)}>
                {num}
              </Btn>
            </Li>
          ))}
      </Ul>
      <span onClick={nextPage} style={{ cursor: 'pointer' }}>
        <img src={PAGINATION_ARROW_RIGHT} alt="다음페이지" />
      </span>
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div``

const Ul = styled.ul`
  list-style: none;
`
const Li = styled.li`
  float: left;
`

const Btn = styled.button`
  background-color: white;
  &:hover {
    background-color: ${PRIMARY};
    color: white;
    transition: 0.3s;
  }

  &.selected {
    background-color: ${PRIMARY};
    color: white;
  }
`

Pagination.propTypes = {}

export default Pagination
