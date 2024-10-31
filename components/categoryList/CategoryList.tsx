import React from 'react';
import styles from "./categoryList.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { cates } from './cate';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Popular Categories
      </h1>
      <div className={styles.categories}>
        {cates.map((cate, index) => (
          <Link key={index} href="/blog?cat=style" className={`${styles.category} ${cate.bgColor}  hover:bg-slate-300 transition-all`}>
            <Image
              src={`${cate.imgSrc}`}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            {cate.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList;