import React from 'react';
import styles from "./categoryList.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { cates } from './cate';

const base_url = 'http://localhost:3000';

const getCates = async () => {
  const res = await fetch(`${base_url}/api/categories`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed when fetching data!');
  }
  return res.json();
}


const CategoryList = async () => {
  const cates = await getCates();
  console.log(cates);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Popular Categories
      </h1>
      <div className={styles.categories}>
        {cates.map((cate: any) => (
          <Link key={cate._id} href="/blog?cat=style" className={`${styles.category}   hover:bg-slate-300 transition-all`}>
            <Image
              src={`${cate.img}`}
              alt=''
              width={32}
              height={32}
              className={styles.image}
            />
            {cate.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList;