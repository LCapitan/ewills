import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import React, { useContext } from 'react';
import UIContext from "../../context/UIContext";
import { Instagram, Twitter } from '../Icons'
import Menu from "../Menu/Menu";
import Hamburger from './HamburgerButton';

import styles from './Header.module.scss'

export default function Header() {

  return (
    <header className={styles.header}>
      <Link href="/work" passHref>
        <span className={styles.leftSide}>
          my work
        </span>
      </Link>
      <div className={styles.rightSide}>
        <ul>
          <li><Instagram /></li>
          <li><Twitter /></li>
          <li>F</li>
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
