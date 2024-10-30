import React from 'react';
import styles from "./card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='/assets/imgs/landscape.jpg'
          alt='' fill
          className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2024.10.30 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="" className='text-[28px] font-semibold'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati a ipsa ut, facilis beatae adipisci, maxime esse voluptatem numquam ducimus, inventore eius iste. Quod eveniet unde ea quia vitae.
        </p>
        <Link href="" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card