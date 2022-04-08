import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './IntroContent.module.scss';

const IntroContent = () => {
  return (
    <div className={styles.introContent}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648668905/emily-bunny_1_dk3gf0.png" alt="hon's buns nft image" layout="responsive" width="584" height="809" />
        </div>
        <div className={styles.homeContentCopy}>
          <em className="quote">"Leave everything and everyone better than you found them. The rest will work itself out."</em>
          <p>As a designer, entrepreneur, and empath studying Experience Design at the VCU Brandcenter, I am passionate about solving problems, removing barriers, creating meaningful solutions, and disrupting for good. Oh- and cute bunnies. Can&#39;t forget about the bunnies.</p>

          <div className={styles.actions}>
            <Link href="/about">
              more about me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroContent;