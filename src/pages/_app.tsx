import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Image from 'next/image'
import dogDog from '../assets/dog-dog.png'
import { useRouter } from 'next/router'
config.autoAddCss = false

const links = [
  {
    text: 'ABOUT',
    url: '/about',
  },
  {
    text: 'EXPERIENCE',
    url: '/experience',
  },
  {
    text: 'CONTACT',
    url: '/contact',
  },
]

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const linkItems = links.map((link, i) => (
    <Link
      href={link.url}
      key={i}
      className={
        router.pathname == link.url
          ? `link linkHover ${styles.navLink} ${styles.navLinkActive}`
          : `link linkHover ${styles.navLink}`
      }
    >
      {link.text}
    </Link>
  ))

  return (
    <>
      <header className={styles.header}>
        <h1 className={`${styles.name} heading1`}>
          <span className={styles.textLeft}>Samantha</span>
          <span className={styles.textRight}>
            Durrant
            <a className={styles.linkHome} onClick={() => router.push('/')}>
              <Image
                className={styles.dog}
                src={dogDog}
                height={150}
                priority={true}
                alt="A drawing of my amazing dog"
              />
            </a>
          </span>
        </h1>
        <nav className={styles.nav}>{linkItems}</nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}
