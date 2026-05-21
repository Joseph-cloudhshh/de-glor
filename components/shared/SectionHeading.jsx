import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function SectionHeading({ label, title, description, center = true, light = false }) {
  return (
    <div className={`mb-14 md:mb-20 ${center ? 'text-center' : ''}`}>
      {label && (
        <AnimatedSection delay={0}>
          <div className={`inline-flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
            <span className="w-5 h-px bg-gold" />
            <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">
              {label}
            </p>
            <span className="w-5 h-px bg-gold" />
          </div>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${light ? 'text-ivory' : 'text-navy'}`}>
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p className={`mt-5 text-base md:text-lg max-w-2xl leading-relaxed font-body ${center ? 'mx-auto' : ''} ${light ? 'text-ivory/50' : 'text-navy/45'}`}>
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}