import Button from '@components/templates/Button'
import IMG from '@components/templates/Image'
import ICONBUTTON from '@components/templates/IconButton'
import DIVIDER from '@components/templates/Divider'
import styles from '@assets/css/Main.module.css'
import { ReactComponent as Bestgoods } from '../assets/svg/category_bestgoods.svg'

const MainPage = () => {
  const categoryList = [
    {
      value: 1,
      text: '인기상품',
      // src: require('../assets/svg/category_bestgoods.svg'),
      src: '/favicon.ico',
    },
    {
      value: 2,
      text: '여성의류',
      src: '/favicon.ico',
    },
    {
      value: 3,
      text: '여성잡화',
      src: '/favicon.ico',
    },
    {
      value: 4,
      text: '생활 가전',
      src: '/favicon.ico',
    },
    {
      value: 5,
      text: '가구/인테리어',
      src: '/favicon.ico',
    },
    {
      value: 6,
      text: '게임/취미',
      src: '/favicon.ico',
    },
    {
      value: 7,
      text: '도서',
      src: '/favicon.ico',
    },
    {
      value: 8,
      text: '스포츠/레저',
      src: '/favicon.ico',
    },
    {
      value: 9,
      text: '반려동물 제품',
      src: '/favicon.ico',
    },
    {
      value: 10,
      text: '나눔',
      src: '/favicon.ico',
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
  ]
  const categoryClick = () => {
    // alert(`${categoryList.text} 선택`)
    alert('a')
  }

  return (
    <>
      <div className={styles.headerWrapper}>
        <div
          className={styles.header}/>
      </div>
      <div
        className={styles.bannerWrapper}>
        <div className={styles.banner}>
          banner
        </div>
      </div>

      <div className={styles.categoryWrapper}>
        <div className={styles.categoryList}>
          {categoryList.map(categoryList => (
              <div
              className={styles.category}
              key={categoryList.value}>
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
              <div className={styles.categorytext}>
                {categoryList.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    <div className={ styles.newgoodstextWrapper}>
              <div className={styles.newgoodstextContainer}>
                  <div
                      className={styles.newgoodsTitle}>신규상품
                  </div>
              </div>
    </div>
    
     <div className={styles.newgoodsWwrapper}>
        <ul className={styles.newgoodsList}>
          {goodsList.map(goodsList => (
              <li
                  className={styles.newgoods}
                  key={goodsList.id}>
              <IMG
                src="/favicon.ico"
                width="183px"
                height="227px"
                style={{
                  border: 'none',
                }}
              />
              <ICONBUTTON
                src={categoryList.src}
                alt={categoryList.text}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '10px',
                  // left: '143px',
                  width: '40px',
                  height: '40px',
                  alignSelf: 'center',
                }}
                //   onClick={categoryClick(categoryList)}
              />
              <div>
                      <div className={ styles.infoTop}>
                  {goodsList.title}
                </div>
                <div className={styles.infoMiddle}>
                  {goodsList.address}
                  <DIVIDER type="vertical" style={{ color: '#DDDDDD' }} />
                  {goodsList.time}
                </div>
                <div
                  className={styles.infoBottom}>
                  {goodsList.price} 원
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MainPage
