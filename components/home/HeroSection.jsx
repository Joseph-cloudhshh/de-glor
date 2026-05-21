import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=85"
          alt="De Gloria Campus"
          className="w-full h-full object-cover scale-105"
          loading="eager"
          fetchPriority="high"
          style={{ filter: 'brightness(0.45) saturate(0.85)' }}
        />
        {/* Navy overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(30,42,68,0.94) 0%, rgba(30,42,68,0.65) 50%, rgba(30,42,68,0.88) 100%)' }} />
        {/* Subtle warm tint */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,169,107,0.06) 0%, transparent 70%)' }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(200,169,107,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,169,107,0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full blur-[100px] animate-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(221,232,224,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 text-[11px] font-heading font-semibold tracking-[0.25em] uppercase text-gold"
              style={{
                background: 'rgba(200,169,107,0.1)',
                border: '1px solid rgba(200,169,107,0.3)',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Admissions Open — 2026 / 2027
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-ivory leading-[0.95] tracking-tight">
              Raising<br />
              <span style={{
                background: 'linear-gradient(135deg, #C8A96B 0%, #e8c97b 60%, #C8A96B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Tomorrow's
              </span>
              <br />
              <span className="text-ivory/90">Leaders.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-8 text-base md:text-lg text-ivory/50 leading-relaxed max-w-xl font-body font-light"
          >
            A prestigious K–12 institution where academic excellence meets character development — shaping global citizens from Kindergarten to Senior High.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-heading font-semibold tracking-wide text-navy bg-gold hover:bg-gold-light transition-colors duration-200"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              Apply Now <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-heading font-semibold tracking-wide text-ivory/80 hover:text-ivory transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
              }}
            >
              <Play className="w-3.5 h-3.5" /> Explore Campus
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
          >
            {[
              { value: '2,500+', label: 'Students Enrolled' },
              { value: '98%', label: 'Graduation Rate' },
              { value: '150+', label: 'Expert Faculty' },
              { value: '20 Yrs', label: 'Of Excellence' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.08 }}
                className="relative px-4 py-4"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(200,169,107,0.15)',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                }}
              >
                <p className="font-display text-xl md:text-2xl font-bold text-ivory">{stat.value}</p>
                <p className="text-[11px] text-ivory/35 mt-1 font-heading tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3 text-ivory/25"
        >
          <div className="w-px h-12 bg-gold/20" />
          <span className="font-heading text-[10px] tracking-[0.3em] uppercase">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}