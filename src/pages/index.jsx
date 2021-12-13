import ICONBUTTON from '@components/templates/IconButton'
import BANNER from '@components/templates/Banner'
import GoodsList from '@components/ui/GoodsList'
import { ICON_TYPES } from '@utils/constant/icon'

const {
  categoryBestGoods,
  categoryBook,
  categoryFurniture,
  categoryGame,
  categoryLifegoods,
  categoryPetgoods,
  categoryShare,
  categorySports,
  categoryWomengoods,
  categoryWomenwear,
} = ICON_TYPES

const Main = () => {
  const categoryList = [
    {
      value: 1,
      text: '인기상품',
      src: categoryBestGoods,
    },
    {
      value: 2,
      text: '여성의류',
      src: categoryWomenwear,
    },
    {
      value: 3,
      text: '여성잡화',
      src: categoryWomengoods,
    },
    {
      value: 4,
      text: '생활 가전',
      src: categoryLifegoods,
    },
    {
      value: 5,
      text: '가구/인테리어',
      src: categoryFurniture,
    },
    {
      value: 6,
      text: '게임/취미',
      src: categoryGame,
    },
    {
      value: 7,
      text: '도서',
      src: categoryBook,
    },
    {
      value: 8,
      text: '스포츠/레저',
      src: categorySports,
    },
    {
      value: 9,
      text: '반려동물 제품',
      src: categoryPetgoods,
    },
    {
      value: 10,
      text: '나눔',
      src: categoryShare,
    },
  ]
  const goodsList = [
    {
      id: 1,
      src: '',
      title:
        '급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 2,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 3,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 4,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 5,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 6,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 7,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 8,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 9,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
    {
      id: 10,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: 160,
    },
  ]
  const categoryClick = () => {
    // alert(`${categoryList.text} 선택`)
    alert('a')
  }

  return (
    <div className="main">
      <div className="banner-wrapper">
        <BANNER
          imgUrls={[
            'https://picsum.photos/200',
            'https://picsum.photos/200',
            'https://picsum.photos/200',
          ]}
          style={{
            width: '100%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
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
      <GoodsList goodsList={goodsList} />
    </div>
  )
}

export default Main
