import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';

const programs = [
  {
    title: 'Kindergarten', ages: 'Ages 3–5',
    desc: 'Play-based discovery that nurtures curiosity, creativity, and early social development.',
    color: '#C9A84C', href: '/kindergarten',
    // Happy young children learning/playing
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
  },
  {
    title: 'Primary School', ages: 'Ages 6–11',
    desc: 'Building strong academic foundations with inquiry-based learning across all disciplines.',
    color: '#1A2640', href: '/primary-school',
    // Kids in classroom raising hands, engaged
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
  },
  {
    title: 'Junior High', ages: 'Ages 12–14',
    desc: 'Expanding horizons with rigorous coursework and leadership development programs.',
    color: '#C9A84C', href: '/junior-high',
    // Teenagers studying together collaboratively
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  },
  {
    title: 'Senior High', ages: 'Ages 15–17',
    desc: 'University preparatory education that shapes confident, world-ready graduates.',
    color: '#1A2640', href: '/senior-high',
    // Graduates / older students celebrating
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  },
];

export default function ProgramsSection() {
  const navigate = useNavigate();
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#F6F3EE' }}>
      <div className="absolute inset-0 opacity-25" style={{
        backgroundImage: 'linear-gradient(rgba(30,42,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading label="Programs" title="Education for Every Stage" description="Comprehensive academic pathways from early childhood through university preparation." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => navigate(p.href)}
              className="group cursor-pointer relative overflow-hidden"
              style={{ border: '1px solid rgba(30,42,68,0.08)' }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'saturate(0.75) brightness(0.88)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(30,42,68,0.5) 100%)' }} />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-0.5 text-[10px] font-heading font-bold tracking-wider"
                    style={{
                      background: p.color === '#C8A96B' ? 'rgba(200,169,107,0.9)' : 'rgba(30,42,68,0.9)',
                      color: p.color === '#C8A96B' ? '#1E2A44' : '#F6F3EE',
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                    }}>
                    {p.ages}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5" style={{ background: 'rgba(255,255,255,0.7)' }}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-navy text-[15px]">{p.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-navy/30 group-hover:text-gold transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-navy/45 text-[13px] leading-relaxed font-body">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
