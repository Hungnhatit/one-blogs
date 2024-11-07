import React from 'react';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comment from '@/components/comment/Comment';
import Menu from '@/components/menu/Menu';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/assets/imgs/landscape.jpg' alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Hungnhatit</span>
              <span className={styles.date}>03.11.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>         
          <Image src='/assets/imgs/landscape.jpg' alt='' fill className={styles.image}></Image>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores et facere deserunt? Accusamus, facilis velit optio reiciendis exercitationem deleniti? Amet voluptatum deleniti hic, officia aut in error corrupti. Consectetur, laborum.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>

    </div>
  )
}

export default SinglePage