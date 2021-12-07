import React, { useState } from 'react'
import Radio from '@components/templates/Radio'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import IconButton from '@components/templates/IconButton'
import Image from '@components/templates/Image'
import Divider from '@components/templates/Divider'
import useClickAway from '@hooks/useClickAway'
import { CATEGORIES } from '../data/dummy/categories'
import { ORDERWAY } from '../data/dummy/orderway'

const search = props => {
  const ref = useClickAway(e => {
    setIsopenedFilter(false)
  })
  const [isopenedFilter, setIsopenedFilter] = useState(false)

  const inputStyle = {
    width: '95px',
    height: '44px',
    padding: '12px 20px',
    fontSize: '14px',
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
    <>
      <div className={isopenedFilter ? 'filter_mask show' : 'filter_mask'}>
        <div className="filter_container" ref={ref}>
          <div className="filter_wrapper">
            <div className="filter-cont_wrapper">
              <div className="filter-cont">
                <h3 className="cont-title">카테고리</h3>
                <ul className="cont-item_list category">
                  {CATEGORIES.map(({ code, name }) => (
                    <li key={code} className="cont-item">
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="filter-cont">
                <h3 className="cont-title">거래방식</h3>
                <div className="cont-item_list orderway">
                  <Radio
                    formName="orderWay"
                    items={ORDERWAY}
                    className="cont-item"
                    size="21px"
                    fontSize="14px"
                    radioDirection="vertical"
                  />
                </div>
              </div>
              <div className="filter-cont">
                <h3 className="cont-title">가격</h3>
                <div className="cont-item_list">
                  <p className="cont-item_input">
                    <Input
                      placeholder="최소 가격"
                      style={{ ...inputStyle, marginRight: '20px' }}
                    />
                    <Input placeholder="최대 가격" style={inputStyle} />
                  </p>
                  <p className="cont-item_notice">
                    가격은 숫자로만 입력할 수 있어요!
                  </p>
                </div>
              </div>
            </div>
            <div className="filter-btn_wrapper">
              <Button style={{ ...btnStyle, ...resetBtnStyle }}>초기화</Button>
              <Button style={btnStyle}>필터 적용</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="search-result_container">
        <div className="search-result_header">
          <div className="search-result_title">
            <h3>"maison margiela"의 검색결과</h3>
            <span>30</span>
          </div>
          <div className="search-result_filter-wrapper">
            <div className="search-result_filter">
              <div
                className="filter-btn"
                onClick={() => setIsopenedFilter(!isopenedFilter)}>
                <span>필터</span>
                <IconButton
                  className="btn-icon"
                  src={require('@assets/images/icon/filter.svg').default.src}
                  alt="필터"
                  onClick={() => {
                    console.log('필터')
                  }}
                />
              </div>
            </div>
            <div className="search-result_filter-sort">
              <div className="filter-sort recent active">최신순</div>
              <div className="filter-sort price-low">낮은 가격순</div>
              <div className="filter-sort price-high">높은 가격순</div>
            </div>
          </div>
        </div>
        <div className="search-result_body">
          <div className="search-result_item">
            <div className="item-cont">
              <Image
                className="cont-img"
                width="180px"
                height="225px"
                src="https://picsum.photos/200/300"
              />
              <IconButton
                className="cont-heart"
                src={require('@assets/images/icon/heart_blank.svg').default.src}
                alt="필터"
                onClick={() => {
                  console.log('필터')
                }}
              />
            </div>
            <p className="item-title">MaisonMargiela wool swater</p>
            <div className="item-meta">
              <span>관악구 봉천동</span>
              <Divider
                type="vertical"
                height="8"
                style={{ border: '1px solid #ddd' }}
              />
              <span>2분 전</span>
            </div>
            <p className="item-price">165,000원</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default search
