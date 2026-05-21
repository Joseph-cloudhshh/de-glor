import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : {}}
      className={`relative overflow-hidden p-6 md:p-7 transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.55)',
        border: '1px solid rgba(30,42,68,0.08)',
        boxShadow: '0 4px 40px rgba(30,42,68,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
      }}
    >
      {/* Top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }}
      />
      {children}
    </motion.div>
  );
}