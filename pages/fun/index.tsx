import type { NextPage } from 'next';
import Head from 'next/head';

import { FunContent } from '../../src/containers';

import styles from '../../styles/Work.module.scss';

const Fun: NextPage = () => {
  return (
    <>
      <main className="container">
        <FunContent />
      </main>
    </>
  )
}

export default Fun;
