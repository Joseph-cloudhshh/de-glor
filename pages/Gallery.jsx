import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';

const IMAGES_BY_CAT = {
  Campus: [
    { src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80', caption: 'Main Campus Building' },
    { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80', caption: 'School Courtyard' },
    { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80', caption: 'Library Building' },
    { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', caption: 'Campus Grounds' },
  ],
  Classroom: [
    { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80', caption: 'Kindergarten Class' },
    { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80', caption: 'Primary Learning' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', caption: 'JHS Classroom' },
    { src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80', caption: 'Science Lab' },
    { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', caption: 'ICT Lab' },
  ],
  Events: [
    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', caption: 'Graduation Day' },
    { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80', caption: 'Annual Ceremony' },
    { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80', caption: 'Leadership Seminar' },
    { src: 'https://images.unsplash.com/photo-1524650359799-842906ca1c06?w=800&q=80', caption: 'Cultural Day' },
    { src: 'https://images.unsplash.com/photo-1561489396-888724a1543d?w=800&q=80', caption: 'Award Ceremony' },
  ],
  Sports: [
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', caption: 'Athletics Track' },
    { src: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80', caption: 'Football Match' },
    { src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', caption: 'Basketball Court' },
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', caption: 'Sports Day' },
  ],
};

const ALL_IMAGES = Object.entries(IMAGES_BY_CAT).flatMap(([cat, imgs]) => imgs.map(img => ({ ...img, cat })));
const categories = ['All', 'Campus', 'Classroom', 'Events', 'Sports'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const images = active === 'All' ? ALL_IMAGES : IMAGES_BY_CAT[active] || [];

  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=85" alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.4) saturate(0.8)' }}
          loading="eager" fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,42,68,0.95) 0%, rgba(30,42,68,0.3) 60%, transparent 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-36 w-full text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-gold" />
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Gallery</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-ivory">Life at De Gloria</h1>
            <p className="mt-5 text-ivory/50 text-lg max-w-xl mx-auto font-body font-light">A visual journey through the vibrant experiences that define our community.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 px-6 md:px-10 sticky top-16 z-20 backdrop-blur-md" style={{ background: 'rgba(246,243,238,0.92)', borderBottom: '1px solid rgba(30,42,68,0.07)' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="px-5 py-2 text-[12px] font-heading font-semibold tracking-wide transition-all duration-200"
              style={{
                background: active === cat ? '#1E2A44' : 'rgba(30,42,68,0.06)',
                color: active === cat ? '#F6F3EE' : 'rgba(30,42,68,0.5)',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence>
              {images.map((img, i) => (
                <motion.div
                  key={img.src + img.cat}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="relative group cursor-pointer overflow-hidden aspect-square"
                  onClick={() => setLightbox(img)}
                >
                  <img src={img.src} alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ filter: 'saturate(0.85)' }}
                    loading="lazy" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(30,42,68,0.85), transparent)' }}>
                    <p className="text-ivory text-xs font-heading font-medium">{img.caption}</p>
                    <p className="text-gold/70 text-[10px] font-heading mt-0.5">{img.cat}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(10,15,28,0.95)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.caption}
                className="w-full max-h-[80vh] object-contain"
                style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                <p className="text-ivory font-heading font-semibold">{lightbox.caption}</p>
                <p className="text-gold/70 text-sm font-heading mt-0.5">{lightbox.cat}</p>
              </div>
              <button onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 p-2 text-ivory/60 hover:text-ivory transition-colors"
                style={{ background: 'rgba(0,0,0,0.5)' }}>
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
