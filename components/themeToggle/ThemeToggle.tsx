import React from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';

const ThemeToggle = () => {


  return (
    <div className={styles.container}>
      <Image src="/assets/imgs/moon.png" alt='moon' width={24} height={24} />
      <div className={styles.ball}></div>
      <Image src="/assets/imgs/sunny.png" alt='moon' width={24} height={24} />
    </div>
  )
}

export default ThemeToggle