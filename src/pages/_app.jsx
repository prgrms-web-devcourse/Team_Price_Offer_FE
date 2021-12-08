import '@styles/common/reset.min.scss'
import '@styles/common/font.scss'
import '@styles/common/globals.scss'
import '@styles/pages/search.scss'
import '@styles/pages/index.scss'
import Header from '@components/ui/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
