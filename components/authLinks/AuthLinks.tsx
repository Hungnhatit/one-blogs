import React from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {

  const status = "notAuthenticated";


  return (
    <div>
      {status === "notAuthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <span className={styles.link}>Log out</span>
        </>
      )}

    </div>
  )
}

export default AuthLinks