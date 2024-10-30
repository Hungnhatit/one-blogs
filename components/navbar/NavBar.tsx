import React from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const NavBar = () => {




  return (
    <div className={styles.container}>
      <div className={`${styles.social} flex items-center`}>
        <Image src="/assets/imgs/facebook.png" alt='facebook-icon' width={24} height={24}></Image>
        <Image src="/assets/imgs/instagram.png" alt='instagram-icon' width={24} height={24}></Image>
        <Image src="/assets/imgs/threads.png" alt='threads-icon' width={24} height={24}></Image>
        <Image src="/assets/imgs/tik-tok.png" alt='tiktok-icon' width={24} height={24}></Image>
      </div>

      <div className={styles.logo}>
        Hungnhatit
      </div>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home Page</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default NavBar;