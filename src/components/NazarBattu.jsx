import React from 'react';
import { motion } from 'framer-motion';

const NazarBattu = () => {
  return (
    <motion.div
      className="fixed top-0 right-4 md:right-12 z-[100] pointer-events-none drop-shadow-xl"
      style={{ originY: 0 }}
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="80" height="280" viewBox="0 0 80 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* String hanging from top */}
        <line x1="40" y1="0" x2="40" y2="280" stroke="#111" strokeWidth="2" />
        
        {/* 7 Chillies */}
        <g transform="translate(40, 30) rotate(-5)">
          <path d="M -35,5 Q -10,15 25,0 Q -10,-5 -35,5 Z" fill="#16A34A" stroke="#15803D" strokeWidth="1" />
          <path d="M 25,0 Q 32,-5 38,-2" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(40, 50) rotate(8) scale(-1, 1)">
          <path d="M -35,5 Q -10,15 25,0 Q -10,-5 -35,5 Z" fill="#15803D" stroke="#166534" strokeWidth="1" />
          <path d="M 25,0 Q 32,-5 38,-2" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(40, 70) rotate(-2)">
          <path d="M -38,2 Q -10,18 28,2 Q -10,-8 -38,2 Z" fill="#16A34A" stroke="#15803D" strokeWidth="1" />
          <path d="M 28,2 Q 35,5 40,0" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(40, 90) rotate(5) scale(-1, 1)">
          <path d="M -32,5 Q -10,12 22,0 Q -10,-5 -32,5 Z" fill="#22C55E" stroke="#16A34A" strokeWidth="1" />
          <path d="M 22,0 Q 28,-3 35,0" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(40, 110) rotate(-8)">
          <path d="M -35,5 Q -10,15 25,0 Q -10,-5 -35,5 Z" fill="#15803D" stroke="#166534" strokeWidth="1" />
          <path d="M 25,0 Q 32,5 38,2" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(40, 130) rotate(3) scale(-1, 1)">
          <path d="M -38,2 Q -10,18 28,2 Q -10,-8 -38,2 Z" fill="#16A34A" stroke="#15803D" strokeWidth="1" />
          <path d="M 28,2 Q 35,-5 40,0" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(40, 150) rotate(-4)">
          <path d="M -35,5 Q -10,15 25,0 Q -10,-5 -35,5 Z" fill="#22C55E" stroke="#16A34A" strokeWidth="1" />
          <path d="M 25,0 Q 32,5 38,2" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Lemon (Nimbu) */}
        <circle cx="40" cy="200" r="30" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
        {/* Lemon details */}
        <path d="M 18,185 Q 25,175 35,172" fill="none" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" />
        <path d="M 60,215 Q 55,225 45,228" fill="none" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="210" r="2" fill="#CA8A04" opacity="0.6" />
        <circle cx="52" cy="188" r="3" fill="#CA8A04" opacity="0.6" />

        {/* Charcoal (Koyla) */}
        <path d="M 25,240 Q 40,230 55,240 Q 60,250 50,255 Q 30,260 22,250 Z" fill="#1F2937" stroke="#111827" strokeWidth="2" />
        <path d="M 30,245 L 45,242 L 40,252 Z" fill="#374151" />
      </svg>
    </motion.div>
  );
};

export default NazarBattu;
