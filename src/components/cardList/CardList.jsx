import React from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';

const base_url = 'http://localhost:3000';

const getData = async (page, cat) => {
  const res = await fetch(`${base_url}/api/posts?page=${page}&cat=${cat || ''}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed when fetching data!');
  }
  return res.json();
}

// page được truyền từ layout vào
const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList;