import Head from 'next/head'
import * as React from 'react'
import styles from '../styles/experience.module.css'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Experience() {
  const [current, setCurrent] = React.useState(0)
  const experiences = ['Airin', 'Impartner', 'Projects']

  const nextSlide = () => {
    setCurrent(current === experiences.length - 1 ? 0 : current + 1)
  }

  const hrs = () => {
    return (
      <div className={styles.hrList}>
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    )
  }

  const renderExperience = () => {
    switch (experiences[current]) {
      case 'Airin':
        return (
          <div className={styles.exp}>
            <div className={styles.expMeta}>
              <span className={styles.expMetaDetail}>09.2021 - 03.2023</span>
              {hrs()}
              <h2 className={styles.expMetaName}>Airin</h2>
              <span className={styles.expMetaDetail}>
                Front End Engineer & Designer
              </span>
            </div>
            <div className={styles.expMetaDescription}>
              <p>
                At Airin, an AI SaaS startup, I had the opportunity to
                collaborate with a small but amazing team on a variety of
                projects. Some of my accomplishments during my time there
                include:
              </p>
              <ul>
                <li>
                  Leading an accessibility initiative that included optimizing
                  page titles, color contrast, semantic markup, and selectable
                  controls. This project boosted our Lighthouse accessibility
                  scores from the 70's to the 90's.
                </li>
                <li>
                  Designing a dashboard interface to provide usage insights,
                  helping users make data-driven decisions regarding their
                  content.
                </li>
                <li>
                  Optimizing our color palette by reducing variations, creating
                  clear naming conventions, and providing an accessibility
                  contrast table and documentation.
                </li>
                <li>
                  Leveraging D3 for advanced data visualization when migrating
                  an outdated reporting feature, resulting in improved control
                  and functionality.
                </li>
              </ul>
            </div>
          </div>
        )
      case 'Impartner':
        return (
          <div className={styles.exp}>
            <div className={styles.expMeta}>
              <span className={styles.expMetaDetail}>02.2020 - 10.2020</span>
              {hrs()}
              <h2 className={styles.expMetaName}>Impartner</h2>
              <span className={styles.expMetaDetail}>Web Developer</span>
            </div>
            <div className={styles.expMetaDescription}>
              <p>
                Impartner is a channel management Saas where I had the fortune
                of working really closely with a couple of incredible clients. I
                frequently produced bootstrap pages on a quick turnaround to
                meet their needs. I organized email campaigns and created
                documentation for fellow coworkers. Employing Perforce for
                version control, I worked across multiple staging environments.
                Utilized the following technologies: HTML/CSS, JavaScript,
                Bootstrap, C#
              </p>
            </div>
          </div>
        )
      case 'Projects':
        return (
          <div className={styles.exp}>
            <div className={styles.expMetaWrapper}>
              <div className={styles.expMeta}>
                <span className={styles.expMetaDetail}>Tools,</span>
                {hrs()}
                <h2 className={styles.expMetaName}>Technical Skills</h2>
                <span className={styles.expMetaDetail}>& Projects</span>
              </div>
              <div className={styles.expMetaSide}>
                <ul>
                  <li>CSS/Sass</li>
                  <li>Figma</li>
                  <li>D3</li>
                  <li>Cypress</li>
                  <li>React</li>
                  <li>Angular</li>
                </ul>
                <ul>
                  <li>RxJS</li>
                  <li>TypeScript</li>
                  <li>Javascript ES6</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
            <div className={styles.expMetaDescription}>
              <div className={styles.project}>
                <div className={styles.projectHeading}>
                  <h3>Great Gradient</h3>
                  <a
                    href="https://greatgradient.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectHeadingLink} linkHover`}
                  >
                    <span>Site &#8594;</span>
                  </a>
                </div>
                <div className={styles.projectDescription}>
                  <p>
                    An app for generating gradient backgrounds. Add and
                    customize each layer's colors, stops, position and size.
                  </p>
                  <p>Tech: React, Css</p>
                </div>
              </div>
              <div className={styles.project}>
                <div className={styles.projectHeading}>
                  <h3>Soul Seeds</h3>
                  <a
                    href="https://soulseeds.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectHeadingLink} linkHover`}
                  >
                    <span>Site &#8594;</span>
                  </a>
                </div>
                <div className={styles.projectDescription}>
                  <p>
                    This project allowed me to gain more experience organizing
                    and structuring my React code.
                  </p>
                  <p>Tech: React, Css</p>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Samantha Durrant | Experiences</title>
      </Head>
      {renderExperience()}
      <button className={styles.btnNext} onClick={nextSlide}>
        <FontAwesomeIcon className={styles.icon} icon={faArrowDownLong} />
      </button>
    </div>
  )
}

export default Experience
