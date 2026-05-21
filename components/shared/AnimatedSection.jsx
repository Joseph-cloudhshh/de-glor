import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 48, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  },
  fadeIn: {
    hidden: { opacity: 0, filter: 'blur(4px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 }
  }
};

export default function AnimatedSection({ children, variant = 'fadeUp', delay = 0, className = '', once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}