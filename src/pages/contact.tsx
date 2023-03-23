import {
  faGithub,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import styles from '../styles/contact.module.css'

function Contact() {
  return (
    <div className={styles.contact}>
      <Head>
        <title>Samantha Durrant | Contact</title>
      </Head>
      <h2 className={`${styles.contactText} heading2`}>
        Let's get together, make some fun stuff and have a little fun while
        we're at it.
      </h2>
      <div className={styles.icons}>
        <a
          href="https://gitlab.com/samantha.durrant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faGitlab} />
        </a>
        <a
          href="https://github.com/SamDurrant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/samantha-durrant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  )
}

export default Contact
