import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper' // 추가
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styled from '@emotion/styled'

SwiperCore.use([Navigation, Pagination, Autoplay]) // 추가

const Banner = ({ style }) => {
  return (
    <StyledSwiper
      style={style}
      className="banner-slide"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // 추가
    >
      <SwiperSlide>
        Slide 1
        <img
          src="https://picsum.photos/200"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
          alt="banner1"
        />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </StyledSwiper>
  )
}
const StyledSwiper = styled(Swiper)`
  width: 996px;
  height: 329px;
`
export default Banner
