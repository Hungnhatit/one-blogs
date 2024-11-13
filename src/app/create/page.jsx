'use client'
import React, { useEffect, useState } from 'react';
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
  const { data, status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }

  if (status === 'unauthenticated') {
    router.push('/');
  }
  
  const handleSubmit = async () => {
    await fetch('/api/posts', {
      method: 'post',
      body: JSON.stringify({
        title, 
        desc: value,
        slug: title,
        catSlug: 'style'
      })
    });
  };
  

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder='Your post title...'
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <CiCirclePlus size={20} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id='image'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className={styles.addButton}>
              <label htmlFor="image"></label>
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
          onChange={(content)=>setValue(content)}
          placeholder={`Tell your story...`}
          className={`${styles.textArea} border`}></ReactQuill>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Post</button>
    </div>
  )
}

export default CreatePost