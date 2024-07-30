import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import styles from '@/styles/transition.module.css';

// Define the type for the original component props
type OriginalComponentProps = {
  // Define props of the original component here
};

// Define the HOC function
const transition = (OgComponent: React.ComponentType<OriginalComponentProps>) => {
  const TransitionComponent: React.FC<OriginalComponentProps> = (props) => {
    return (
      <AnimatePresence mode="wait">
      <motion.div
        key="slide-in"
        className={styles.slide_in}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        
      </motion.div>


        {/* Slide-out animation */}
        <motion.div
          className={styles.slide_out}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <OgComponent {...props} />
      </AnimatePresence>
    );
  };
  return TransitionComponent;
};

export default transition;
