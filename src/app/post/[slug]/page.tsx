import React from 'react';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comment from '@/components/comment/Comment';
import Menu from '@/components/menu/Menu';

const base_url = 'http://localhost:3000/api';

const getPost = async (slug:number) => {
  const res = await fetch(`${base_url}/posts/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed when fetching data. Please try again!");
  }

  return res.json();

}

const SinglePage = async ({ params }: any) => {
  const { slug } = params;

  const post = await getPost(slug);

  console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {post?.title}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={post.user.image} alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user.name}</span>
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
          <div
            className={styles.desc}>
            {post?.desc}
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