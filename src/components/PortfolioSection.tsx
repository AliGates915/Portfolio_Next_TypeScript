import React from 'react'
import styles from '@/styles/PortfolioSection.module.css'
import { Reveal } from './Reveal'
import mainImg from '@/assets/Ali.png'
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <Reveal>
            <p>Hi, I am <span>Ali Gates</span></p>
            </Reveal>
            <Reveal>
              <p>I build a frontend websites, I will solve all your business problems. I am   contribute into Open Source.  
              </p>
            </Reveal>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.stat}>
            <Reveal>
              <h1>10+</h1>
            </Reveal>
            <Reveal>
              <p>Happy<br></br>clients</p>
            </Reveal>
          </div>
          <div className={styles.stat}>
            <Reveal>
              <h1>1+</h1>
              </Reveal>
            <Reveal>
              <p>Years of<br></br> experience</p>
            </Reveal>
          </div>
        </div>
      </div>
      <Image src={mainImg} className={styles.mainimg} alt="mainimg" quality={100} />
      <div className={styles.maintextdiv}>
        <Reveal>
          <p>I am a </p>
        </Reveal>
        <h1><span>&nbsp;</span>FRONT-END</h1>
        <h2>DEVELOPER</h2>
      </div>
      <video src={'./smokevideo.mp4'} autoPlay loop muted
        className={styles.smokevideo}
      />
    </div>
  )
}

export default (PortfolioSection)