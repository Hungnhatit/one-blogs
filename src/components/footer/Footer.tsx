import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {


  return (
    <div className={styles.container}>
      <div className='flex flex-1 flex-col gap-[14px]'>
        <div className='flex items-center gap-[10px]'>
          <Image src="/assets/imgs/instagram.png" alt="" width={50} height={50} />
          <h1 className='text-[24px]'>Hungnhatit</h1>
        </div>
        <p className='font-medium'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quisquam, dicta ex quas harum excepturi fugit est pariatur. Aliquam accusantium iusto qui velit veniam provident accusamus ipsum impedit voluptatem temporibus.
        </p>
        <div className='flex mt-[10px] gap-[10px]'>
          <Image src="/assets/imgs/facebook.png" alt='' width={18} height={18}></Image>
          <Image src="/assets/imgs/instagram.png" alt='' width={18} height={18}></Image>
          <Image src="/assets/imgs/threads.png" alt='' width={18} height={18}></Image>
          <Image src="/assets/imgs/tiktok.png" alt='' width={18} height={18}></Image>
        </div>
      </div>

      <div className={`flex flex-1 justify-end ${styles.links}`}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Home page</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Home page</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Home page</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>


      </div>
    </div>
  )
}

export default Footer;