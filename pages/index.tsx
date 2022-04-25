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
      <NextSeo
        title="Home | Emily Wills"
        description="Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US."
        defaultTitle="Welcome to my portfolio"
        canonical="https://www.emilywills.com/"
        openGraph={{
          url: 'https://www.emilywills.com/',
          title: "Emily Wills",
          description: "Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US.",
          images: [
            { url: 'https://res.cloudinary.com/austinmel/image/upload/v1650909161/Screen_Shot_2022-04-25_at_1.47.41_PM_i3pwxd.png' }
          ],
          site_name: 'EmilyWills',
        }}
      />
      <main className="container">
        <HomeHero />
        <IntroContent />
        <FeaturedWork />
      </main>
    </>
  )
}

export default Home;
