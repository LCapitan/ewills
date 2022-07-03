import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { NoContent } from '../src/containers/index';

import styles from '../styles/Home.module.scss';

const Contact: NextPage = () => {
  return (
    <>
      <main className="container">
        <NoContent />
      </main>
      <Footer />
    </>
  )
}

export default Contact;
