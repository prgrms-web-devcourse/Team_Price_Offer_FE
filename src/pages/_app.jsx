import '@styles/common/index.scss'
import Header from '@components/ui/Header'
import AuthProvider from '@contexts/AuthProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="container">
        <div className="wrapper">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  )
}

export default MyApp
