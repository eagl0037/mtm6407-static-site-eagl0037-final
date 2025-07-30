'use client';

import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  enter: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 0.95 },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '1rem',
      }}
    >
      {children}
    </motion.div>
  );
}

