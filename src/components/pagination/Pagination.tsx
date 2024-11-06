'use client'
import React from 'react';
import styles from "./pagination.module.css";
import { useRouter } from 'next/navigation';

interface Props {
  page: number,
  hasPrev: boolean,
  hasNext: boolean
}

const Pagination = ({ page, hasPrev, hasNext }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={`${styles.button} text-[14px] px-[12px] py-[10px]`}
        onClick={() => router.push(`?page=${page - 1}`)}>
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={`${styles.button} text-[14px] px-[12px] py-[10px]`}
        onClick={() => router.push(`?page=${page + 1}`)}>
        Next
      </button>
    </div>
  )
}

export default Pagination;