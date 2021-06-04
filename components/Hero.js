import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.one}>
          <div>
            <h1>ABOUT NSS TITLE</h1>
          </div>
          <div>
            <p>For over 70 years, the National Speleological Society has promoted safe and responsible caving practices, effective cave and karst management, speleology, and conservation. </p>
          </div>
          <button className={styles.button}>
            Learn More
          </button>
        </div>
        <div className={styles.two}>
          <Image
            src="/images/hero.png"
            className={utilStyles.borderCircle}
            width="4000px"
            height="4000px"
            alt="NSS Hero"
          />
        </div>

      </div>
    </>
  )
}
