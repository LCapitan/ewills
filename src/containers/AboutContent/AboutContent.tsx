import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './AboutContent.module.scss';

const AboutContent = () => {
  return (
    <div className={styles.AboutContent}>
      <h1>about</h1>
      <div className={styles.inner}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648668905/emily-bunny_1_dk3gf0.png" alt="hon's buns nft image" layout="responsive" width="584" height="809" />
        </div>
        <div className={styles.homeContentCopy}>
          <p>I am a quirky, adventurous, and free spirited  empath. I desire to leave the biggest impact I can. As a designer, entrepreneur, and visionary studying Experience Design at the VCU Brandcenter, I am passionate about solving problems, removing barriers, creating meaningful solutions, and disrupting for good.</p>
          <p>When I&#39;m not designing I&#39;m loving on these sweet babies! Ask to see pictures of them in a sock, you&#39;ll never see anything cuter. On a weekend, you&#39;ll typically find me soaking up time with my family and friends, playing board games, biking around Richmond (when it&#39;s warm), exploring new places to eat (current favorite is Goatacado), playing or teaching tennis, and surrounding myself with people that make me happy.</p>

          <div className={styles.actions}>
            <Link href="/work">
              see my work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;