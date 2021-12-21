import '@styles/common/index.scss'
import Header from '@components/ui/Header'
import LoadingProvider from '@contexts/LoadingProvider'
import AuthProvider from '@contexts/AuthProvider'
import AxiosProvider from '@contexts/AxiosProvider'
import { Provider as BusProvider } from 'react-bus'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F74F2A" />
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
    </>
  )
}

export default MyApp
