import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { Header, Menu } from '../src/components/index';
import { HomeHero, IntroContent, FeaturedWork } from '../src/containers/index';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Emily Wills</title>
        <meta name="description" content="Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US." />
        <meta property="og:url" content="https://www.emilywills.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Emily Wills" />
        <meta property="og:description" content="This page will allow you to link your Discord account to your MetaMask Wallet for WL and other future features." />
        <meta property="og:image" content="https://res.cloudinary.com/austinmel/image/upload/v1650911928/ogimage1_ggyamz.jpg" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="emilywills.com" />
        <meta property="twitter:url" content="https://www.emilywills.com/" />
        <meta name="twitter:title" content="Hon's Buns - Wallet Connect" />
        <meta name="twitter:description" content="Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US." />
        <meta name="twitter:image" content="https://res.cloudinary.com/austinmel/image/upload/v1650911928/ogimage1_ggyamz.jpg" />
      </Head>
      <main className="container">
        <HomeHero />
        <IntroContent />
        <FeaturedWork />
      </main>
    </>
  )
}

export default Home;
