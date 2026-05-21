import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, ArrowUpRight, Download } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import { Link } from 'react-router-dom';

const steps = [
  { step: '01', title: 'Submit Application', desc: 'Complete the online application form with student and parent/guardian details.' },
  { step: '02', title: 'Entrance Assessment', desc: 'Student takes an age-appropriate assessment to determine academic readiness.' },
  { step: '03', title: 'Family Interview', desc: 'A conversation with our admissions team to discuss your child\'s goals and fit.' },
  { step: '04', title: 'Admission Decision', desc: 'Receive your admission letter and complete the enrollment process.' },
];

const requirements = [
  'Completed application form',
  'Birth certificate (certified copy)',
  'Previous school report cards (last 2 years)',
  'Passport-size photographs (4)',
  'Medical fitness certificate',
  'Transfer certificate from previous school',
];

const faqs = [
  { q: 'What is the admission age for Kindergarten?', a: 'Children must be at least 3 years old by September 1st of the enrollment year for KG1.' },
  { q: 'Is there a scholarship program?', a: 'Yes, De Gloria SCH offers merit-based and need-based scholarships. Contact admissions for details and eligibility criteria.' },
  { q: 'What are the school hours?', a: 'School runs from 7:30 AM to 3:00 PM for all levels. Extended care is available until 5:00 PM.' },
  { q: 'What curriculum do you follow?', a: 'We follow the Ghana Education Service curriculum enhanced with Cambridge international standards and best practices.' },
  { q: 'Do you offer boarding?', a: 'Currently we are a day school. Boarding facilities are planned for Senior High starting 2027.' },
];

const levels = [
  { label: 'Kindergarten', path: '/kindergarten', ages: 'Ages 3–5', color: '#C8A96B' },
  { label: 'Primary School', path: '/primary-school', ages: 'Ages 6–11', color: '#1E2A44' },
  { label: 'Junior High', path: '/junior-high', ages: 'Ages 12–14', color: '#C8A96B' },
  { label: 'Senior High', path: '/senior-high', ages: 'Ages 15–17', color: '#1E2A44' },
];

const inputClass = `w-full px-4 py-3 bg-white/70 border border-navy/10 text-navy placeholder:text-navy/30 text-sm font-body outline-none focus:border-gold/60 transition-colors`;

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=85" alt="Admissions"
          className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.4) saturate(0.8)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,42,68,0.97) 0%, rgba(30,42,68,0.5) 55%, transparent 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-36 w-full">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Admissions 2026/2027</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-ivory leading-[0.95]">Join the<br /><span style={{ color: '#C8A96B' }}>De Gloria</span><br />Family</h1>
            <p className="mt-6 text-ivory/50 text-lg max-w-xl font-body font-light">Our admissions process is welcoming, transparent, and straightforward for every family.</p>
          </AnimatedSection>
          {/* Level quick links */}
          <div className="mt-10 flex flex-wrap gap-3">
            {levels.map(l => (
              <Link key={l.path} to={l.path}
                className="px-5 py-2.5 text-[12px] font-heading font-semibold tracking-wide text-ivory/70 hover:text-ivory transition-colors"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                {l.label} <span className="text-gold/60 ml-1">{l.ages}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 md:px-10 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-gold" />
                <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">How to Apply</p>
                <span className="w-5 h-px bg-gold" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Admission Process</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 relative"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.4), transparent)' }} />
                <span className="font-display text-5xl font-bold text-gold opacity-20 block mb-4 leading-none">{s.step}</span>
                <h3 className="font-heading font-bold text-navy text-base mb-2">{s.title}</h3>
                <p className="text-navy/45 text-sm leading-relaxed font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Form */}
      <section className="py-20 px-6 md:px-10" style={{ background: '#DDE8E0' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <AnimatedSection variant="slideLeft">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Required Documents</p>
            </div>
            <h3 className="font-display font-bold text-navy text-2xl mb-6">Application Requirements</h3>
            <ul className="space-y-3 mb-10">
              {requirements.map(r => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-navy/55 text-sm font-body">{r}</span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-heading font-semibold text-navy hover:text-gold transition-colors"
              style={{ border: '1px solid rgba(30,42,68,0.15)', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              <Download className="w-4 h-4" /> Download Application Form
            </button>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="relative p-8 md:p-10"
              style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }} />
              <h3 className="font-display font-bold text-navy text-xl mb-1">Inquiry Form</h3>
              <p className="text-navy/40 text-sm mb-6 font-body">Have questions? Send us an inquiry and we'll respond within 24 hours.</p>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input placeholder="Parent's Name" className={inputClass} />
                  <input placeholder="Email Address" type="email" className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input placeholder="Phone Number" className={inputClass} />
                  <select className={inputClass} style={{ background: 'rgba(255,255,255,0.7)', color: 'rgba(30,42,68,0.5)' }}>
                    <option value="">School Level</option>
                    <option>Kindergarten</option>
                    <option>Primary School</option>
                    <option>Junior High</option>
                    <option>Senior High</option>
                  </select>
                </div>
                <input placeholder="Child's Name" className={inputClass} />
                <textarea placeholder="Additional Questions" rows={4} className={inputClass} style={{ resize: 'none' }} />
                <button type="submit"
                  className="flex items-center gap-2 w-full justify-center py-4 text-sm font-heading font-semibold tracking-wide text-ivory bg-navy hover:bg-navy-light transition-colors"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                  Submit Inquiry <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-10 bg-ivory">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-gold" />
                <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">FAQ</p>
                <span className="w-5 h-px bg-gold" />
              </div>
              <h2 className="font-display text-3xl font-bold text-navy">Frequently Asked Questions</h2>
            </div>
          </AnimatedSection>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(30,42,68,0.08)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-heading font-semibold text-navy text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-navy/30 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-6 pb-5">
                    <p className="text-navy/50 text-sm leading-relaxed font-body">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}