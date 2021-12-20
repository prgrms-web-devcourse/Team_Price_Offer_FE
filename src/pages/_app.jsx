import '@styles/common/index.scss'
import Header from '@components/ui/Header'
import AsyncProvider from '@contexts/AsyncProvider'
import AuthProvider from '@contexts/AuthProvider'
import { Provider as BusProvider } from 'react-bus'

function MyApp({ Component, pageProps }) {
  return (
    <AsyncProvider>
      <BusProvider>
        <AuthProvider>
          <div className="container">
            <div className="wrapper">
              <Header />
              <Component {...pageProps} />
            </div>
          </div>
        </AuthProvider>
      </BusProvider>
    </AsyncProvider>
  )
}

export default MyApp
