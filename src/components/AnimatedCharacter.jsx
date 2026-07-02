import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCharacter = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-rose flex items-end justify-center">
      
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white opacity-20"
        animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 right-12 w-32 h-32 rounded-full bg-white opacity-20"
        animate={{ y: [10, -10, 10], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-white opacity-40"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-white opacity-40"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Main Character SVG */}
      <motion.svg 
        viewBox="0 0 200 250" 
        className="w-[85%] max-w-[320px] h-auto relative z-10"
        preserveAspectRatio="xMidYMax meet"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.g 
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Trousers (light) */}
          <path d="M70 250 L75 160 L125 160 L130 250 Z" fill="#F3F4F6" />
          
          {/* Shirt (dark) */}
          <path d="M50 160 Q60 80 100 80 Q140 80 150 160 Z" fill="#1F2937" />
          <path d="M100 80 L100 160" stroke="#111827" strokeWidth="2" /> {/* Shirt line */}
          
          {/* Arms */}
          <path d="M55 90 Q35 130 45 170" fill="none" stroke="#1F2937" strokeWidth="18" strokeLinecap="round" />
          <path d="M145 90 Q165 130 155 170" fill="none" stroke="#1F2937" strokeWidth="18" strokeLinecap="round" />
          
          {/* Hands */}
          <circle cx="45" cy="170" r="9" fill="#F5D5B8" />
          <circle cx="155" cy="170" r="9" fill="#F5D5B8" />
          
          {/* Neck */}
          <rect x="90" y="65" width="20" height="25" fill="#E3BA9B" />
          <path d="M90 80 Q100 90 110 80" fill="none" stroke="#1F2937" strokeWidth="4" />
          
          <motion.g
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "100px", originY: "80px" }}
          >
            {/* Head */}
            <rect x="75" y="30" width="50" height="50" rx="16" fill="#F5D5B8" />
            
            {/* Beard / Goatee hint */}
            <path d="M95 72 Q100 78 105 72" fill="none" stroke="#2C2A24" strokeWidth="2" strokeLinecap="round" />
            <path d="M90 65 Q100 68 110 65" fill="none" stroke="#2C2A24" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Smile */}
            <path d="M92 60 Q100 66 108 60" fill="none" stroke="#2C2A24" strokeWidth="2" strokeLinecap="round" />
            
            {/* Sunglasses */}
            <rect x="78" y="44" width="44" height="12" rx="4" fill="#2C2A24" />
            <path d="M75 48 L125 48" stroke="#2C2A24" strokeWidth="2" />
            
            {/* Sunglasses Glint */}
            <motion.path 
              d="M82 46 L90 54 M104 46 L112 54" 
              stroke="white" 
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
            />
            
            {/* Straw Hat */}
            <ellipse cx="100" cy="30" rx="45" ry="12" fill="#E6C280" />
            <path d="M80 30 Q100 0 120 30 Z" fill="#D4A017" />
            {/* Hat Band */}
            <path d="M82 28 Q100 34 118 28" fill="none" stroke="#2C2A24" strokeWidth="4" />
          </motion.g>
        </motion.g>
      </motion.svg>
      
      {/* Floating Data Nodes (Analytics Vibe) */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-ink opacity-30" />
        <div className="absolute bottom-[30%] right-[15%] w-3 h-3 rounded-full bg-white opacity-60" />
        <div className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-ink opacity-40" />
        <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-white opacity-80" />
      </motion.div>
    </div>
  );
};

export default AnimatedCharacter;
