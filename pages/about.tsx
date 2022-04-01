import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header, Menu } from '../src/components/index';
import { AboutContent } from '../src/containers/index';

import styles from '../styles/Home.module.scss';

const About: NextPage = () => {
  return (
    <>
      {/* <Header/> */}
      <main className={styles.container}>
        <AboutContent/>
      </main>
    </>
  )
}

export default About;
