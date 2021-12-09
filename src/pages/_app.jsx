import '@styles/common/reset.min.scss'
import '@styles/common/font.scss'
import '@styles/common/globals.scss'
import '@styles/pages/search.scss'
import '@styles/pages/index.scss'
import '@styles/pages/postDetail.scss'
import '@styles/pages/posting.scss'
import '@styles/ui/goodsItem.scss'
import '@styles/ui/goodsList.scss'
import '@styles/pages/message.scss'
import '@styles/ui/modal.scss'
import Header from '@components/ui/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <div className="wrapper">
        <Header isLogin />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
