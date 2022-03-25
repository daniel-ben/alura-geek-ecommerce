import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '@ui/GlobalStyle'
import Header from '@common/Header'
import Footer from '@common/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AluraGeek</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />  
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp