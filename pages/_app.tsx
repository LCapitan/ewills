import '../styles/globals.scss'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import UIContextProvider from '../src/providers/UIContextProvider'
import { Header, Footer } from '../src/components'
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <DefaultSeo
          openGraph={{
            url: 'https://www.emilywills.com/',
            title: "Emily's Portfolio",
            description: "Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US.",
            images: [
              {
                url: 'https://res.cloudinary.com/austinmel/image/upload/v1656678415/astro_iie61u.jpg',
                width: 1400,
                height: 1400,
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
  )
}

export default MyApp
