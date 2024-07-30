import React from 'react';
import {  motion } from "framer-motion";
import styles from '@/styles/AboutSection.module.css';
// import AboutImg from '@/assets/AliGates-removebg-preview.png';
// import Image from 'next/image';
import { Reveal } from './Reveal';
import CustomCursor from '@/components/CustomCursor';
import CodeHighlighter from './CodeHighlighter';

const AboutSection: React.FC = () => {

  return (
    <div className={styles.about} id='about'>
      <CustomCursor />
      <div className={styles.textdiv}>
        <Reveal>
          <h1>About me</h1>
        </Reveal>
        <motion.div className={styles.paragh}>
          {/* {paragraphs.map((text, index) => ( */}
              <CodeHighlighter language="javascript" />
          {/* ))} */}
        </motion.div>
      </div>
      {/* <Reveal>
        <Image src={AboutImg} alt="aboutimg" quality={100} />
      </Reveal> */}
    </div>
  );
};

export default AboutSection;
