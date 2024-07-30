import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from '@/styles/CustomCursor.module.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "black",
      mixBlendMode: "difference"
    }
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default CustomCursor;
