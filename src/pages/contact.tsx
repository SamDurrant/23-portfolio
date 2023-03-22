import * as React from 'react'
import {
  faGithub,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/contact.module.css'

function Contact() {
  return (
    <div className={styles.Contact}>
      <h2>
        Let's get together, make some fun stuff and have a little fun while
        we're at it.
      </h2>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faGitlab} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
    </div>
  )
}

export default Contact
