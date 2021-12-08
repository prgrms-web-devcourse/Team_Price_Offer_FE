import '@styles/common/reset.min.scss'
import '@styles/common/font.scss'
import '@styles/common/globals.scss'
import '@styles/pages/search.scss'
import '@styles/pages/index.scss'
import '@styles/pages/postDetail.scss'
import '@styles/pages/posting.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
