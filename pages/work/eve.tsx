import type { NextPage } from 'next';
import Head from 'next/head';

import { EveContent } from '../../src/containers/CaseStudy';

import styles from '../../styles/Work.module.scss';

const Eve: NextPage = () => {
  return (
    <>
      <main className="container">
        <EveContent />
      </main>
    </>
  )
}

export default Eve;
