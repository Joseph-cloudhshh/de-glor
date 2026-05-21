import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, ArrowUpRight, Clock } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';

const articles = [
  { id: 1, date: 'May 15, 2026', title: 'De Gloria Students Win National Science Olympiad', category: 'Achievement', desc: 'Our Senior High team brought home gold in the 2026 National Science Olympiad, marking our third consecutive win.', featured: true, readTime: '4 min' },
  { id: 2, date: 'May 10, 2026', title: 'New STEM Lab Opening Ceremony', category: 'Campus', desc: 'State-of-the-art laboratory with robotics, 3D printing, and advanced computing opens for hands-on student research.', featured: true, readTime: '3 min' },
  { id: 3, date: 'May 5, 2026', title: 'Annual Inter-House Sports Competition', category: 'Sports', desc: 'An exciting week of athletic competitions showcasing talent across all levels of our student community.', readTime: '3 min' },
  { id: 4, date: 'Apr 28, 2026', title: 'Parent-Teacher Conference Success', category: 'Community', desc: 'Over 500 parents attended our bi-annual PTA meeting, contributing actively to school development plans.', readTime: '2 min' },
  { id: 5, date: 'Apr 20, 2026', title: 'World Book Day Celebrations', category: 'Events', desc: 'Students celebrated with creative writing workshops, author visits, and a spectacular costume parade.', readTime: '3 min' },
  { id: 6, date: 'Apr 15, 2026', title: 'Debate Team Qualifies for Nationals', category: 'Achievement', desc: 'Both junior and senior debate teams qualified for the National Championships after dominating regional rounds.', readTime: '3 min' },
];

const categories = ['All', 'Achievement', 'Campus', 'Sports', 'Community', 'Events'];

const catColors = {
  Achievement: { text: '#1E2A44', bg: 'rgba(30,42,68,0.08)', border: 'rgba(30,42,68,0.18)' },
  Campus:      { text: '#4a7a5a', bg: 'rgba(74,122,90,0.08)', border: 'rgba(74,122,90,0.2)' },
  Sports:      { text: '#C8A96B', bg: 'rgba(200,169,107,0.1)', border: 'rgba(200,169,107,0.25)' },
  Community:   { text: '#1E2A44', bg: 'rgba(30,42,68,0.06)', border: 'rgba(30,42,68,0.14)' },
  Events:      { text: '#C8A96B', bg: 'rgba(200,169,107,0.08)', border: 'rgba(200,169,107,0.2)' },
};

export default function News() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const filtered = articles.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCat === 'All' || a.category === activeCat;
    return matchSearch && matchCat;
  });

  const c = (cat) => catColors[cat] || catColors.Achievement;

  return (
    <div className="bg-ivory">
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: '#DDE8E0' }}>
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: 'linear-gradient(rgba(30,42,68,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">News & Media</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy">Latest from De Gloria</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-10 pt-12 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
              <input placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/70 border border-navy/12 text-navy placeholder:text-navy/30 text-sm font-body outline-none focus:border-gold/60 transition-colors" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 text-[12px] font-heading font-semibold tracking-wide transition-all ${activeCat === cat ? 'text-ivory bg-navy' : 'text-navy/45 hover:text-navy border border-navy/15'}`}
                  style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          {filtered.filter(a => a.featured).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {filtered.filter(a => a.featured).map((a, i) => (
                <motion.article key={a.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group relative p-6 md:p-8 cursor-pointer transition-all duration-300 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}>
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-0.5 text-[10px] font-heading font-bold tracking-wider uppercase border"
                      style={{ color: c(a.category).text, background: c(a.category).bg, borderColor: c(a.category).border }}>{a.category}</span>
                    <span className="px-2 py-0.5 text-[10px] font-heading font-bold uppercase text-gold border border-gold/30"
                      style={{ background: 'rgba(200,169,107,0.08)' }}>Featured</span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl md:text-2xl mb-3 group-hover:text-gold transition-colors">{a.title}</h3>
                  <p className="text-navy/40 text-sm leading-relaxed font-body mb-5">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-navy/30 text-xs font-heading">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime} read</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-navy/20 group-hover:text-gold transition-colors" />
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.filter(a => !a.featured).map((a, i) => (
              <motion.article key={a.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group relative p-5 cursor-pointer overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-heading font-bold tracking-wider uppercase border mb-3"
                  style={{ color: c(a.category).text, background: c(a.category).bg, borderColor: c(a.category).border }}>{a.category}</span>
                <h3 className="font-heading font-bold text-navy text-base mb-2 group-hover:text-gold transition-colors">{a.title}</h3>
                <p className="text-navy/35 text-sm leading-relaxed font-body mb-4 line-clamp-2">{a.desc}</p>
                <div className="flex items-center gap-3 text-navy/25 text-xs font-heading">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-navy/30 font-heading">No articles found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}