import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioAd = ({ type = 'banner' }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  if (type === 'popup') {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', delay: 2 }}
            className="fixed bottom-6 right-6 w-64 bg-white border-2 border-rose rounded-xl shadow-2xl p-4 z-50 overflow-hidden"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-ink/50 hover:text-ink font-bold text-sm"
            >
              ✕
            </button>
            <div className="text-[10px] uppercase font-bold tracking-wider text-rose mb-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              Sponsored
            </div>
            <h4 className="font-display font-bold text-ink text-lg leading-tight mb-2">
              Tired of bad UX?
            </h4>
            <p className="text-sm text-ink/70 mb-4 leading-snug">
              Call Aman today! 1-800-GOOD-CODE. We fix bugs faster than you can say "undefined".
            </p>
            <a 
              href="#contact"
              onClick={() => setIsVisible(false)}
              className="block w-full py-2 bg-ink text-cream text-center text-sm font-bold rounded-md hover:bg-rose transition-colors"
            >
              Hire Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Default: banner type
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4">
      <div className="relative bg-cream border-2 border-dashed border-ink/20 rounded-2xl p-1 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02)_100%)] bg-[length:20px_20px]">
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          {/* Ad Label */}
          <div className="absolute top-0 left-0 bg-ink text-cream text-[10px] uppercase font-bold px-2 py-1 tracking-wider rounded-br-lg z-10">
            Advertisement
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">
              🔥 Boost your conversion rates!
            </h3>
            <p className="text-ink/70 font-body text-lg">
              With this one weird trick... (Spoiler: It's my UI/UX Design). Don't let your users suffer.
            </p>
          </div>
          
          <div className="z-10 shrink-0">
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-rose text-ink font-bold font-display rounded-full text-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Click to Discover
            </a>
          </div>

          {/* Decorative elements behind */}
          <motion.div 
            className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full border-4 border-sage/30"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioAd;
