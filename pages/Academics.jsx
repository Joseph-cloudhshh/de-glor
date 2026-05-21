import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';

const levels = [
  {
    id: 'kindergarten', title: 'Kindergarten', ages: 'Ages 3–5',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80',
    approach: 'Play-Based Learning', color: '#C8A96B',
    description: 'Our kindergarten creates a nurturing foundation where young learners discover joy through structured play, creativity, and social interaction in a safe and inspiring environment.',
    subjects: ['Phonics & Literacy', 'Numeracy', 'Creative Arts', 'Music & Movement', 'Nature Studies', 'Social Skills'],
    features: ['Small class sizes (max 15)', 'Trained early years specialists', 'Safe child-friendly spaces', 'Daily outdoor activities'],
  },
  {
    id: 'primary', title: 'Primary School', ages: 'Ages 6–11',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=80',
    approach: 'Inquiry-Based Curriculum', color: '#1E2A44',
    description: 'Primary education builds strong academic foundations while fostering curiosity, critical thinking, and a love for lifelong learning across all disciplines and creative pursuits.',
    subjects: ['English Language', 'Mathematics', 'General Science', 'Social Studies', 'ICT', 'French', 'Creative Arts', 'PE'],
    features: ['Cambridge-aligned curriculum', 'Dedicated subject teachers', 'Interactive smart classrooms', 'Regular assessments & reports'],
  },
  {
    id: 'junior-high', title: 'Junior High School', ages: 'Ages 12–14',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80',
    approach: 'Competency-Based Education', color: '#C8A96B',
    description: 'Junior High expands academic horizons with rigorous coursework, leadership development, and enrichment programs preparing every student for senior-level success.',
    subjects: ['English', 'Mathematics', 'Integrated Science', 'Social Studies', 'ICT', 'French', 'Technical Skills', 'RME'],
    features: ['BECE preparation programs', 'Career guidance counseling', 'Advanced science labs', 'Leadership & mentorship programs'],
  },
  {
    id: 'senior-high', title: 'Senior High School', ages: 'Ages 15–17',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80',
    approach: 'University Preparatory', color: '#1E2A44',
    description: 'Our Senior High program offers advanced academic tracks and university preparation, shaping confident graduates ready to excel at top institutions worldwide.',
    subjects: ['Core Mathematics', 'Elective Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Government', 'Literature'],
    features: ['WASSCE excellence track', 'University application support', 'SAT/IELTS preparation', 'Research & project work'],
  },
];

export default function Academics() {
  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: '#DDE8E0' }}>
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: 'linear-gradient(rgba(30,42,68,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Academics</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy">Education for Every Stage</h1>
            <p className="mt-5 text-navy/45 text-lg max-w-2xl mx-auto font-body font-light">From early years discovery to university preparation — our comprehensive academic pathways are designed to nurture excellence at every level.</p>
          </AnimatedSection>
        </div>
      </section>

      {levels.map((level, idx) => (
        <section key={level.id} id={level.id}
          className="py-20 md:py-28 px-6 md:px-10"
          style={{ background: idx % 2 === 0 ? '#F6F3EE' : '#DDE8E0' }}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center ${idx % 2 !== 0 ? 'lg:[&>*:first-child]:order-last' : ''}`}>
              <AnimatedSection variant={idx % 2 === 0 ? 'slideLeft' : 'slideRight'}>
                <div className="relative">
                  <img src={level.img} alt={level.title} className="w-full object-cover aspect-[4/3]"
                    style={{ filter: 'saturate(0.85)', clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))', boxShadow: '0 8px 60px rgba(30,42,68,0.15)' }} />
                  <div className="absolute -bottom-3 right-6 px-4 py-2 text-[11px] font-heading font-bold tracking-wider"
                    style={{
                      background: level.color === '#C8A96B' ? 'rgba(200,169,107,0.9)' : 'rgba(30,42,68,0.9)',
                      color: level.color === '#C8A96B' ? '#1E2A44' : '#F6F3EE',
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}>
                    {level.ages}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection variant={idx % 2 === 0 ? 'slideRight' : 'slideLeft'}>
                <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase mb-3 text-gold">{level.approach}</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight mb-5">{level.title}</h2>
                <p className="text-navy/45 leading-relaxed font-body mb-8">{level.description}</p>

                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-navy/50 text-[10px] uppercase tracking-[0.3em] mb-3">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {level.subjects.map(sub => (
                      <span key={sub} className="px-3 py-1.5 text-xs font-heading text-navy/50 hover:text-navy transition-colors"
                        style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(30,42,68,0.1)' }}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-navy/50 text-[10px] uppercase tracking-[0.3em] mb-3">Program Highlights</h4>
                  <ul className="space-y-2">
                    {level.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-navy/45 font-body">
                        <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}