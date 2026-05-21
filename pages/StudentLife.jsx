import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Trophy, FlaskConical, Music, MessageSquare, Users, Zap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/shared/AnimatedSection';

const clubs = [
  { icon: FlaskConical, name: 'STEM Club', desc: 'Robotics, coding, and scientific research with hands-on competitions.', color: '#1E2A44', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80' },
  { icon: MessageSquare, name: 'Debate Club', desc: 'Sharpen critical thinking and public speaking through competitive debates.', color: '#C8A96B', img: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=400&q=80' },
  { icon: Music, name: 'Music & Choir', desc: 'Choir, band, and individual instrument training for all skill levels.', color: '#1E2A44', img: 'https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=400&q=75' },
  { icon: Palette, name: 'Visual Arts', desc: 'Painting, sculpture, digital art, and photography workshops.', color: '#C8A96B', img: 'https://images.unsplash.com/photo-1544717684-1243da23b545?w=400&q=80' },
  { icon: Trophy, name: 'Sports Programs', desc: 'Football, basketball, athletics, swimming and more.', color: '#1E2A44', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
  { icon: Users, name: 'Leadership', desc: 'Student government, mentorship, and community service programs.', color: '#C8A96B', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=75' },
  { icon: Zap, name: 'Entrepreneurship', desc: 'Mini-enterprises and innovation challenges to build business acumen.', color: '#1E2A44', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=75' },
  { icon: BookOpen, name: 'Literary Club', desc: 'Book clubs, creative writing, and poetry slam events.', color: '#C8A96B', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=75' },
];

const testimonials = [
  { name: 'Kwame A.', grade: 'SHS 2', text: 'The STEM club opened my eyes to robotics. I now dream of studying engineering at MIT.' },
  { name: 'Ama D.', grade: 'JHS 3', text: 'The debate team taught me confidence. I can speak in front of hundreds without fear.' },
  { name: 'Kofi M.', grade: 'SHS 1', text: 'Sports at De Gloria taught me discipline and teamwork that carries into everything.' },
];

const highlights = [
  { stat: '20+', label: 'Active Clubs & Societies' },
  { stat: '15+', label: 'Sports Teams' },
  { stat: '100%', label: 'Student Participation' },
  { stat: '30+', label: 'Annual Events' },
];

export default function StudentLife() {
  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
          alt="Student Life"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) saturate(0.85)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,42,68,0.95) 0%, rgba(30,42,68,0.4) 60%, transparent 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-36 w-full">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-gold" />
            <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Student Life</p>
            <span className="w-5 h-px bg-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ivory leading-[0.95]">Beyond the<br /><span style={{ color: '#C8A96B' }}>Classroom</span></h1>
          <p className="mt-6 text-ivory/55 text-lg max-w-xl font-body font-light">Clubs, sports, arts, and leadership — discover what makes De Gloria life extraordinary.</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {highlights.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                className="px-4 py-4"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(200,169,107,0.2)', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                <p className="font-display text-2xl font-bold text-ivory">{h.stat}</p>
                <p className="text-[10px] text-ivory/35 mt-1 font-heading tracking-wide">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-24 px-6 md:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-gold" />
                <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Clubs & Societies</p>
                <span className="w-5 h-px bg-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Find Your Passion</h2>
              <p className="mt-4 text-navy/45 max-w-xl mx-auto font-body">Every student has a spark. Our wide range of clubs and activities helps every learner discover and develop their unique talents.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((club, i) => (
              <motion.div key={club.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                <div className="h-40 overflow-hidden">
                  <img src={club.img} alt={club.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'saturate(0.8) brightness(0.75)' }} />
                  <div className="absolute inset-0 h-40" style={{ background: 'linear-gradient(to top, rgba(30,42,68,0.9) 0%, transparent 60%)' }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'rgba(246,243,238,0.97)', border: '1px solid rgba(30,42,68,0.08)' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <club.icon className="w-4 h-4" style={{ color: club.color }} />
                    <h3 className="font-heading font-bold text-navy text-sm">{club.name}</h3>
                  </div>
                  <p className="text-navy/45 text-xs leading-relaxed font-body">{club.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 px-6 md:px-10" style={{ background: '#DDE8E0' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-gold" />
                <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Student Voices</p>
                <span className="w-5 h-px bg-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Hear From Our Students</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-7 relative"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }} />
                <div className="font-display text-4xl text-gold opacity-30 leading-none mb-2">"</div>
                <p className="text-navy/55 text-sm leading-relaxed italic font-body mb-6">"{t.text}"</p>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(30,42,68,0.08)' }}>
                  <p className="font-heading font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-gold text-xs mt-0.5 font-heading">{t.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-10 bg-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-3xl font-bold text-navy mb-4">Be Part of the Story</h3>
          <p className="text-navy/50 mb-8 font-body text-lg">Join a vibrant community where every student finds their place and thrives.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-heading font-semibold tracking-wide text-ivory bg-navy hover:bg-navy-light transition-colors"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
              Apply Now
            </Link>
            <Link to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-heading font-semibold tracking-wide text-navy border border-navy/20 hover:border-navy/50 transition-colors"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}