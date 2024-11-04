'use client'
import React, { useContext } from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';


const Featured = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <h1 className={`text-[80px] font-base ${styles.title}`}>
        <span className='font-extrabold'>Hi, I'm Hungnhatit!</span> Discover my stories and creative ideas
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/assets/imgs/minimalism.jpg' fill alt='featured-img' className={styles.image}></Image>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium modi ullam
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, repellendus nostrum id at cum cupiditate facilis. Id sed aliquam, perferendis, voluptate inventore ut, facere labore repudiandae iure accusamus corporis officia!
          </p>
          <button className={`${styles.button} bg-[#BFADE4] hover:bg-[#ab9bce] transition-all ${theme === 'dark' ? "text-black" : ""}`}>Read more</button>
        </div>


      </div>




    </div>
  )
}

export default Featured;