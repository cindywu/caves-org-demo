import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/nss-logo.png" alt="NSS Logo" />
      </div>
      <div className={styles.item}>
        <Link href="/learn-about-caves">
          Learn about caves
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="/go-caving">
          Go caving
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="/news-and-events">
          News & events
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="/join-nss">
          Join NSS
        </Link>
      </div>
      <div className={styles.item}>
        <Link href="/about-nss">
          About NSS
        </Link>
      </div>
      <div className={styles.donate}>
        <Link href="/donate">
          Donate
        </Link>
      </div>
    </div>
  )
}
