import React from "react";
import Link from "next/link";
import Image from "next/image";

import { WorkCard } from "../../components/index";

import styles from './FeaturedWork.module.scss';

const FeaturedWork = () => {
  return (
    <div className={styles.featuredWork}>
      <h1>featured work</h1>

      <ul className={styles.workList}>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg"
            imgAlt="an illustration of people cleaning up the Earth"
            cardLink="/work/eve"
            title="eve"
            content="A digital platform that makes the journey for death more approachable and sustainable"
            tags={[
              'sustainability',
              'service design',
              'accessibility',
              'machine learning',
              'human-centered design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649263364/honsbuns_hxjmxq.jpg"
            imgAlt="an illustration of beautiful bunny"
            cardLink="/work/honsbuns"
            title="hon's buns"
            content="The baddest bunny-themed NFTs on the scene"
            tags={[
              'experience design',
              'branding',
              'strategy',
              'accessibility',
              'web3',
              'crypto',
            ]}
          />
        </li>
      </ul>

      <div className={styles.actions}>
        <Link href="/work">
          see my work
        </Link>
      </div>
    </div>
  );
}

export default FeaturedWork;