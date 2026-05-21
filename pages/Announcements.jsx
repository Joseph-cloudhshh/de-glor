import React from 'react';
import { motion } from 'framer-motion';
import { Pin, Bell, CalendarDays } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';

const sticky = [
  { title: 'Second Term Resumption Notice', date: 'January 6, 2026', type: 'Important', desc: 'All students are expected to resume for the second term on Monday, January 6th, 2026. Please ensure all school fees are settled before resumption.' },
  { title: 'End of Term Exam Schedule Published', date: 'December 15-20, 2025', type: 'Exams', desc: 'End of first term examinations will be conducted from December 15th to 20th. Full timetables have been distributed to all class teachers and are available on the portal.' },
];

const announcements = [
  { title: 'PTA Meeting Announcement', date: 'June 15, 2026', type: 'PTA', desc: 'The next PTA meeting is scheduled for June 15th at 2:00 PM in the school auditorium. All parents are encouraged to attend.', isNew: true },
  { title: 'School Holiday: Independence Day', date: 'March 6, 2026', type: 'Holiday', desc: 'School will be closed on March 6th in observance of Ghana\'s Independence Day. Classes resume on March 7th.' },
  { title: 'Sports Day Registration Open', date: 'May 20, 2026', type: 'Sports', desc: 'Registration for the annual inter-house sports competition is now open. Students should register with their house captains by May 25th.', isNew: true },
  { title: 'Uniform Policy Reminder', date: 'May 18, 2026', type: 'General', desc: 'Parents are reminded that all students must adhere to the school uniform policy. Hair accessories should be in school colors only.' },
  { title: 'BECE Preparatory Classes', date: 'May 10, 2026', type: 'Exams', desc: 'Extra preparatory classes for BECE candidates will begin on May 15th. The schedule is available from the JHS coordinator.' },
  { title: 'Excursion to Kakum National Park', date: 'June 5, 2026', type: 'Events', desc: 'The primary school excursion to Kakum National Park is on June 5th. Permission slips must be returned by May 30th.' },
];

const typeColors = {
  Important: { text: '#C8A96B', bg: 'rgba(200,169,107,0.1)', border: 'rgba(200,169,107,0.25)' },
  Exams:     { text: '#1E2A44', bg: 'rgba(30,42,68,0.08)', border: 'rgba(30,42,68,0.18)' },
  PTA:       { text: '#1E2A44', bg: 'rgba(30,42,68,0.06)', border: 'rgba(30,42,68,0.15)' },
  Holiday:   { text: '#4a7a5a', bg: 'rgba(74,122,90,0.08)', border: 'rgba(74,122,90,0.2)' },
  Sports:    { text: '#C8A96B', bg: 'rgba(200,169,107,0.08)', border: 'rgba(200,169,107,0.2)' },
  Events:    { text: '#1E2A44', bg: 'rgba(30,42,68,0.07)', border: 'rgba(30,42,68,0.14)' },
  General:   { text: '#6b7a8d', bg: 'rgba(107,122,141,0.06)', border: 'rgba(107,122,141,0.15)' },
};

function TypeBadge({ type }) {
  const c = typeColors[type] || typeColors.General;
  return (
    <span className="px-2.5 py-0.5 text-[10px] font-heading font-bold tracking-wider uppercase"
      style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}`, clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
      {type}
    </span>
  );
}

export default function Announcements() {
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
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Notice Board</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy">Announcements</h1>
            <p className="mt-5 text-navy/45 text-lg max-w-xl mx-auto font-body font-light">Stay up to date with important notices, schedules, and school-wide communications.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-10 pt-14 bg-ivory">
        <div className="max-w-4xl mx-auto">
          {/* Pinned */}
          <div className="mb-10">
            <h3 className="font-heading font-semibold text-navy/40 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-5">
              <Pin className="w-3.5 h-3.5 text-gold" /> Pinned Notices
            </h3>
            <div className="space-y-3">
              {sticky.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <div className="relative p-5 md:p-6"
                    style={{ background: 'rgba(200,169,107,0.05)', border: '1px solid rgba(200,169,107,0.2)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }} />
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      <TypeBadge type={item.type} />
                      <span className="flex items-center gap-1 text-navy/30 text-[11px] font-heading">
                        <CalendarDays className="w-3 h-3" /> {item.date}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-navy">{item.title}</h4>
                    <p className="text-navy/45 text-sm mt-2 leading-relaxed font-body">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* All announcements */}
          <h3 className="font-heading font-semibold text-navy/40 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-5">
            <Bell className="w-3.5 h-3.5 text-gold" /> Recent Announcements
          </h3>
          <div className="space-y-2">
            {announcements.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <TypeBadge type={item.type} />
                  {item.isNew && (
                    <span className="px-2 py-0.5 text-[9px] font-heading font-bold uppercase bg-navy text-ivory">New</span>
                  )}
                  <span className="flex items-center gap-1 text-navy/25 text-[11px] font-heading ml-auto">
                    <CalendarDays className="w-3 h-3" /> {item.date}
                  </span>
                </div>
                <h4 className="font-heading font-semibold text-navy text-sm">{item.title}</h4>
                <p className="text-navy/40 text-sm mt-1.5 leading-relaxed font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}