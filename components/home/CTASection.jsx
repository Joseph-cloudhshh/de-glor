import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#F6F3EE' }}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(30,42,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: '#1E2A44',
            clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
            boxShadow: '0 8px 60px rgba(30,42,68,0.2)',
          }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.7), transparent)' }} />

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-gold" />
            <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Join Our Community</p>
            <span className="w-5 h-px bg-gold" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-ivory leading-tight mb-5">
            Begin Your Child's<br />Journey to Excellence
          </h2>
          <p className="text-ivory/45 max-w-xl mx-auto font-body mb-10 text-base md:text-lg leading-relaxed">
            Applications for the 2026/2027 academic year are now open. Secure your child's place at De Gloria School of Excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[13px] font-heading font-semibold tracking-wide text-navy bg-gold hover:bg-gold-light transition-colors duration-200"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              Apply Now <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[13px] font-heading font-semibold tracking-wide text-ivory/80 hover:text-ivory transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
              }}
            >
              <CalendarDays className="w-4 h-4" /> Book a Tour
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}