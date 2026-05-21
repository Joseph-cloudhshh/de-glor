import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';

const leadership = [
  { name: 'Prof. Jonathan R. Hartley', role: 'Principal', dept: 'Administration', quals: 'Ph.D. Education Leadership, M.Ed., B.Ed.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80' },
  { name: 'Dr. Catherine M. Lawson', role: 'Vice Principal (Academics)', dept: 'Administration', quals: 'M.Ed. Curriculum Design, B.Sc. Mathematics', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80' },
  { name: 'Mr. Daniel E. Whitfield', role: 'Vice Principal (Admin)', dept: 'Administration', quals: 'MBA, B.Ed. Social Studies', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80' },
];

const staff = [
  { name: 'Dr. Akua Boateng', role: 'Head of Science', dept: 'Science', quals: 'Ph.D. Chemistry', color: '#C8A96B' },
  { name: 'Mr. Kofi Asante', role: 'Head of Mathematics', dept: 'Mathematics', quals: 'M.Sc. Mathematics', color: '#1E2A44' },
  { name: 'Mrs. Esi Darkwah', role: 'Head of English', dept: 'Languages', quals: 'M.A. English Literature', color: '#C8A96B' },
  { name: 'Mr. Yaw Mensah', role: 'Head of ICT', dept: 'Technology', quals: 'M.Sc. Computer Science', color: '#1E2A44' },
  { name: 'Mrs. Abena Ofori', role: 'KG Coordinator', dept: 'Early Years', quals: 'M.Ed. Early Childhood', color: '#C8A96B' },
  { name: 'Mr. Kwesi Appiah', role: 'Sports Director', dept: 'PE', quals: 'B.Ed. Sports Science', color: '#1E2A44' },
  { name: 'Mrs. Adwoa Frimpong', role: 'Head of Arts', dept: 'Creative Arts', quals: 'M.F.A. Visual Arts', color: '#C8A96B' },
  { name: 'Dr. Nana Agyemang', role: 'Guidance Counselor', dept: 'Student Affairs', quals: 'Ph.D. Psychology', color: '#1E2A44' },
];

function LeaderCard({ person, index }) {
  const initials = person.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -4 }}
      className="group relative overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(30,42,68,0.09)', clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.5), transparent)' }} />
      {person.image ? (
        <div className="h-56 overflow-hidden">
          <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ filter: 'saturate(0.8)' }} />
          <div className="absolute inset-0 h-56" style={{ background: 'linear-gradient(to top, rgba(30,42,68,0.85) 0%, transparent 55%)' }} />
        </div>
      ) : (
        <div className="h-56 flex items-center justify-center" style={{ background: 'rgba(200,169,107,0.06)' }}>
          <span className="font-display text-5xl font-bold text-gold opacity-25">{initials}</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display font-bold text-ivory text-base">{person.name}</h3>
        <p className="text-gold text-xs font-heading mt-0.5">{person.role}</p>
        <p className="text-ivory/40 text-xs mt-1 font-body">{person.quals}</p>
      </div>
    </motion.div>
  );
}

function StaffCard({ person, index }) {
  const initials = person.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const isGold = person.color === '#C8A96B';
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ y: -3 }}
      className="p-5 relative overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(30,42,68,0.08)', clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
      <div className="w-12 h-12 flex items-center justify-center mb-4 font-heading font-bold text-sm"
        style={{
          background: isGold ? 'rgba(200,169,107,0.1)' : 'rgba(30,42,68,0.08)',
          border: `1px solid ${isGold ? 'rgba(200,169,107,0.25)' : 'rgba(30,42,68,0.15)'}`,
          color: person.color,
          clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px))'
        }}>
        {initials}
      </div>
      <h3 className="font-heading font-bold text-navy text-sm">{person.name}</h3>
      <p className="text-xs mt-0.5 font-heading" style={{ color: person.color }}>{person.role}</p>
      <p className="text-navy/35 text-xs mt-1 font-body">{person.dept}</p>
      <p className="text-navy/25 text-xs mt-0.5 font-body">{person.quals}</p>
    </motion.div>
  );
}

export default function Staff() {
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
              <p className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-gold">Our Team</p>
              <span className="w-5 h-px bg-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy">Meet Our Staff</h1>
            <p className="mt-5 text-navy/45 text-lg max-w-xl mx-auto font-body font-light">Dedicated educators committed to nurturing excellence and shaping futures.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pt-12 pb-16 md:pb-24 px-6 md:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h3 className="font-heading font-semibold text-navy/50 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-gold" /> School Leadership
            </h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {leadership.map((p, i) => <LeaderCard key={p.name} person={p} index={i} />)}
          </div>

          <AnimatedSection>
            <h3 className="font-heading font-semibold text-navy/50 text-[10px] uppercase tracking-[0.3em] mb-6">Department Heads & Faculty</h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {staff.map((p, i) => <StaffCard key={p.name} person={p} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}