import type { NextPage } from 'next';
import Head from 'next/head';

import { HavenContent } from '../../src/containers/CaseStudy';

import styles from '../../styles/Work.module.scss';

const Haven: NextPage = () => {
  return (
    <>
      <main className="container">
        <HavenContent />
      </main>
    </>
  )
}

export default Haven;
