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
  blockNum = 10, // 몇페이지씩 나오냐
  postListLength = 155,
  size = 10, // 페이지에 몇개 포스팅
  paginate, // 클릭했을때 작동하는 함수(api 바꿀때)
  setStartPage, // 현재페이지가 어딧는지 만들고,
}) => {
  const currentPage = useRef(1)
  const startPage = useRef(1)
  const endPage = useRef(blockNum)
  const maxPageNumber = Math.ceil(postListLength / size)
  const pageNumbers = Array.from(
    { length: maxPageNumber },
    (_, index) => index + 1,
  )

  const hadleClickPageNum = num => {
    if (num !== currentPage.current) {
      paginate(num)
      currentPage.current = num
    }
  }

  const prevPage = () => {
    if (startPage.current - blockNum > 0) {
      startPage.current -= blockNum
      endPage.current -= blockNum
      setStartPage(startPage.current)
      currentPage.current = startPage.current
    }
  }

  const nextPage = () => {
    if (startPage.current + blockNum < maxPageNumber + 1) {
      startPage.current += blockNum
      endPage.current += blockNum
      setStartPage(startPage.current)
      currentPage.current = startPage.current
    }
  }

  return (
    <PaginationContainer className={className}>
      {postListLength !== 0 && (
        <>
          <span onClick={prevPage} style={{ cursor: 'pointer' }}>
            <img src={PAGINATION_ARROW_LEFT} alt="이전페이지" />
          </span>
          <Ul>
            {pageNumbers
              .filter(num => num >= startPage.current && num <= endPage.current)
              .map(num => (
                <Li key={num}>
                  <Btn
                    style={btnStyle}
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
        </>
      )}
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`

const Ul = styled.ul`
  list-style: none;
  margin: 0 20px;
  display: flex;
  justify-content: center;
`
const Li = styled.li`
  background-color: white;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
`

const Btn = styled.button`
  background-color: white;
  border: none;
  padding: 20%;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-size: 14px;
  cursor: pointer;

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

Pagination.propTypes = {
  btnStyle: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  blockNum: PropTypes.number,
  postListLength: PropTypes.number,
  size: PropTypes.number,
  paginate: PropTypes.func,
  setStartPage: PropTypes.func,
}

export default Pagination
