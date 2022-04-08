import Image from 'next/image';
import Link from 'next/link';

import { useRef, useState, useEffect } from "react";
import { VideoPlayer } from '../index';

import styles from './CSHero.module.scss';

interface CSHeroProps {
  vidSrc?: string,
  vidCover?: string,
  imgSrc?: string
}

const CSHero: React.FC<CSHeroProps> = ({
  vidSrc,
  vidCover,
  imgSrc
}) => {

  return (
    <div className={styles.hero}>
      {vidSrc &&
        <VideoPlayer vidSrc={vidSrc} vidCover={vidCover} />
      }
      {imgSrc &&
        <div className={styles.inner}>
          <Image src={imgSrc} width="1200" height="662" alt="" layout="responsive" />
        </div>
      }
    </div>
  )
}

export default CSHero;
