'use client';
import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/src/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.container}`}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/assets/imgs/sunny.png" alt='sunny' width={20} height={20} />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, backgroundColor: '#0f172a' }
            : { right: 1, backgroundColor: 'white' }
        }
      ></div>
      <Image src="/assets/imgs/moon.png" alt='moon' width={20} height={20} />
    </div>
  )
}

export default ThemeToggle