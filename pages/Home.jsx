import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ValuesSection from '../components/home/ValuesSection';
import ProgramsSection from '../components/home/ProgramsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsPreview from '../components/home/NewsPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="bg-ivory">
      <HeroSection />
      <ValuesSection />
      <ProgramsSection />
      <TestimonialsSection />
      <NewsPreview />
      <CTASection />
    </div>
  );
}