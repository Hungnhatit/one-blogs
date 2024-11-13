import React from 'react';
import styles from './singlePage.module.css';
import Comment from '@/components/comment/Comment';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import { CiBookmark } from 'react-icons/ci';

const base_url = 'http://localhost:3000/api';

const parseHTML = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
}

const getPost = async (slug) => {
  const res = await fetch(`${base_url}/posts/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed when fetching data. Please try again!");
  }

  return res.json();
}

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            (This is post title) {post?.title}
          </h1>
          <div className={styles.user}>
            <div className='flex items-center gap-[12px]'>
              <div className={styles.userImageContainer}>
                <Image
                  src={post.user.image}
                  alt=''
                  fill
                  className={styles.avatar} />
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{post?.user.name}</span>
                <span className={`${styles.date} text-[14px] font-light`}>03.11.2024</span>
              </div>
            </div>

            <div>
              <CiBookmark size={24} className='cursor-pointer' />
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src='/assets/imgs/landscape.jpg'
            alt=''
            width={0}
            height={0}
            sizes='100vh'
            className={`${styles.image} rounded-[12px] w-full h-auto`}></Image>
        </div>

        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          >
          </div>
          <div className={styles.comment}>
            <Comment postSlug={slug} />
          </div>
        </div>

      </div>

      <div className={styles.content}>
        <Menu />
      </div>

    </div>
  )
}

export default SinglePage