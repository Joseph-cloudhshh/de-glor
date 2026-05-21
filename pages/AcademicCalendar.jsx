import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, BookOpen, Trophy, Music, Flag, Clock } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionHeading from '../components/shared/SectionHeading';

const terms = [
  {
    name: 'First Term',
    period: 'Sep 2 – Dec 13, 2026',
    weeks: 15,
    color: '#1A2640',
    events: [
      { date: 'Sep 2', label: 'School Reopens', type: 'school' },
      { date: 'Sep 10', label: 'New Students Orientation', type: 'school' },
      { date: 'Oct 3', label: 'Inter-House Sports Day', type: 'sports' },
      { date: 'Oct 17', label: "Founders' Day Celebration", type: 'event' },
      { date: 'Nov 7', label: 'Mid-Term Examinations', type: 'exam' },
      { date: 'Nov 21', label: 'Cultural Arts Festival', type: 'event' },
      { date: 'Dec 5', label: 'End-of-Term Examinations Begin', type: 'exam' },
      { date: 'Dec 13', label: 'Term Ends / Vacation Begins', type: 'school' },
    ],
  },
  {
    name: 'Second Term',
    period: 'Jan 12 – Apr 3, 2027',
    weeks: 12,
    color: '#C9A84C',
    events: [
      { date: 'Jan 12', label: 'School Reopens', type: 'school' },
      { date: 'Jan 26', label: 'Science & Technology Fair', type: 'event' },
      { date: 'Feb 14', label: 'Prize-Giving & Awards Day', type: 'event' },
      { date: 'Feb 27', label: 'Mid-Term Examinations', type: 'exam' },
      { date: 'Mar 10', label: 'Mock BECE / WASSCE (JHS/SHS)', type: 'exam' },
      { date: 'Mar 21', label: 'World Poetry Day Recital', type: 'event' },
      { date: 'Mar 28', label: 'End-of-Term Examinations Begin', type: 'exam' },
      { date: 'Apr 3', label: 'Term Ends / Vacation Begins', type: 'school' },
    ],
  },
  {
    name: 'Third Term',
    period: 'Apr 27 – Jul 18, 2027',
    weeks: 12,
    color: '#1A2640',
    events: [
      { date: 'Apr 27', label: 'School Reopens', type: 'school' },
      { date: 'May 9', label: 'Parent-Teacher Conferences', type: 'school' },
      { date: 'May 23', label: 'BECE / WASSCE External Exams Begin', type: 'exam' },
      { date: 'Jun 6', label: 'Inter-School Debate Competition', type: 'event' },
      { date: 'Jun 20', label: 'KG & Primary Sports Carnival', type: 'sports' },
      { date: 'Jul 4', label: 'Annual Graduation Ceremony', type: 'event' },
      { date: 'Jul 11', label: 'End-of-Year Examinations Begin', type: 'exam' },
      { date: 'Jul 18', label: 'Academic Year Ends', type: 'school' },
    ],
  },
];

const typeConfig = {
  school: { icon: BookOpen, color: '#1A2640', bg: 'rgba(26,38,64,0.08)', label: 'School' },
  exam: { icon: Clock, color: '#b45309', bg: 'rgba(180,83,9,0.08)', label: 'Examination' },
  event: { icon: Flag, color: '#C9A84C', bg: 'rgba(201,168,76,0.12)', label: 'Event' },
  sports: { icon: Trophy, color: '#16a34a', bg: 'rgba(22,163,74,0.08)', label: 'Sports' },
};

const highlights = [
  { icon: BookOpen, label: 'Three Terms', value: '3 Academic Terms' },
  { icon: Clock, label: 'School Hours', value: '7:30 AM – 3:00 PM' },
  { icon: Trophy, label: 'Sports Day', value: 'First Term, October' },
  { icon: Flag, label: 'Graduation', value: 'Third Term, July' },
];

export default function AcademicCalendar() {
  const [activeTerm, setActiveTerm] = useState(0);
  const term = terms[activeTerm];

  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: '#DDE8E0' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(30,42,68,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">2026 / 2027</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy">Academic Calendar</h1>
            <p className="mt-5 text-navy/45 text-lg max-w-xl mx-auto font-body font-light">Key dates, examinations, events, and term schedules for the 2026/2027 academic year.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="py-8 px-6 md:px-10 bg-navy">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div key={h.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center shrink-0"
                style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <h.icon className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-ivory/40 text-[10px] font-heading uppercase tracking-widest">{h.label}</p>
                <p className="text-ivory text-sm font-heading font-semibold">{h.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="Term Schedule" title="Events & Key Dates" center={true} />

          {/* Term selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {terms.map((t, i) => (
              <button key={t.name} onClick={() => setActiveTerm(i)}
                className="px-6 py-2.5 text-sm font-heading font-semibold transition-all"
                style={{
                  background: activeTerm === i ? '#1A2640' : 'rgba(255,255,255,0.7)',
                  color: activeTerm === i ? '#F5F1EA' : 'rgba(26,38,64,0.5)',
                  border: `1px solid ${activeTerm === i ? '#1A2640' : 'rgba(26,38,64,0.12)'}`,
                  clipPath: 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px))'
                }}>
                {t.name}
              </button>
            ))}
          </div>

          {/* Term card */}
          <motion.div key={activeTerm} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="relative p-8 md:p-10"
            style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))' }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
              <div>
                <h3 className="font-display font-bold text-navy text-2xl">{term.name}</h3>
                <p className="text-navy/40 text-sm font-body mt-1">{term.period} · {term.weeks} weeks</p>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                {Object.entries(typeConfig).map(([key, cfg]) => (
                  <span key={key} className="flex items-center gap-1.5 text-[11px] font-heading">
                    <span className="w-2 h-2 rounded-full" style={{ background: cfg.color }} />
                    <span style={{ color: 'rgba(26,38,64,0.45)' }}>{cfg.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {term.events.map((ev, i) => {
                const cfg = typeConfig[ev.type];
                const Icon = cfg.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-white/60"
                    style={{ border: '1px solid rgba(30,42,68,0.05)', background: 'rgba(255,255,255,0.4)' }}>
                    <div className="w-8 h-8 flex items-center justify-center shrink-0"
                      style={{ background: cfg.bg, border: `1px solid ${cfg.color}22` }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: cfg.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-navy font-heading font-semibold text-sm truncate">{ev.label}</p>
                    </div>
                    <span className="text-[12px] font-heading font-semibold shrink-0 px-3 py-1"
                      style={{ background: cfg.bg, color: cfg.color }}>
                      {ev.date}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* All terms overview */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {terms.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 cursor-pointer" onClick={() => setActiveTerm(i)}
                style={{
                  background: activeTerm === i ? '#1A2640' : 'rgba(255,255,255,0.6)',
                  border: `1px solid ${activeTerm === i ? '#1A2640' : 'rgba(30,42,68,0.08)'}`,
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}>
                <Calendar className="w-5 h-5 mb-3" style={{ color: activeTerm === i ? '#C9A84C' : '#C9A84C' }} />
                <h4 className="font-heading font-bold text-sm mb-1" style={{ color: activeTerm === i ? '#F5F1EA' : '#1A2640' }}>{t.name}</h4>
                <p className="text-[12px] font-body" style={{ color: activeTerm === i ? 'rgba(245,241,234,0.5)' : 'rgba(26,38,64,0.4)' }}>{t.period}</p>
                <p className="text-[11px] mt-1.5 font-heading" style={{ color: activeTerm === i ? '#C9A84C' : 'rgba(26,38,64,0.35)' }}>{t.weeks} weeks · {t.events.length} events</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
            style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(30,42,68,0.07)' }}>
            {Object.entries(typeConfig).map(([key, cfg]) => {
              const Icon = cfg.icon;
              return (
                <div key={key} className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: cfg.bg }}>
                    <Icon className="w-4 h-4" style={{ color: cfg.color }} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm">{cfg.label}</p>
                    <p className="text-navy/35 text-xs font-body">Event type</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}