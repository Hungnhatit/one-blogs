import React from 'react';
import styles from "./categoryList.module.css";
import Image from 'next/image';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Popular Categories
      </h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image
            src='/assets/icons/footwear.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
          <Image
            src='/assets/icons/footwear.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
          <Image
            src='/assets/icons/footwear.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
          <Image
            src='/assets/icons/footwear.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`}>
          <Image
            src='/assets/icons/footwear.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
          <Image
            src='/assets/icons/footwear.png'
            alt=''
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
      </div>
    </div>
  )
}

export default CategoryList;