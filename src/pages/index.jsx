import ICONBUTTON from '@components/templates/IconButton'
import BANNER from '@components/templates/Banner'
import GoodsList from '@components/ui/GoodsList'

const Main = () => {
  const categoryList = [
    {
      value: 1,
      text: '인기상품',
      src: require('../assets/images/icon/category_bestgoods.svg').default.src,
    },
    {
      value: 2,
      text: '여성의류',
      src: require('../assets/images/icon/category_womenwear.svg').default.src,
    },
    {
      value: 3,
      text: '여성잡화',
      src: require('../assets/images/icon/category_womengoods.svg').default.src,
    },
    {
      value: 4,
      text: '생활 가전',
      src: require('../assets/images/icon/category_lifegoods.svg').default.src,
    },
    {
      value: 5,
      text: '가구/인테리어',
      src: require('../assets/images/icon/category_furniture.svg').default.src,
    },
    {
      value: 6,
      text: '게임/취미',
      src: require('../assets/images/icon/category_game.svg').default.src,
    },
    {
      value: 7,
      text: '도서',
      src: require('../assets/images/icon/category_book.svg').default.src,
    },
    {
      value: 8,
      text: '스포츠/레저',
      src: require('../assets/images/icon/category_sports.svg').default.src,
    },
    {
      value: 9,
      text: '반려동물 제품',
      src: require('../assets/images/icon/category_petgoods.svg').default.src,
    },
    {
      value: 10,
      text: '나눔',
      src: require('../assets/images/icon/category_share.svg').default.src,
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
      price: '160',
    },
    {
      id: 2,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 3,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 4,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 5,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 6,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 7,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 8,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 9,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
    },
    {
      id: 10,
      src: '',
      title: '급처급처',
      address: '서울시 강북구',
      time: '2분전',
      price: '160',
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
                src={categoryList.src}
                alt={categoryList.text}
                style={{
                  width: '40px',
                  height: '40px',
                  alignSelf: 'center',
                }}
                //   onClick={categoryClick(categoryList)}
              />
              <div className="category-text">{categoryList.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="newgoodstext-wrapper">
        <div className="newgoodstext-container">
          <div className="newgoods-title">신규상품</div>
        </div>
      </div>
      <GoodsList goodsList={goodsList} />
    </div>
  )
}

export default Main
