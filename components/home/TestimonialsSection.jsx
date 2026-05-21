import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const testimonials = [
  {
    name: 'Mrs. Adwoa Mensah',
    role: 'Parent',
    initials: 'AM',
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80',
    text: 'De Gloria SCH has transformed my children\'s approach to learning. The teachers are incredibly dedicated and the environment nurtures both academic and personal growth beyond what I expected.',
  },
  {
    name: 'Kwame Asante',
    role: 'Alumni, Class of 2023',
    initials: 'KA',
    img: 'https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=120&q=80',
    text: 'The values and education I received here prepared me for success at university. De Gloria doesn\'t just teach subjects — it shapes leaders who are ready to impact the world.',
  },
  {
    name: 'Dr. Nana Osei',
    role: 'Parent & Board Member',
    initials: 'NO',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    text: 'As a medical professional, I appreciate the school\'s commitment to holistic development. The facilities and curriculum are genuinely world-class by any international standard.',
  },
  {
    name: 'Ama Darko',
    role: 'Current Student, SHS 3',
    initials: 'AD',
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&q=80',
    text: 'Being part of the STEM program and debate club has given me skills I never imagined having at my age. De Gloria is more than a school — it is a launchpad for life.',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const prev = useCallback(() => {
    go((current - 1 + testimonials.length) % testimonials.length);
  }, [current, go]);

  const next = useCallback(() => {
    go((current + 1) % testimonials.length);
  }, [current, go]);

  // Auto-advance — resets whenever current changes (fixes the manual-nav stale timer bug)
  useEffect(() => {
    const t = setTimeout(() => {
      setDirection(1);
      setCurrent(p => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#1E2A44' }}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(200,169,107,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[150px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,169,107,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading label="Testimonials" title="Voices of Our Community" light />

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: direction * -40, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-center w-full"
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(200,169,107,0.12)', border: '1px solid rgba(200,169,107,0.2)' }}>
                  <Quote className="w-4 h-4 text-gold" />
                </div>
              </div>

              <p className="text-lg md:text-xl text-ivory/70 leading-relaxed font-body font-light max-w-2xl mx-auto">
                {testimonials[current].text}
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                {/* Avatar image */}
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{ border: '2px solid rgba(200,169,107,0.35)' }}>
                  <img
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                    onError={e => { e.target.style.display = 'none'; e.target.parentNode.querySelector('.fallback').style.display = 'flex'; }}
                  />
                  <div className="fallback hidden w-full h-full items-center justify-center font-heading font-bold text-sm text-gold"
                    style={{ background: 'rgba(200,169,107,0.12)' }}>
                    {testimonials[current].initials}
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-ivory text-sm">{testimonials[current].name}</p>
                  <p className="text-ivory/35 text-xs">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button onClick={prev}
            className="p-2.5 text-ivory/30 hover:text-ivory transition-colors border border-ivory/10 hover:border-ivory/20">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => go(i)}
                className={`h-px transition-all duration-300 ${i === current ? 'w-8 bg-gold' : 'w-3 bg-ivory/20'}`} />
            ))}
          </div>
          <button onClick={next}
            className="p-2.5 text-ivory/30 hover:text-ivory transition-colors border border-ivory/10 hover:border-ivory/20">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
