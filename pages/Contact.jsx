import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight, ChevronDown } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import GlassCard from '../components/shared/GlassCard';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Education Avenue, East Legon, Accra, Ghana' },
  { icon: Phone, label: 'Phone', value: '+233 (0) 302 123 456' },
  { icon: Mail, label: 'Email', value: 'info@degloriasch.edu' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 7:00 AM – 5:00 PM' },
];

const faqs = [
  { q: 'How do I schedule a campus visit?', a: 'Contact our admissions office via phone or email. Tours are available every Friday between 9:00 AM and 12:00 PM.' },
  { q: 'What is the school bus service coverage?', a: 'Our bus service covers East Legon, Airport Residential, Cantonments, Osu, Labone, and Spintex.' },
  { q: 'How can I track my child\'s progress?', a: 'Parents receive termly report cards and can schedule meetings with class teachers via the parent portal.' },
];

const inputClass = `w-full px-4 py-3 bg-white/70 border border-navy/10 text-navy placeholder:text-navy/30 text-sm font-body outline-none focus:border-gold/60 transition-colors`;

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-ivory">
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: '#DDE8E0' }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(30,42,68,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,68,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Contact Us</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy">Get In Touch</h1>
            <p className="mt-5 text-navy/45 text-lg max-w-xl mx-auto font-body font-light">We'd love to hear from you. Reach out for any questions, inquiries, or to schedule a visit.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <GlassCard key={info.label} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.2)', clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}>
                    <info.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm">{info.label}</p>
                    <p className="text-navy/45 text-sm mt-0.5 font-body">{info.value}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
            <a href="https://wa.me/2330302123456" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 text-sm font-heading font-semibold text-navy w-fit"
              style={{ background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.25)', clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
              <MessageCircle className="w-4 h-4 text-green-600" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <AnimatedSection variant="slideRight">
              <div className="relative p-8 md:p-10"
                style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }} />
                <h3 className="font-display font-bold text-navy text-2xl mb-1">Send Us a Message</h3>
                <p className="text-navy/40 text-sm mb-8 font-body">We respond within 24 hours.</p>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input placeholder="Full Name" className={inputClass} />
                    <input placeholder="Email Address" type="email" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input placeholder="Phone Number" className={inputClass} />
                    <select className={inputClass} style={{ background: 'rgba(255,255,255,0.7)', color: 'rgba(30,42,68,0.5)' }}>
                      <option value="">Subject</option>
                      <option>Admissions</option>
                      <option>General Inquiry</option>
                      <option>Campus Tour</option>
                      <option>Tuition & Fees</option>
                    </select>
                  </div>
                  <textarea placeholder="Your Message" rows={5} className={inputClass} style={{ resize: 'none' }} />
                  <button type="submit"
                    className="flex items-center gap-2 w-full justify-center py-4 text-sm font-heading font-semibold tracking-wide text-ivory bg-navy hover:bg-navy-light transition-colors"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                    Send Message <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-10" style={{ background: '#DDE8E0' }}>
        <div className="max-w-3xl mx-auto pt-20">
          <SectionHeading label="Quick Answers" title="Common Questions" />
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(30,42,68,0.08)' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-heading font-semibold text-navy text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-navy/30 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-6 pb-5">
                    <p className="text-navy/45 text-sm leading-relaxed font-body">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}