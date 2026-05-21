import React from 'react';

export default function WaveDivider({ flip = false, color = 'fill-background' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className={`w-full h-12 md:h-20 ${color}`}>
        <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,30 1440,40 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}