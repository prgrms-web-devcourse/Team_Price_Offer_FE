import '@styles/common/reset.min.scss'
import '@styles/common/font.scss'
import '@styles/common/globals.scss'
import '@styles/pages/search.scss'
import '@styles/pages/index.scss'
import '@styles/pages/postDetail.scss'
import '@styles/pages/posting.scss'
import '@styles/pages/profile/index.scss'
import '@styles/pages/profile/review.scss'
import '@styles/ui/goodsItem.scss'
import '@styles/ui/goodsList.scss'
import '@styles/pages/message.scss'
import '@styles/ui/modal.scss'
import '@styles/ui/modalConfirmBuyer.scss'
import '@styles/ui/modalReview.scss'
import { useState} from 'react'
import Header from '@components/ui/Header'
import ModalLogin from '@components/ui/modal/ModalLogin'
import useStorage from '@utils/storage.js'

function MyApp({ Component, pageProps }) {
  const isBrowser = (() => typeof window !== 'undefined')();
  let isLogin
  const { getItem, setItem,removeItem } = useStorage();
  if (getItem('userToken')) {
    isLogin=true 
  } 
  else {
    isLogin=false
  }
  console.log(isLogin)

  return (
    <div className="container">
      <div className="wrapper">
        <Header isLogin={isLogin} />
        <Component {...pageProps} />
        {/* <ModalLogin visible/> */}
      </div>
    </div>
  )
}

export default MyApp
