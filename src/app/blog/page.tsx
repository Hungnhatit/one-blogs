import React from 'react';
import styles from './blog.module.css';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';


const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Styles blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default Blog