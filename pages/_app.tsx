import '../styles/globals.scss'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import UIContextProvider from '../src/providers/UIContextProvider'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Header, Footer } from '../src/components'
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <UIContextProvider>
        <>
          <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <DefaultSeo
            openGraph={{
              url: 'https://www.emilywills.com/',
              title: "Emily's Portfolio",
              description: "Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US.",
              images: [
                {
                  url: 'https://res.cloudinary.com/austinmel/image/upload/v1656713095/em_xebnej.png',
                  width: 1400,
                  height: 755,
                  alt: 'Emily Wills and a Bunny',
                  type: 'image/jpeg',
                }
              ],
            }}
          // twitter={{
          //   handle: '@EmilyWills',
          //   site: '@EmilyWills',
          //   cardType: 'summary_large_image',
          // }}
          />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </UIContextProvider>
    </ParallaxProvider>
  )
}

export default MyApp
