import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>
          <span className={styles.textLeft}>Samantha</span>
          <span className={styles.textRight}>
            Durrant <span onClick={() => router.push('/')}>circle</span>
          </span>
        </h1>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}
