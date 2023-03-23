import styles from '@/styles/about.module.css'
import Head from 'next/head'

function About() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Samantha Durrant | About</title>
      </Head>
      <p>
        Hey there! I'm Sam, a front end developer and designer who's always up
        for a challenge and loves collaborating with like-minded individuals who
        share my passion for growth. I love how coding and web development allow
        me to tap into my creative side while also using my analytical skills to
        solve complex problems. My focus on detail and design aesthetics has
        helped me create visually stunning and intuitive user interfaces, most
        recently using Angular and Sass.
      </p>
      <p>
        I am always eager to learn and grow, whether it's by taking on new
        challenges or collaborating with other talented folks. Working both
        independently and as part of a team, I am driven by my curiosity and
        self-motivation to continuously improve my skills and knowledge. I am
        constantly expanding my mind and exploring new hobbies, most recently
        practicing my digital art skills with Procreate and Vectornator.
        Learning languages is another big interest of mine. I spent some time
        learning Japanese during the pandemic and became decent at reading
        hiragana and katakana but I've switched over to Spanish more recently.
      </p>
      <p>
        I also love to unwind by cooking up delicious flavors in the kitchen or
        exploring the great outdoors. Growing up in the forests of the Pacific
        Northwest has instilled in me a love of nature, and I'm always looking
        for new ways to explore and connect with nature.
      </p>
    </div>
  )
}

export default About
