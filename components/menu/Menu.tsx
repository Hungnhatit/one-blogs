import React from 'react';
import styles from "./menu.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { menus } from './data';
import { cates } from '../categoryList/cate';

const Menu = () => {


  return (
    <div className={styles.container}>
      {/* Most Popular */}
      <div>
        <h2 className={styles.subtitle}>What's hot</h2>
        <h1 className={`${styles.title} text-[28px]`}>Most Popular</h1>
        <div className={styles.items}>
          {menus.map((menu, index) => (
            <Link key={index} href="/" className={styles.item}>
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${menu.bgColor}`}>
                  {menu.name}
                </span>
                <h3 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Hungnhatit</span>
                  <span className={styles.date}> - 2024.10.30</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Topic */}
      <div>
        <h2 className={styles.subtitle}>Discover topic</h2>
        <h1 className={`${styles.title} text-[28px]`}>Categories</h1>
        <div className='flex flex-wrap mt-[36px] mb-[60px] gap-[20px]'>
          {cates.map((cate, index) => (
            <Link key={index} href='/blog?cat=style' className={`${cate.bgColor} px-[24px] py-[10px] rounded-[12px] text-[14px] capitalize hover:scale-105 transition-all`}>
              {cate.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Editor Section */}
      <div>
        <h2 className={styles.subtitle}>Chosen by the editor</h2>
        <h1 className='text-[28px] font-bold'>Hungnhatit</h1>
        <div className={styles.items}>
          {menus.map((menu, index) => (
            <Link key={index} href="/" className={styles.item}>
              <div className={`${styles.imgContainer}`}>
                <Image src='/assets/imgs/landscape.jpg' alt='' className={styles.image} fill />
              </div>
              <div className={styles.textContainer}>
                <span className={`${styles.category} ${menu.bgColor}`}>
                  {menu.name}
                </span>
                <h3 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className={styles.detail}>
                  <span className={styles.username}>Hungnhatit</span>
                  <span className={styles.date}> - 2024.10.30</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>








    </div>
  )
}

export default Menu;