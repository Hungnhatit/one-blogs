import React from 'react';
import styles from "./pagination.module.css";

const Pagination = () => {

  return (
    <div className={styles.container}>
      <button className={`${styles.button} text-[14px] px-[12px] py-[10px]`}>Previous</button>
      <button className={`${styles.button} text-[14px] px-[12px] py-[10px]`}>Next</button>
    </div>
  )
}

export default Pagination;