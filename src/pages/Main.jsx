import Button from '@components/templates/Button'
import IMG from '@components/templates/Image'
import ICONBUTTON from '@components/templates/IconButton'
import DIVIDER from '@components/templates/Divider'
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
      <div
        className="header-wrapper"
        style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="header"
          style={{ width: '1280px', height: '102px', backgroundColor: 'black' }}
        />
      </div>
      <div
        className="banner-wrapper"
        style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="banner"
          style={{
            width: '996px',
            height: '329px',
            backgroundColor: '#888888',
            alignSelf: 'center',
            color: 'white',
          }}>
          banner
        </div>
      </div>

      <div
        className="category-wrapper"
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <div
          className="category-List"
          style={{
            width: '976.39px',
            height: '79.5px;',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          {categoryList.map(categoryList => (
            <div
              key={categoryList.value}
              style={{
                width: '63.38px',
                height: '77.5px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                flexGrow: '1',
              }}>
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
              <div
                className="categorytext"
                style={{
                  fontSize: '14px',
                  minWidth: '98px',
                  height: '100%',
                  marginTop: '25px',
                  textAlign: 'center',
                }}>
                {categoryList.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="newgoodstext-wrapper"
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <div
          className="newgoodstext-container"
          style={{
            width: '999px',
          }}>
          <div
            style={{
              fontSize: '26px',
              fontWeight: 'Bold',
            }}>
            신규상품
          </div>
        </div>
      </div>
      <div
        className="newgoods-wrapper"
        style={{
          padding: '0px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <ul
          style={{
            padding: '0px',
            paddingInlineStart: '0px',
            width: '999px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',

            // justifyContent: 'space-between',
            alignContent: 'flex-start',
            // alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
          {goodsList.map(goodsList => (
            <li
              key={goodsList.id}
              style={{
                margin: '0px',
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
              }}>
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
                <div
                  className="info-top"
                  style={{
                    maxWidth: '140px',
                    marginTop: '10px',
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                  {goodsList.title}
                </div>
                <div
                  className="info-middle"
                  style={{
                    color: '#DDDDDD',
                    marginTop: '7px',
                    fontSize: '12px',
                  }}>
                  {goodsList.address}
                  <DIVIDER type="vertical" style={{ color: '#DDDDDD' }} />
                  {goodsList.time}
                </div>
                <div
                  className="info-bottom"
                  style={{
                    fontWeight: 'bold',
                    marginTop: '18px',
                    fontSize: '16px',
                  }}>
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
