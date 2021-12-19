import ICONBUTTON from '@components/templates/IconButton'
import BANNER from '@components/templates/Banner'
import GoodsList from '@components/ui/GoodsList'
import {
  MAIN_BANNER1,
  MAIN_BANNER2,
  MAIN_BANNER3,
  CATEGORY_BEST_GOODS,
  CATEGORY_BOOKS,
  CATEGORY_FORNITURE,
  CATEGORY_GAME,
  CATEGORY_LIFE_GOODS,
  CATEGORY_PET_GOODS,
  CATEGORY_SHARE,
  CATEGORY_SPORTS,
  CATEGORY_WOMEN_GOODS,
  CATEGORY_WOMAN_WEAR,
} from '@utils/constant'
import { useCallback, useEffect, useState } from 'react'
import { articleApi } from '@api/apis'
import { useAuthContext } from '@hooks/useAuthContext'

const Main = () => {
  const categoryList = [
    {
      value: 1,
      text: '인기상품',
      src: CATEGORY_BEST_GOODS,
    },
    {
      value: 2,
      text: '여성의류',
      src: CATEGORY_WOMAN_WEAR,
    },
    {
      value: 3,
      text: '여성잡화',
      src: CATEGORY_WOMEN_GOODS,
    },
    {
      value: 4,
      text: '생활 가전',
      src: CATEGORY_LIFE_GOODS,
    },
    {
      value: 5,
      text: '가구/인테리어',
      src: CATEGORY_FORNITURE,
    },
    {
      value: 6,
      text: '게임/취미',
      src: CATEGORY_GAME,
    },
    {
      value: 7,
      text: '도서',
      src: CATEGORY_BOOKS,
    },
    {
      value: 8,
      text: '스포츠/레저',
      src: CATEGORY_SPORTS,
    },
    {
      value: 9,
      text: '반려동물 제품',
      src: CATEGORY_PET_GOODS,
    },
    {
      value: 10,
      text: '나눔',
      src: CATEGORY_SHARE,
    },
  ]

  const { state } = useAuthContext()

  const [goodsList, setGoodsList] = useState({
    elements: [],
    totalElementCount: 0,
  })

  const [searchOptions, _] = useState({
    title: '',
    page: 1,
    size: 10,
  })

  const fetchGoodsList = useCallback(async () => {
    const res = state.token
      ? await articleApi.searchArticlesWithAuth(searchOptions)
      : await articleApi.searchArticles(searchOptions)

    setGoodsList({
      elements: res.data.elements,
      totalElementCount: res.data.pageInfo.totalElementCount,
    })
  }, [])

  useEffect(async () => {
    await fetchGoodsList()
  }, [])

  return (
    <div className="main">
      <div className="banner-wrapper">
        <BANNER
          imgUrls={[MAIN_BANNER1, MAIN_BANNER2, MAIN_BANNER3]}
          style={{
            width: '100%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
          isPost={false}
        />
      </div>
      <div className="category-wrapper">
        <div className="category-list">
          {categoryList.map(categoryList => (
            <div className="category" key={categoryList.value}>
              <ICONBUTTON
                className="category-icn"
                src={categoryList.src}
                alt={categoryList.text}
                //   onClick={categoryClick(categoryList)}
              />
              <div className="category-text">{categoryList.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="newgoods-title">신규상품</div>
      <GoodsList goodsList={goodsList.elements} />
    </div>
  )
}

export default Main
