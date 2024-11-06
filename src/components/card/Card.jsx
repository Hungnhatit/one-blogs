import React from 'react';
import styles from "./card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = ({key, post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img}
          alt={post.catSlug}
          fill
          className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2024.10.30 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="" className='text-[28px] font-semibold'>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>
          {post.desc}
        </p>
        <Link href="" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card