import '../styles/reset.min.css'
import '../styles/font.css'
import '../styles/globals.css'
import '../styles/scss/search.scss'

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
