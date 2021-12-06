import '../styles/reset.min.css'
import '../styles/globals.css'

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
