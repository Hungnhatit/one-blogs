'use client'
import React, { useState } from 'react';
import styles from './comment.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import useSWR, { mutate } from 'swr';
import { BsDot } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { CiChat2, CiHeart } from 'react-icons/ci';

const fetchComment = async (url) => {
  const res = await fetch(url);
  const comments = await res.json();
  if (!res.ok) {
    throw new Error('Failed when fetching comments. Please try again!');
  }
  return comments;
}

const Comment = ({ postSlug }) => {
  const { status } = useSession();
  const { data, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetchComment)
  const [desc, setDesc] = useState('');
  console.log(desc);

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'post',
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated'
        ? (
          <div className={`${styles.write}`}>
            <textarea
              placeholder='Leave a comment ...'
              className={`${styles.input}`}
              onChange={e => setDesc(e.target.value)}
            />
            <button
              className={`${styles.button} ${desc === '' ? 'bg-[#E6E6E6] cursor-auto' : 'bg-[#0768EA] cursor-pointer'}`}
              onClick={handleSubmit}>
              Send
            </button>
          </div>
        )
        : (
          <Link href='/login'>Login to write a comment</Link>
        )}

      <div className={styles.comments}>
        <div className='mb-[20px] text-[20px] font-semibold'>
          {data?.length === 0
            ? (`${data?.length} Comment`)
            : (`${data?.length} Comments`)
          }
        </div>
        {isLoading
          ? 'loading'
          : data?.map((item) => (
            <div key={item._id} className={`${styles.comment} flex gap-[12px]`}>
              <div className={styles.user}>
                <div className='w-[40px] h-[40px] relative'>
                  <Image src={item.user.image} alt='' fill className={styles.image} />
                </div>
              </div>

              <div className={`${styles.desc}`}>
                {/* Comment content */}
                <div className={`${styles.commentContent} px-[18px] py-[16px] mb-[8px] rounded-[8px]`}>
                  <div className={`${styles.commentInfo}`}>
                    <div className='flex items-center'>
                      <span className={`${styles.username} text-[14px]`}>{item.user.name}</span>
                      <BsDot />
                      <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
                    </div>
                    <span className='mr-[8px] cursor-pointer'>
                      <HiOutlineDotsHorizontal size={20} />
                    </span>
                  </div>
                  <p>
                    {item.desc}
                  </p>
                </div>

                <div className='flex items-center text-[14px]'>
                  <span className='flex items-center mr-[16px] cursor-pointer'>
                    <CiHeart size={20} className='mr-[4px]' /> Like
                  </span>
                  <span className='flex items-center cursor-pointer'>
                    <CiChat2 size={20} className='mr-[4px]' /> Comment
                  </span>
                </div>
              </div>
            </div>
          ))}

      </div>
    </div>
  )
}

export default Comment