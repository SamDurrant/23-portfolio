import * as React from 'react'
import styles from '../styles/experience.module.css'

function Experience() {
  const [current, setCurrent] = React.useState(0)
  const experiences = ['Airin', 'Impartner', 'Projects']

  const nextSlide = () => {
    setCurrent(current === experiences.length - 1 ? 0 : current + 1)
  }

  const renderExperience = () => {
    switch (experiences[current]) {
      case 'Airin':
        return (
          <div className={styles.exp}>
            <div className="exp-meta">
              <span className="exp-meta-detail">09.2021 - 03.2023</span>
              <h2 className="exp-meta-name">Airin</h2>
              <h3 className="exp-meta-detail">Front End Engineer & Designer</h3>
            </div>
            <div className="exp-description">
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
            <div className="exp-meta">
              <span className="exp-meta-detail">02.2020 - 10.2020</span>
              <h2 className="exp-meta-name">Impartner</h2>
              <h3 className="exp-meta-detail">Web Developer</h3>
            </div>
            <div className="exp-description">
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
            <div className="exp-meta">
              <span className="exp-meta-detail">Tools,</span>
              <h2 className="exp-meta-name">Technical Skills</h2>
              <span className="exp-meta-detail">& Projects</span>
            </div>
            <div className="exp-meta-side">
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
            <div className="exp-description">
              <div className="project">
                <div className="project-heading">
                  <h3>Great Gradient</h3>
                  <span>Site &#8594;</span>
                </div>
                <div className="project-description">
                  <p>
                    An app for generating gradient backgrounds. Add and
                    customize each layer's colors, stops, position and size.
                  </p>
                  <p>Tech: React, Css</p>
                </div>
              </div>
              <div className="project">
                <div className="project-heading">
                  <h3>Soul Seeds</h3>
                  <span>Site &#8594;</span>
                </div>
                <div className="project-description">
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
    <div className={styles.experience}>
      <div className="exp-wrapper">{renderExperience()}</div>
      <button onClick={nextSlide}>&#8595;</button>
    </div>
  )
}

export default Experience
