import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Parallax } from 'react-scroll-parallax';
import { WorkCard } from "../../components";

import styles from './WorkContent.module.scss';

const WorkContent = () => {
  return (
    <div className={styles.workContent}>
      <div className={styles.title}>
        <h1>work</h1>
      </div>

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
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404890/Haven_watches_qknzk9.png"
            imgAlt="an illustration of beautiful bunny"
            cardLink="/work/haven"
            title="haven"
            content="The baddest bunny-themed NFTs on the scene"
            tags={[
              'ui',
              'ux',
              'web3',
              'crypto',
              'branding',
              'strategy',
              'illustration',
              'accessibility',
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
              'ui',
              'ux',
              'web3',
              'crypto',
              'branding',
              'strategy',
              'illustration',
              'accessibility',
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649267493/rvabowls_yn3zpg.jpg"
            imgAlt="a photo of an acai bowl from RVA Bowls"
            cardLink="/work/rvabowls"
            title="rva bowls"
            content="The real Richmond experience, art, pottery, and food"
            tags={[
              'branding',
              'strategy',
              'app design',
              'website redesign',
              'experience design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649405756/IMG_3115_doe4qp.jpg"
            imgAlt="a photo of an acai bowl from RVA Bowls"
            cardLink="/work/toast"
            title="totally toast"
            content="The real Richmond experience, art, pottery, and food"
            tags={[
              'branding',
              'strategy',
              'app design',
              'website redesign',
              'experience design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404956/3m_ogowpq.png"
            imgAlt="a photo of an acai bowl from RVA Bowls"
            cardLink="/work/3m"
            title="3M pride"
            content="The real Richmond experience, art, pottery, and food"
            tags={[
              'branding',
              'strategy',
              'app design',
              'website redesign',
              'experience design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404790/cairo_ratyrd.png"
            imgAlt="a photo of the Cairo Olympics logo prototype"
            cardLink="/work/cairo"
            title="cairo olympics"
            content="The real Richmond experience, art, pottery, and food"
            tags={[
              'branding',
              'strategy',
              'app design',
              'website redesign',
              'experience design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649405098/Empire_Designs_edit_copy_uj6qvu.jpg"
            imgAlt="a photo of Empire Designs Jean Shorts by Emily Wills"
            cardLink="/work/empire"
            title="empire designs"
            content="The real Richmond experience, art, pottery, and food"
            tags={[
              'branding',
              'strategy',
              'app design',
              'website redesign',
              'experience design'
            ]}
          />
        </li>
      </ul>
    </div>
  );
}

export default WorkContent;