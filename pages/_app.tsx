import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import UIContextProvider from '../src/providers/UIContextProvider'
import { Header } from '../src/components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <>
      <Header/>
      <Component {...pageProps} />
      </>
    </UIContextProvider>
  )
}

export default MyApp
