'use client'
import React, { useState } from 'react';
import styles from './create.module.css';

import Image from 'next/image';
import { CiCirclePlus, CiImageOn } from 'react-icons/ci';
import { GoLinkExternal } from 'react-icons/go';
import { FaPhotoVideo } from 'react-icons/fa';

// Text editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const { data, status } = useSession();
  const router = useRouter();

  console.log(data, status);

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder='Your post title...' className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <CiCirclePlus size={20} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <CiImageOn size={20} />
            </button>
            <button className={styles.addButton}>
              <GoLinkExternal size={20} />
            </button>
            <button className={styles.addButton}>
              <FaPhotoVideo size={20} />
            </button>
          </div>
        )}
        <ReactQuill
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder={`Tell your story...`}
          className={`${styles.textArea} border`}></ReactQuill>
      </div>
      <button className={styles.publish}>Post</button>
    </div>
  )
}

export default CreatePost