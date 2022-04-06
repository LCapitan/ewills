import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './WorkContent.module.scss';

const WorkContent = () => {
  return (
    <div className={styles.workContent}>
      <h1>work</h1>
      <ul className={styles.workList}>
        <li>
          <Link href="/work/eve" passHref>
            <div className={styles.workItem}>
              <Image src='https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg' width='1200' height='1200' alt='an illustration of people cleaning up the Earth' layout='responsive' />
              <div className={styles.content}>
                <h2>eve</h2>
                <div className={styles.popUp}>
                  A digital platform that makes the journey for death more approachable and sustainable.
                </div>
                <div className={styles.tags}>
                  <span>accessibility</span>
                  <span>product design</span>
                  <span>user experience</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/work/eve" passHref>
            <div className={styles.workItem}>
              <Image src='https://res.cloudinary.com/austinmel/image/upload/v1649249526/honsbuns_tegtzn.jpg' width='1200' height='1200' alt='an illustration of people cleaning up the Earth' layout='responsive' />
              <div className={styles.content}>
                <h2>hon's buns</h2>
                <div className={styles.popUp}>
                  A digital platform that makes the journey for death more approachable and sustainable.
                </div>
                <div className={styles.tags}>
                  <span>accessibility</span>
                  <span>product design</span>
                  <span>user experience</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/work/eve" passHref>
            <div className={styles.workItem}>
              <Image src='https://res.cloudinary.com/austinmel/image/upload/v1649249526/honsbuns_tegtzn.jpg' width='1200' height='1200' alt='an illustration of people cleaning up the Earth' layout='responsive' />
              <div className={styles.content}>
                <h2>hon's buns</h2>
                <div className={styles.popUp}>
                  A digital platform that makes the journey for death more approachable and sustainable.
                </div>
                <div className={styles.tags}>
                  <span>accessibility</span>
                  <span>product design</span>
                  <span>user experience</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/work/eve" passHref>
            <div className={styles.workItem}>
              <Image src='https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg' width='1200' height='1200' alt='an illustration of people cleaning up the Earth' layout='responsive' />
              <div className={styles.content}>
                <h2>eve</h2>
                <div className={styles.popUp}>
                  A digital platform that makes the journey for death more approachable and sustainable.
                </div>
                <div className={styles.tags}>
                  <span>accessibility</span>
                  <span>product design</span>
                  <span>user experience</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default WorkContent;