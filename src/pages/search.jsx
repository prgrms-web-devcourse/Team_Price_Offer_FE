import React, { useState, useCallback, useRef, useEffect } from 'react'
import Radio from '@components/templates/Radio'
import Input from '@components/templates/Input'
import Button from '@components/templates/Button'
import IconButton from '@components/templates/IconButton'
import useClickAway from '@hooks/useClickAway'
import GoodsList from '@components/ui/GoodsList'
import { FILTER } from '@utils/constant/icon'
import { useRouter } from 'next/router'
import Pagination from '@components/templates/Pagination'
import { useAuthContext } from '@hooks/useAuthContext'
import { useFormik } from 'formik'
import validate from '@utils/validation'
import useApi from '@api/useApi'

export const getServerSideProps = async context => ({
  props: {
    title: context.query.title,
  },
})

const search = ({ title }) => {
  const router = useRouter()
  const { articleApi } = useApi()
  const { state } = useAuthContext()
  const [goodsList, setGoodsList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const articleInfo = useRef(null)
  const filterFormik = useFormik({
    initialValues: {
      categoryCode: '',
      minPrice: '',
      maxPrice: '',
      tradeMethodCode: '',
    },
    validate,
    onSubmit: filters => {
      fetchGoodsList(title, currentPage, filters)
      router.push({
        pathname: '/search',
        query: {
          title,
          ...filters,
        },
      })
    },
  })

  const ref = useClickAway(e => {
    setIsopenedFilter(false)
  })

  const handlePostRouting = postId => {
    postId &&
      router.push({
        pathname: `/post/${postId}`,
      })
  }

  const fetchGoodsList = useCallback(async (title, currentPage, filters) => {
    const searchOptions = {
      title,
      page: currentPage,
      size: 10,
    }

    filters && articleApi.searchFilterArticlesWithAuth

    console.log(searchOptions)
    const { data } = state.token
      ? filters
        ? await articleApi.searchFilterArticles({
            ...searchOptions,
            ...filters,
          })
        : await articleApi.searchArticlesWithAuth(searchOptions)
      : filters
      ? await articleApi.searchFilterArticles({
          ...searchOptions,
          ...filters,
        })
      : await articleApi.searchArticles(searchOptions)
    title && setGoodsList(data)
  }, [])

  useEffect(async () => {
    const { data } = await articleApi.getArticlesInfos()

    articleInfo.current = data
  }, [articleInfo])

  useEffect(() => {
    // if (!title) {
    //   router.push('/')
    //   return
    // }
    fetchGoodsList(title, currentPage)
  }, [title, currentPage])

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
    color: '#fff',
    background: '#f74f2a',
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
            <form
              onSubmit={filterFormik.handleSubmit}
              method="post"
              encType="multipart/form-data">
              <div className="filter-cont-wrapper">
                <div className="filter-cont">
                  <h3 className="filter-cont_title">????????????</h3>
                  <ul className="filter-cont_item-list category">
                    {articleInfo.current?.categories.map(({ code, name }) => (
                      <>
                        <input
                          type="radio"
                          name="categoryCode"
                          id={name}
                          className="filter_category-btn"
                          value={code}
                          onChange={filterFormik.handleChange}
                        />
                        <label
                          className="search-filter_category"
                          htmlFor={name}
                          key={code}
                          value={code}>
                          {name}
                        </label>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="filter-cont">
                  <h3 className="filter-cont_title">????????????</h3>
                  <div className="filter-cont_item-list orderway">
                    {articleInfo.current?.tradeMethod.map(({ code, name }) => (
                      <label
                        className="search-filter_trade-method"
                        htmlFor={name}
                        key={code}
                        value={filterFormik.values.tradeMethodCode}>
                        <input
                          type="radio"
                          name="tradeMethodCode"
                          id={name}
                          className="filter_trademethod-btn"
                          value={code}
                          onChange={filterFormik.handleChange}
                        />
                        {name}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="filter-cont">
                  <h3 className="filter-cont_title">??????</h3>
                  <div className="filter-cont_item-list">
                    <div className="filter-cont_item-input">
                      <Input
                        name="minPrice"
                        placeholder="?????? ??????"
                        style={inputStyle}
                        className="filter_minprice-input"
                        type="number"
                        onChange={filterFormik.handleChange}
                        value={filterFormik.values.minPrice}
                      />
                      <Input
                        name="maxPrice"
                        placeholder="?????? ??????"
                        style={inputStyle}
                        className="filter_maxprice-input"
                        type="number"
                        onChange={filterFormik.handleChange}
                        value={filterFormik.values.maxPrice}
                      />
                      <div className="validation search">
                        {filterFormik.errors.maxPrice}
                      </div>
                    </div>
                    {/* <p className="filter-cont_item-notice">
                      ????????? ???????????? ????????? ??? ?????????!
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="filter-btn-wrapper">
                <Button type="reset" style={{ ...btnStyle, ...resetBtnStyle }}>
                  ?????????
                </Button>
                <Button type="submit" style={btnStyle}>
                  ?????? ??????
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="result-container">
        <div className="result-header">
          <div className="result-title">
            <h3>{`"${title || ''}" ??? ????????????`}</h3>
            <span>{title ? goodsList.length : 0}</span>
          </div>
          <div className="result-filter-wrapper">
            <div className="result-filter">
              <div
                className="result-filter_btn"
                onClick={() => setIsopenedFilter(!isopenedFilter)}>
                <span>??????</span>
                <IconButton
                  className="result-filter_btn-icon"
                  src={FILTER}
                  alt="??????"
                  onClick={() => {
                    // console.log('??????')
                  }}
                />
              </div>
            </div>
            <div className="result-filter_sort">
              <div className="result-filter_sort-item recent active">
                ?????????
              </div>
              <div className="result-filter_sort-item price-low">
                ?????? ?????????
              </div>
              <div className="result-filter_sort-item price-high">
                ?????? ?????????
              </div>
            </div>
          </div>
        </div>
        <div className="result-body">
          {goodsList.elements && (
            <GoodsList
              goodsList={goodsList.elements}
              onClick={handlePostRouting}
            />
          )}
        </div>
        <div className="result-pagination">
          <Pagination
            paginate={setCurrentPage}
            setStartPage={setCurrentPage}
            postListLength={goodsList.pageInfo?.totalElementCount}
          />
        </div>
      </div>
    </div>
  )
}

export default search
