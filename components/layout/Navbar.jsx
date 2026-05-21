import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Academics', path: '/academics',
    children: [
      { label: 'Kindergarten', path: '/kindergarten' },
      { label: 'Primary School', path: '/primary-school' },
      { label: 'Junior High', path: '/junior-high' },
      { label: 'Senior High', path: '/senior-high' },
    ]
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News', path: '/news' },
  { label: 'Calendar', path: '/academic-calendar' },
  { label: 'Staff', path: '/staff' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Contact', path: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 shrink-0">
        {/* Shield-style school crest */}
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#243156"/>
              <stop offset="100%" stopColor="#1E2A44"/>
            </linearGradient>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E8C97B"/>
              <stop offset="100%" stopColor="#C8A96B"/>
            </linearGradient>
          </defs>
          {/* Shield shape */}
          <path d="M20 2 L36 8 L36 22 C36 30 28 36 20 38 C12 36 4 30 4 22 L4 8 Z" fill="url(#shieldGrad)"/>
          {/* Top gold stripe */}
          <path d="M4 8 L36 8 L36 12 L4 12 Z" fill="url(#goldGrad)" opacity="0.4"/>
          {/* Letter D stylized */}
          <text x="11" y="28" fontFamily="serif" fontSize="16" fontWeight="bold" fill="url(#goldGrad)" letterSpacing="-1">DG</text>
          {/* Bottom accent line */}
          <path d="M12 32 L28 32" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      </div>
      <div>
        <span className="font-display font-bold text-[15px] tracking-tight text-navy block leading-none">DE GLORIA</span>
        <span className="font-heading text-[9px] tracking-[0.25em] text-gold block leading-none mt-0.5 uppercase">School of Excellence</span>
      </div>
    </Link>
  );
}

function NavItem({ link, scrolled }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === link.path || (link.children && link.children.some(c => c.path.startsWith(link.path)));

  if (!link.children) {
    return (
      <Link
        to={link.path}
        className={`relative px-3 py-2 text-[13px] font-heading font-medium tracking-wide transition-colors duration-200 ${
          isActive ? 'text-navy' : 'text-navy/50 hover:text-navy/90'
        }`}
      >
        {link.label}
        {isActive && (
          <motion.div layoutId="nav-pill" className="absolute inset-0 rounded bg-navy/6 -z-10" />
        )}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`flex items-center gap-1 px-3 py-2 text-[13px] font-heading font-medium tracking-wide transition-colors ${isActive ? 'text-navy' : 'text-navy/50 hover:text-navy/90'}`}>
        {link.label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-2 w-52 z-50 overflow-hidden"
            style={{
              background: 'rgba(246,243,238,0.97)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(30,42,68,0.1)',
              boxShadow: '0 24px 60px rgba(30,42,68,0.12)',
            }}
          >
            {link.children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className="flex items-center justify-between px-4 py-3 text-[13px] text-navy/60 hover:text-navy hover:bg-navy/5 transition-all group border-b border-navy/6 last:border-0"
              >
                <span>{child.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      >
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-500 ${scrolled ? 'h-12' : 'h-14'}`}
          style={{
            background: scrolled ? 'rgba(246,243,238,0.95)' : 'rgba(246,243,238,0.75)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(30,42,68,0.08)',
            boxShadow: scrolled ? '0 8px 40px rgba(30,42,68,0.1), inset 0 1px 0 rgba(255,255,255,0.8)' : 'inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          <Logo />

          <div className="hidden xl:flex items-center">
            {navLinks.map(link => <NavItem key={link.path} link={link} scrolled={scrolled} />)}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/admissions"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-heading font-semibold tracking-wide text-ivory bg-navy hover:bg-navy-light transition-colors duration-200"
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              Apply Now <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 text-navy/60 hover:text-navy transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {scrolled && <ScrollProgress />}
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div className="max-w-7xl mx-auto mt-0 px-4 md:px-6">
      <div className="h-px bg-navy/8 overflow-hidden">
        <motion.div className="h-full bg-gold" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function MobileMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100]"
      style={{ background: 'rgba(246,243,238,0.98)', backdropFilter: 'blur(40px)' }}
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-navy/8">
        <Logo />
        <button onClick={onClose} className="p-2 text-navy/50 hover:text-navy transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="px-6 py-6 overflow-y-auto h-[calc(100vh-80px)]">
        <div className="space-y-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <Link
                to={link.path}
                onClick={onClose}
                className="flex items-center justify-between py-3.5 px-2 text-navy/70 hover:text-navy font-heading font-medium text-[15px] border-b border-navy/8 transition-colors group"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
              </Link>
              {link.children && (
                <div className="pl-4 border-l border-navy/10 ml-2 mb-2 mt-1 space-y-0">
                  {link.children.map(child => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={onClose}
                      className="block py-2 text-navy/40 hover:text-navy/80 text-[13px] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to="/admissions"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-4 text-ivory bg-navy font-heading font-semibold text-sm tracking-wide hover:bg-navy-light transition-colors"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
          >
            Apply Now <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
}