// pages/404.js
import styles from '@/styles/404.module.css'
import Head from 'next/head'
import Image from 'next/image'
import lost from '../assets/lost.jpeg'

const NotFoundPage = () => {
  return (
    <div className={styles.NotFound}>
      <Head>
        <title>Samantha Durrant | Nothing Here</title>
      </Head>
      <Image
        className={styles.dog}
        src={lost}
        width={500}
        priority={true}
        alt="My amazing dog chilling in the desert and staring at the camera"
      />
      <p className={styles.centerText}>
        Sorry, there's nothing here except for a dog chilling in the desert.
      </p>
    </div>
  )
}

export default NotFoundPage
