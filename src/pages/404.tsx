// pages/404.js
import styles from '@/styles/404.module.css'
import Image from 'next/image'
import lost from '../assets/lost.jpeg'

const NotFoundPage = () => {
  return (
    <div className={styles.NotFound}>
      <Image
        className={styles.dog}
        src={lost}
        width={500}
        alt="My amazing dog staring at the camera"
      />
      <h2 className={styles.centerText}>You look a little lost.</h2>
    </div>
  )
}

export default NotFoundPage
