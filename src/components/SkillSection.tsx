import styles from '../styles/SkillSection.module.css';
import { Reveal } from './Reveal';
import Image from 'next/image';
import { images } from './Image'; // Adjust the path accordingly

type TypeImage = {
  image: string;
  index: number;
};


const Marquee: React.FC = () => {
  
  return (
    <div className={styles.marqueeContainer}>
      <Reveal>
        <h1>Skills ☞ What I Use???</h1>
      </Reveal>
      <div className={styles.scroll} style={{ "--t": "15s" } as React.CSSProperties}>
        <div>
          <span>HTML5</span><span>CSS3</span>
          <span>JAVASCRIPT</span><span>REACTJS</span>
          <span>NEXTJS</span><span>TAILWINDCSS</span>
          <span>MATERIALUI</span>
          <span>FRAMERMOTION</span><span>GSAP</span>
          <span>RESTFULAPI</span><span>GIT</span>
          <span>TypeScript</span><span>ThreeJS</span>
          
          <span>PROCESSFLOW</span>
          <span>MATERIALUI</span>
        </div>
      </div>
      <div className={styles.scroll} style={{ "--t": "35s" } as React.CSSProperties}>
      <div>
        <span>HTML5</span><span>CSS3</span>
        <span>JAVASCRIPT</span><span>REACTJS</span>
        <span>NEXTJS</span><span>TAILWINDCSS</span>
        <span>MATERIALUI</span>
        <span>FRAMERMOTION</span><span>GSAP</span>
        <span>TypeScript</span><span>ThreeJS</span>
        <span>RESTFULAPI</span><span>GIT</span>
        <span>PROCESSFLOW</span>
        <span>MATERIALUI</span>
      </div>
      </div>
      <div className={styles.scroll} style={{ "--t": "20s" } as React.CSSProperties}>
        <div>
          <span>HTML5</span><span>CSS3</span>
          <span>JAVASCRIPT</span><span>REACTJS</span>
          <span>NEXTJS</span><span>TAILWINDCSS</span>
          <span>MATERIALUI</span>
          <span>FRAMERMOTION</span><span>GSAP</span>
          <span>TypeScript</span><span>ThreeJS</span>
          <span>RESTFULAPI</span><span>GIT</span>
          <span>MATERIALUI</span>
        </div>
      </div>
      <div className={`${styles.scroll} ${styles.Imgbx}`} 
            style={{ "--t": "40s" } as React.CSSProperties}>
        <div >
        {images.map((image, index) => (
          <Image 
            key={index} src={image.src} 
            alt={image.alt} />
        ))}
        {images.map((image, index) => (
          <Image 
            key={index} src={image.src} 
            alt={image.alt} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
