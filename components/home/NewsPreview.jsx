import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';

const news = [
  { title: 'De Gloria Students Sweep National Science Olympiad', date: 'May 14, 2026', category: 'Achievement', img: 'https://images.unsplash.com/photo-1561489396-888724a1543d?w=600&q=80', read: '3 min' },
  { title: 'New STEM Lab Inaugurated by Regional Education Director', date: 'May 8, 2026', category: 'Campus', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80', read: '2 min' },
  { title: 'Annual Prize Giving Day Set for June 20th', date: 'May 3, 2026', category: 'Events', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', read: '2 min' },
];

const events = [
  { title: 'Open Day & Campus Tour', date: 'Jun 1, 2026' },
  { title: 'End of Term Examinations', date: 'Jun 15–20, 2026' },
  { title: 'Graduation Ceremony', date: 'Jun 28, 2026' },
  { title: 'New Term Begins', date: 'Sep 8, 2026' },
];

export default function NewsPreview() {
  return (
    <section className="py-24 md:py-32 relative" style={{ background: '#DDE8E0' }}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(30,42,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <SectionHeading label="Latest" title="News & Events" center={false} />
          <Link to="/news" className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-heading font-semibold text-navy/50 hover:text-navy transition-colors mb-8">
            View all news <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* News cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Featured */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer sm:col-span-2 lg:col-span-1 relative overflow-hidden"
              style={{ border: '1px solid rgba(30,42,68,0.08)' }}
            >
              <div className="h-52 overflow-hidden">
                <img src={news[0].img} alt={news[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: 'saturate(0.8)' }} />
                <div className="absolute inset-0 h-52" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(30,42,68,0.6) 100%)' }} />
              </div>
              <div className="p-5" style={{ background: 'rgba(255,255,255,0.6)' }}>
                <span className="px-2.5 py-0.5 text-[10px] font-heading font-bold tracking-wider text-navy bg-gold/15 border border-gold/25">{news[0].category}</span>
                <h3 className="font-heading font-bold text-navy mt-3 leading-snug group-hover:text-navy-light transition-colors">{news[0].title}</h3>
                <div className="flex items-center gap-4 mt-2 text-navy/35 text-[11px] font-heading">
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {news[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {news[0].read} read</span>
                </div>
              </div>
            </motion.div>

            {/* Compact news */}
            {news.slice(1).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-3 p-4 group cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(30,42,68,0.07)' }}
              >
                <div className="w-20 h-16 shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ filter: 'saturate(0.8)' }} />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-bold tracking-wider text-gold">{item.category}</span>
                  <p className="font-heading font-semibold text-navy text-sm leading-snug mt-0.5 group-hover:text-navy-light transition-colors">{item.title}</p>
                  <p className="text-navy/35 text-[11px] mt-1 font-heading flex items-center gap-1">
                    <CalendarDays className="w-3 h-3" /> {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6"
            style={{ background: '#1E2A44', border: '1px solid rgba(200,169,107,0.12)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }} />
            <h3 className="font-heading font-semibold text-gold text-[11px] uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <CalendarDays className="w-3.5 h-3.5" /> Upcoming Events
            </h3>
            <div className="space-y-4">
              {events.map((ev, i) => (
                <div key={ev.title} className="flex items-start gap-3 pb-4 border-b border-ivory/6 last:border-0 last:pb-0">
                  <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                  <div>
                    <p className="font-heading font-medium text-ivory text-sm">{ev.title}</p>
                    <p className="text-gold/60 text-[11px] mt-0.5 font-body">{ev.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/announcements" className="mt-6 flex items-center gap-1.5 text-gold/60 hover:text-gold text-[12px] font-heading transition-colors">
              View all events <ArrowUpRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-6 md:hidden">
          <Link to="/news" className="flex items-center gap-1.5 text-[13px] font-heading font-semibold text-navy/50 hover:text-navy transition-colors">
            View all news <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}