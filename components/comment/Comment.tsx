import React from 'react';
import styles from './comment.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Comment = () => {
  const status = 'authenticated';


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated'
        ? (
          <div className={styles.write}>
            <textarea placeholder='Leave a comment ...' className={styles.input} />
            <button className={styles.button}>Send</button>
          </div>
        )
        : (
          <Link href='/login'>Login to write a comment</Link>
        )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className='w-[50px] h-[50px] relative'>
              <Image src='/assets/imgs/landscape.jpg' alt='' fill className={styles.image} />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>Hungnhatit</span>
              <span className={styles.date}>03.11.2024</span>
            </div>
          </div>

          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione incidunt excepturi quo nostrum rem consequuntur maiores nulla neque natus animi autem blanditiis, facilis mollitia libero sapiente error voluptate at culpa.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Comment