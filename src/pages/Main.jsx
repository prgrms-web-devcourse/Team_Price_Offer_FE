import Button from '@components/templates/Button'
import IMG from '@components/templates/Image'
import ICONBUTTON from '@components/templates/IconButton'
import DIVIDER from '@components/templates/Divider'
import Like from '@components/templates/ToggleButton'
import styles from '@assets/css/Main.module.css'

const MainPage = () => {
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
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header} />
      </div>
      <div className={styles.bannerWrapper}>
        <div className={styles.banner}>banner</div>
      </div>

      <div className={styles.categoryWrapper}>
        <div className={styles.categoryList}>
          {categoryList.map(categoryList => (
            <div className={styles.category} key={categoryList.value}>
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
              <div className={styles.categorytext}>{categoryList.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.newgoodstextWrapper}>
        <div className={styles.newgoodstextContainer}>
          <div className={styles.newgoodsTitle}>신규상품</div>
        </div>
      </div>

      <div className={styles.newgoodsWwrapper}>
        <ul className={styles.newgoodsList}>
          {goodsList.map(goodsList => (
            <li className={styles.newgoods} key={goodsList.id}>
              <IMG
                src="https://picsum.photos/200"
                width="183px"
                height="227px"
                ration="rectangle-h"
                style={{
                  border: 'none',
                }}
              />
              <div
                className="likeBorder"
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '10px',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50px',
                }}>
                <Like
                  src={categoryList.src}
                  alt={categoryList.text}
                  style={{
                    position: 'absolute',
                    top: '5.3px',
                    right: '5.1px',
                    width: '20px',
                    height: '20px',
                    alignSelf: 'center',
                  }}
                  //   onClick={categoryClick(categoryList)}
                />
              </div>
              <div>
                <div className={styles.infoTop}>{goodsList.title}</div>
                <div className={styles.infoMiddle}>
                  {goodsList.address}
                  <DIVIDER type="vertical" style={{ color: '#DDDDDD' }} />
                  {goodsList.time}
                </div>
                <div className={styles.infoBottom}>{goodsList.price} 원</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MainPage
