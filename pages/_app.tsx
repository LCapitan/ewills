import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import UIContextProvider from '../src/providers/UIContextProvider'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Header, Footer } from '../src/components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <UIContextProvider>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </UIContextProvider>
    </ParallaxProvider>
  )
}

export default MyApp
