import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header, Menu } from '../src/components/index';
import { HomeHero, IntroContent, FeaturedWork } from '../src/containers/index';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <main className="container">
        <HomeHero />
        <IntroContent />
        <FeaturedWork />
      </main>
    </>
  )
}

export default Home;
