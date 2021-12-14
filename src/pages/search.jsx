import React, { useState, useCallback, useEffect } from 'react'
import Radio from '@components/templates/Radio'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import IconButton from '@components/templates/IconButton'
import useClickAway from '@hooks/useClickAway'
import GoodsList from '@components/ui/GoodsList'
import { FILTER } from '@utils/constant/icon'
import { articleApi } from '@api/apis'
import { useRouter } from 'next/router'
import { CATEGORIES } from '../data/dummy/categories'
import { ORDERWAY } from '../data/dummy/orderway'

const search = props => {
  const router = useRouter()
  const { title } = router.query
  const [filters, setFilters] = useState({
    categoryId: null,
    minPrice: null,
    maxPrice: null,
    tradeMethodCode: null,
  })
  const [goodsList, setGoodsList] = useState([])

  const ref = useClickAway(e => {
    setIsopenedFilter(false)
  })

  const handleSetFilters = e => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value,
    })
  }

  const fetchGoodsListApi = async () => {
    const { data } = await articleApi.searchArticles({
      ...filters,
      title,
    })
    title && setGoodsList(data.elements)
  }

  useEffect(() => {
    if (!title) {
      router.push('/')
      return
    }
    fetchGoodsListApi()
  }, [title])

  const [isopenedFilter, setIsopenedFilter] = useState(false)

  const inputStyle = {
    width: '100%',
    height: '44px',
    fontSize: '14px',
    textAlign: 'center',
  }

  const btnStyle = {
    width: '150px',
    height: '40px',
    fontSize: '14px',
  }

  const resetBtnStyle = {
    marginRight: '30px',
    border: '1px solid #f74f2a',
    background: '#fff',
    color: '#f74f2a',
  }

  return (
    <div className="search">
      <div className={isopenedFilter ? 'filter-mask show' : 'filter-mask'}>
        <div className="filter-container" ref={ref}>
          <div className="filter-wrapper">
            <div className="filter-cont-wrapper">
              <div className="filter-cont">
                <h3 className="filter-cont_title">카테고리</h3>
                <ul className="filter-cont_item-list category">
                  {CATEGORIES.map(({ code, name }) => (
                    <li key={code} className="filter-cont_item">
                      <Button
                        value={code}
                        name="categoryId"
                        onClick={handleSetFilters}>
                        {name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="filter-cont">
                <h3 className="filter-cont_title">거래방식</h3>
                <div className="filter-cont_item-list orderway">
                  <Radio
                    formName="tradeMethodCode"
                    items={ORDERWAY}
                    className="filter-cont_item"
                    size="21px"
                    fontSize="14px"
                    radioDirection="vertical"
                    onChange={handleSetFilters}
                  />
                </div>
              </div>
              <div className="filter-cont">
                <h3 className="filter-cont_title">가격</h3>
                <div className="filter-cont_item-list">
                  <div className="filter-cont_item-input">
                    <Input
                      name="minPrice"
                      placeholder="최소 가격"
                      style={inputStyle}
                      onChange={handleSetFilters}
                    />
                    <Input
                      name="maxPrice"
                      placeholder="최대 가격"
                      style={inputStyle}
                      onChange={handleSetFilters}
                    />
                  </div>
                  <p className="filter-cont_item-notice">
                    가격은 숫자로만 입력할 수 있어요!
                  </p>
                </div>
              </div>
            </div>
            <div className="filter-btn-wrapper">
              <Button style={{ ...btnStyle, ...resetBtnStyle }}>초기화</Button>
              <Button style={btnStyle} onClick={fetchGoodsListApi}>
                필터 적용
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="result-container">
        <div className="result-header">
          <div className="result-title">
            <h3>{`"${title || ''}" 의 검색결과`}</h3>
            <span>{title ? goodsList.length : 0}</span>
          </div>
          <div className="result-filter-wrapper">
            <div className="result-filter">
              <div
                className="result-filter_btn"
                onClick={() => setIsopenedFilter(!isopenedFilter)}>
                <span>필터</span>
                <IconButton
                  className="result-filter_btn-icon"
                  src={FILTER}
                  alt="필터"
                  onClick={() => {
                    console.log('필터')
                  }}
                />
              </div>
            </div>
            <div className="result-filter_sort">
              <div className="result-filter_sort-item recent active">
                최신순
              </div>
              <div className="result-filter_sort-item price-low">
                낮은 가격순
              </div>
              <div className="result-filter_sort-item price-high">
                높은 가격순
              </div>
            </div>
          </div>
        </div>
        <div className="result-body">
          {title && <GoodsList goodsList={goodsList} />}
        </div>
      </div>
    </div>
  )
}

export default search
