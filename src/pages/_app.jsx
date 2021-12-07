import '@styles/reset.min.css'
import '@styles/font.css'
import '@styles/globals.css'
import '@styles/search.scss'
import '@styles/mainpage.scss'

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
