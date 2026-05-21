import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Globe, BookOpen, Heart, Zap } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all we do.', num: '01', color: '#1E2A44' },
  { icon: Star, title: 'Excellence', desc: 'We pursue outstanding achievement in academics, character, and every aspect of school life.', num: '02', color: '#C8A96B' },
  { icon: Globe, title: 'Global Vision', desc: 'We prepare students to thrive as responsible and engaged global citizens of the 21st century.', num: '03', color: '#1E2A44' },
  { icon: BookOpen, title: 'Lifelong Learning', desc: 'We cultivate a love for knowledge and the skills to pursue continuous growth and discovery.', num: '04', color: '#C8A96B' },
  { icon: Heart, title: 'Community', desc: 'We foster a warm, inclusive environment where every student, parent, and staff member belongs.', num: '05', color: '#1E2A44' },
  { icon: Zap, title: 'Innovation', desc: 'We embrace creative thinking and technology to solve problems and shape a better tomorrow.', num: '06', color: '#C8A96B' },
];

export default function ValuesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#DDE8E0' }}>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(30,42,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading label="Our Values" title="What We Stand For" description="Six guiding principles that shape every decision, curriculum, and interaction within our school community." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative p-6 md:p-8 group cursor-default"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(30,42,68,0.08)',
                boxShadow: '0 2px 20px rgba(30,42,68,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.4), transparent)' }} />

              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 flex items-center justify-center"
                  style={{
                    background: v.color === '#C8A96B' ? 'rgba(200,169,107,0.12)' : 'rgba(30,42,68,0.08)',
                    border: `1px solid ${v.color === '#C8A96B' ? 'rgba(200,169,107,0.2)' : 'rgba(30,42,68,0.12)'}`,
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                  }}>
                  <v.icon className="w-5 h-5" style={{ color: v.color }} />
                </div>
                <span className="font-display text-3xl font-bold opacity-8 text-navy">{v.num}</span>
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-2">{v.title}</h3>
              <p className="text-navy/45 text-sm leading-relaxed font-body">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}