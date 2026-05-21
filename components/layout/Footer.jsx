import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News & Media', path: '/news' },
  { label: 'Announcements', path: '/announcements' },
];

const schoolLinks = [
  { label: 'Kindergarten', path: '/kindergarten' },
  { label: 'Primary School', path: '/primary-school' },
  { label: 'Junior High', path: '/junior-high' },
  { label: 'Senior High', path: '/senior-high' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Our Staff', path: '/staff' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="relative w-10 h-10 shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <defs>
            <linearGradient id="shieldGradF" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#2e3f63"/>
              <stop offset="100%" stopColor="#1E2A44"/>
            </linearGradient>
            <linearGradient id="goldGradF" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E8C97B"/>
              <stop offset="100%" stopColor="#C8A96B"/>
            </linearGradient>
          </defs>
          <path d="M20 2 L36 8 L36 22 C36 30 28 36 20 38 C12 36 4 30 4 22 L4 8 Z" fill="url(#shieldGradF)"/>
          <path d="M4 8 L36 8 L36 12 L4 12 Z" fill="url(#goldGradF)" opacity="0.5"/>
          <text x="11" y="28" fontFamily="serif" fontSize="16" fontWeight="bold" fill="url(#goldGradF)" letterSpacing="-1">DG</text>
          <path d="M12 32 L28 32" stroke="url(#goldGradF)" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      </div>
      <div>
        <span className="font-display font-bold text-[15px] tracking-tight text-ivory block leading-none">DE GLORIA</span>
        <span className="font-heading text-[9px] tracking-[0.25em] text-gold block leading-none mt-0.5 uppercase">School of Excellence</span>
      </div>
    </Link>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative overflow-hidden" style={{ background: '#1E2A44', borderTop: '1px solid rgba(200,169,107,0.15)' }}>
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.6), transparent)' }} />
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] blur-[120px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(ellipse, #C8A96B 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Logo />
            <p className="text-ivory/40 text-sm leading-relaxed font-body">
              Raising Tomorrow's Leaders through excellence in education, character development, and innovation since 2005.
            </p>
            <div className="flex gap-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center text-ivory/30 hover:text-gold transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)', clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X"
                className="w-8 h-8 flex items-center justify-center text-ivory/30 hover:text-gold transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)', clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center text-ivory/30 hover:text-gold transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)', clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube"
                className="w-8 h-8 flex items-center justify-center text-ivory/30 hover:text-gold transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)', clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold text-[11px] uppercase tracking-[0.25em] mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="flex items-center gap-1.5 text-ivory/40 hover:text-ivory text-sm transition-colors group font-body">
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* School Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold text-[11px] uppercase tracking-[0.25em] mb-5">Schools</h4>
            <ul className="space-y-2.5">
              {schoolLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="flex items-center gap-1.5 text-ivory/40 hover:text-ivory text-sm transition-colors group font-body">
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold text-[11px] uppercase tracking-[0.25em] mb-5">Stay Connected</h4>
            <p className="text-ivory/40 text-sm mb-4 font-body">Get the latest news and updates in your inbox.</p>
            <div className="flex gap-0 mb-6">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-3 py-2.5 text-sm bg-white/5 border border-white/10 border-r-0 text-ivory placeholder:text-ivory/25 outline-none focus:border-gold/50 transition-colors font-body"
              />
              <button className="px-3 py-2.5 bg-gold hover:bg-gold-light transition-colors shrink-0">
                <Send className="w-4 h-4 text-navy" />
              </button>
            </div>
            <div className="space-y-2.5">
              {[
                { icon: MapPin, text: '123 Education Ave, Accra, Ghana' },
                { icon: Phone, text: '+233 (0) 302 123 456' },
                { icon: Mail, text: 'info@degloriasch.edu' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-ivory/40 text-sm font-body">
                  <Icon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-ivory/25 text-[12px] font-body">
            © {new Date().getFullYear()} De Gloria School of Excellence. All rights reserved.
          </p>
          <div className="flex gap-6 text-ivory/25 text-[12px] font-body">
            <Link to="/contact" className="hover:text-ivory transition-colors">Contact</Link>
            <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}