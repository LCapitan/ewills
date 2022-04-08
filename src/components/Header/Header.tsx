import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import React, { useContext } from 'react';
import UIContext from "../../context/UIContext";
import { Instagram, Twitter, Facebook } from '../Icons'
import Menu from "../Menu/Menu";
import Hamburger from './HamburgerButton';

import styles from './Header.module.scss'

const Header = () => {

  return (
    <header className={styles.header}>
      <Link href="/work" passHref>
        <span className={styles.leftSide}>
          my work
        </span>
      </Link>
      <div className={styles.rightSide}>
        <ul>
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
      <div className={styles.innerWrapper}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <a>
              <div className={styles.nameMark}>
                emily<span>wills</span>
              </div>
            </a>
          </Link>
        </div>
        <Hamburger />
      </div>
      <Menu />
    </header>
  )
}

export default Header;