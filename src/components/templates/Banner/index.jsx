import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper' // 추가
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styled from '@emotion/styled'

SwiperCore.use([Navigation, Pagination, Autoplay]) // 추가

const Banner = ({ style, imgUrls }) => {
  const createimgUrlList = () => {
    return imgUrls.filter(x => x !== null)
  }

  const imgUrlList = createimgUrlList()
  return (
    <StyledSwiper
      style={style}
      className="banner-slide"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // 넘어가는 시간
    >
      {imgUrlList.map((value, key) => (
        <SwiperSlide key={`${value}${{ key }}`}>
          Slide test
          <img
            src={value}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
            }}
            alt="슬라이드 이미지"
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  )
}

const StyledSwiper = styled(Swiper)`
  width: 996px;
  height: 329px;
`
export default Banner
