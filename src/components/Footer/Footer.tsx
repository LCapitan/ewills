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
            <em>&#34;Leave everything and everyone better than you found them.<br /> The rest will work itself out.&#34;</em>
          </div>

          <ul className={styles.sitemap}>
            <li>
              <Link href="/" passHref>
                <span>home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <span>about</span>
              </Link>
            </li>
            <li>
              <Link href="/work" passHref>
                <span>work</span>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <span>fun</span>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <span>contact</span>
              </Link>
            </li>
          </ul>

          <ul className={styles.socialMenu}>
            <li>
              <a href="https://www.instagram.com/emmmywills/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/emmyy_wills">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/emma.wills.52">
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
