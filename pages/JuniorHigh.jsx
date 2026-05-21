import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';

const subjects = ['English', 'Mathematics', 'Integrated Science', 'Social Studies', 'ICT', 'French', 'Technical Skills', 'RME'];
const features = ['BECE preparation programs', 'Career guidance counseling', 'Advanced science labs', 'Leadership & mentorship programs'];

const gallery = [
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
  'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=600&q=80',
];

export default function JuniorHigh() {
  return (
    <div className="bg-ivory">
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80" alt="Junior High"
          className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.45) saturate(0.85)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,42,68,0.95) 0%, rgba(30,42,68,0.4) 60%, transparent 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-36 w-full">
          <Link to="/academics" className="inline-flex items-center gap-2 text-ivory/50 hover:text-ivory text-sm font-heading mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Academics
          </Link>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-gold" />
            <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Ages 12–14 · Competency-Based Education</p>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ivory leading-tight">Junior High School</h1>
          <p className="mt-4 text-ivory/55 text-lg max-w-xl font-body font-light">Expanding horizons, building character, and preparing leaders.</p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-navy mb-5">Our Approach</h2>
            <p className="text-navy/55 leading-relaxed font-body mb-8 text-base">Junior High expands academic horizons with rigorous coursework, leadership development, and enrichment programs preparing every student for senior-level success. Our competency-based model ensures students master skills and concepts before moving forward, building true understanding and confidence.</p>
            <div className="mb-8">
              <h4 className="font-heading font-semibold text-navy/50 text-[10px] uppercase tracking-[0.3em] mb-4">Key Subjects</h4>
              <div className="flex flex-wrap gap-2">
                {subjects.map(s => (
                  <span key={s} className="px-3 py-1.5 text-xs font-heading text-navy/60"
                    style={{ background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.25)' }}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-navy/50 text-[10px] uppercase tracking-[0.3em] mb-4">Program Highlights</h4>
              <ul className="space-y-3">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-navy/55 font-body">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="slideRight">
            <div className="grid grid-cols-2 gap-3">
              {gallery.map((src, i) => (
                <img key={i} src={src} alt="Junior High life"
                  className="w-full aspect-square object-cover"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', filter: 'saturate(0.9)' }} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10" style={{ background: '#DDE8E0' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl font-bold text-navy mb-4">Ready to Enrol?</h3>
          <p className="text-navy/50 mb-8 font-body">Applications for the 2026/2027 academic year are now open for Junior High School.</p>
          <Link to="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-heading font-semibold tracking-wide text-ivory bg-navy hover:bg-navy-light transition-colors"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
            Apply for Junior High
          </Link>
        </div>
      </section>
    </div>
  );
}