import React from 'react';
import styles from "./card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ key, post }) => {
  return (
    <div key={key} className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && <Image
          src={post.img}
          alt={post.catSlug}
          fill
          className={styles.image} />}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt.substring(0, 10)} - </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/post/${post.slug}`} className='text-[28px] font-semibold'>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>
          {post.desc.substring(0, 60)}
        </p>
        <Link href={`/post/${post.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card