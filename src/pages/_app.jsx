import '@styles/common/index.scss'
import Header from '@components/ui/Header'
import LoadingProvider from '@contexts/LoadingProvider'
import AuthProvider from '@contexts/AuthProvider'
import AxiosProvider from '@contexts/AxiosProvider'
import { Provider as BusProvider } from 'react-bus'

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <AxiosProvider>
        <AuthProvider>
          <BusProvider>
            <div className="container">
              <div className="wrapper">
                <Header />
                <Component {...pageProps} />
              </div>
            </div>
          </BusProvider>
        </AuthProvider>
      </AxiosProvider>
    </LoadingProvider>
  )
}

export default MyApp
