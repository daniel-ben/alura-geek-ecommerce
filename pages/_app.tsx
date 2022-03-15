import type { AppProps } from 'next/app'
import { GlobalStyle } from '@ui/GlobalStyle'
import Header from '@ui/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />  
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
