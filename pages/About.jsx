import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, BookOpen, Users, Star } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import GlassCard from '../components/shared/GlassCard';

const CAMPUS_IMG = 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=85';
const PRINCIPAL_IMG = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80';

const timeline = [
  { year: '2005', title: 'Foundation', desc: 'De Gloria SCH was established with a vision to provide world-class education in Ghana.' },
  { year: '2008', title: 'Primary School Opens', desc: 'Expanded with dedicated facilities and expert teachers for primary education.' },
  { year: '2012', title: 'Junior High Added', desc: 'Launched JHS program with advanced science and technology curriculum.' },
  { year: '2015', title: 'Senior High Inaugurated', desc: 'Full K-12 institution with comprehensive SHS and university preparation.' },
  { year: '2018', title: 'STEM Center Opens', desc: 'State-of-the-art STEM center established for advanced learning and research.' },
  { year: '2023', title: 'International Accreditation', desc: 'Received prestigious international accreditation for educational excellence.' },
];

const milestones = [
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: BookOpen, value: '98%', label: 'University Placement' },
  { icon: Users, value: '10,000+', label: 'Alumni Worldwide' },
  { icon: Star, value: '#1', label: 'Regional Rankings' },
];

export default function About() {
  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={CAMPUS_IMG} alt="Campus" className="w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.7)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,42,68,0.5) 0%, rgba(30,42,68,0.97) 100%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">About Us</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight">A Legacy of Excellence</h1>
            <p className="mt-5 text-ivory/45 text-lg max-w-2xl mx-auto font-body font-light">Since 2005, De Gloria SCH has been shaping leaders, innovators, and compassionate citizens through transformative education.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Target, title: 'Our Mission', text: 'To provide holistic, world-class education that develops the intellectual, moral, and social capacities of every student, preparing them to become responsible global citizens and leaders of tomorrow.' },
            { icon: Eye, title: 'Our Vision', text: 'To be the leading educational institution in West Africa, recognized globally for academic excellence, character development, and innovative teaching that transforms lives and communities.' },
          ].map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 flex items-center justify-center"
                  style={{ background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.2)', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-navy text-xl">{item.title}</h3>
              </div>
              <p className="text-navy/45 leading-relaxed font-body">{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Principal */}
      <section className="py-20 md:py-28 px-6 md:px-10" style={{ background: '#DDE8E0' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection variant="slideLeft">
            <div className="relative">
              <img src={PRINCIPAL_IMG} alt="Principal" className="w-full max-w-sm mx-auto object-cover aspect-[3/4]"
                style={{ filter: 'saturate(0.85)', clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))', boxShadow: '0 8px 60px rgba(30,42,68,0.15)' }} />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 blur-2xl opacity-20 pointer-events-none" style={{ background: '#C8A96B' }} />
            </div>
          </AnimatedSection>
          <AnimatedSection variant="slideRight">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Principal's Welcome</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">Welcome to De Gloria SCH</h2>
            <div className="space-y-4 text-navy/45 leading-relaxed font-body text-sm md:text-base">
              <p>Dear Parents, Students, and Visitors — welcome to De Gloria SCH, where every child is valued, every talent is nurtured, and every dream is supported.</p>
              <p>Our dedicated educators work tirelessly to create an environment that combines academic rigor with warmth and care. True education goes beyond textbooks — it shapes character, builds confidence, and ignites a lifelong passion for learning.</p>
              <p>I invite you to explore our campus, meet our community, and discover why De Gloria SCH is the right choice for your child's future.</p>
            </div>
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(30,42,68,0.1)' }}>
              <p className="font-heading font-bold text-navy">Prof. Emmanuel K. Adjei</p>
              <p className="text-navy/40 text-sm">Principal, De Gloria School of Excellence</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="Our Impact" title="Milestones & Achievements" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {milestones.map((m, i) => (
              <GlassCard key={m.label} delay={i * 0.08} className="text-center">
                <m.icon className="w-7 h-7 text-gold mx-auto mb-3" />
                <p className="font-display text-3xl md:text-4xl font-bold text-navy">{m.value}</p>
                <p className="text-navy/40 text-xs mt-1 font-heading tracking-wide">{m.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 px-6 md:px-10" style={{ background: '#1E2A44' }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Our Journey" title="History & Timeline" light />
          <div className="relative pl-6 md:pl-8 border-l border-ivory/10 space-y-10">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08}>
                <div className="relative">
                  <div className="absolute -left-[25px] md:-left-[29px] top-1.5 w-2.5 h-2.5 bg-gold"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                  <span className="font-display text-gold font-bold text-sm">{item.year}</span>
                  <h3 className="font-heading font-bold text-ivory text-lg mt-1">{item.title}</h3>
                  <p className="text-ivory/35 text-sm mt-1 leading-relaxed font-body">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}