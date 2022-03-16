/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '@ui/GlobalStyle'
import { Header } from '@ui/Header'
import { Footer } from '@ui/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AluraGeek</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link href="https://fonts.googleapis.com/css2?family=Raleway" rel="stylesheet" />
      </Head>
      <GlobalStyle />  
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp