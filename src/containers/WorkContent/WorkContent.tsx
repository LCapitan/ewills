import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './WorkContent.module.scss';

const WorkContent = () => {
  return (
    <div className={styles.workContent}>
      <div className={styles.titleArea}>
        <h1>my work</h1>
      </div>
      <div className={styles.inner}>
        <ul className={styles.workList}>
          <li>
            <Link href="/work/eve" passHref>
              <div>
                <h2>eve</h2>
                <div className={styles.image}>
                  <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648704994/illustration_coikdh.png" width="175" height="150" alt=""/>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <div>
                <h2>hon&#39;s buns</h2>
                <div className={styles.image}>
                  <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648706474/hon_rl1doc_cjy4rn.png" width="175" height="273" alt=""/>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <div>
                <h2>rva bowls</h2>
                <div className={styles.image}>
                  <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648704994/illustration_coikdh.png" width="175" height="150" alt=""/>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <div>
                <h2>something</h2>
                <div className={styles.image}>
                  <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648704994/illustration_coikdh.png" width="175" height="150" alt=""/>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <div>
                <h2>something</h2>
                <div className={styles.image}>
                  <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648704994/illustration_coikdh.png" width="175" height="150" alt=""/>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkContent;