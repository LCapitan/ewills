import Link from "next/link";
import React, { useContext } from 'react';
import { Instagram, Twitter, Facebook } from '../Icons'

import styles from './Footer.module.scss'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.nameMark}>
            emily<span>wills</span>
          </div>

          <div className={styles.quote}>
            <em>"Leave everything and everyone better than you found them.<br /> The rest will work itself out.”</em>
          </div>

          <ul className={styles.sitemap}>
            <li>
              <Link href="/">
                <span>home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span>about</span>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <span>work</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>fun</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>contact</span>
              </Link>
            </li>
          </ul>

          <ul className={styles.socialMenu}>
            <li>
              <a href="/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="/">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="/">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
