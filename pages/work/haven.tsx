import type { NextPage } from 'next';
import Head from 'next/head';

import { NoContent } from '../../src/containers/';

import styles from '../../styles/Work.module.scss';

const Haven: NextPage = () => {
  return (
    <>
      <main className="container">
        <NoContent />
      </main>
    </>
  )
}

export default Haven;
