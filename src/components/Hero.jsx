import React from 'react';
import { motion } from 'framer-motion';
import IllustrationCarousel from './IllustrationCarousel';

const Hero = () => {
  const titleWords = ["I", "turn", "raw", "numbers", "into"];
  const wordAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="hero"
      className="hero-section w-full min-h-screen bg-cream flex flex-col lg:flex-row items-center pt-[56px] lg:pt-[64px] overflow-hidden relative"
    >

      {/* ════════════════════════════════
          MOBILE LAYOUT (below md)
          One unified hero card — illustration top, content bottom
      ════════════════════════════════ */}
      <div className="block md:hidden w-full px-[12px] pt-[12px] pb-[24px]">
        <motion.div
          className="w-full rounded-[24px] overflow-hidden"
          style={{ background: '#FAF8F4' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* ── ILLUSTRATION AREA (top of card) ── */}
          <div
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{ height: 'auto', padding: '16px 12px 0 12px' }}
          >
            <IllustrationCarousel />
          </div>

          {/* ── TEXT CONTENT AREA (inside the same card, below illustration) ── */}
          <div style={{ background: '#FAF8F4', padding: '20px 18px 22px' }}>

            {/* Availability pill */}
            <motion.div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#C8E6D8', borderRadius: 999,
                padding: '5px 12px', marginBottom: 12
              }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#2C2A24', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              style={{
                fontFamily: 'Clash Display, sans-serif',
                fontWeight: 700, color: '#2C2A24',
                fontSize: 'clamp(28px, 7vw, 36px)',
                lineHeight: 1.08, letterSpacing: '-0.5px',
                marginBottom: 10
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I turn raw numbers into{' '}
              <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
                <span style={{ position: 'relative', zIndex: 1 }}>actionable clarity</span>
                <svg
                  style={{ position: 'absolute', width: '100%', height: 14, bottom: -4, left: 0, zIndex: 0 }}
                  viewBox="0 0 100 20" preserveAspectRatio="none"
                >
                  <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                    fill="none" stroke="#F9C8D4" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 13, color: '#6B6A65',
                lineHeight: 1.6, marginBottom: 18
              }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
            >
              Experienced analyst using SQL, Python, and dashboards to make business problems visible and decisions faster.
            </motion.p>

            {/* Buttons — side by side */}
            <motion.div
              style={{ display: 'flex', gap: 8, marginBottom: 14 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            >
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  flex: 1, background: '#2C2A24', color: '#FAF8F4',
                  borderRadius: 999, padding: '12px 10px',
                  fontSize: 12, fontWeight: 600, border: 'none', cursor: 'pointer',
                  fontFamily: 'Plus Jakarta Sans, sans-serif', textAlign: 'center'
                }}
              >
                See my work →
              </button>
              <button
                style={{
                  flex: 1, background: 'transparent',
                  border: '1.5px solid #2C2A24', color: '#2C2A24',
                  borderRadius: 999, padding: '11px 10px',
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'Plus Jakarta Sans, sans-serif', textAlign: 'center'
                }}
              >
                Download CV
              </button>
            </motion.div>

            {/* Mini stats row */}
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 14 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            >
              {[{ n: '4+', l: 'Years' }, { n: '12+', l: 'Projects' }, { n: '8', l: 'Awards' }].map(s => (
                <div key={s.l} style={{
                  background: 'white', border: '1px solid #E8E6E0',
                  borderRadius: 10, padding: '10px 6px', textAlign: 'center'
                }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#2C2A24', lineHeight: 1, fontFamily: 'Clash Display, sans-serif' }}>{s.n}</div>
                  <div style={{ fontSize: 9, color: '#9B9A95', fontWeight: 500, marginTop: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.l}</div>
                </div>
              ))}
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 5 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="#9B9A95" strokeWidth="2" strokeLinecap="round">
                <path d="M19 9l-7 7-7-7" />
              </svg>
              <span style={{ fontSize: 10, color: '#9B9A95', fontWeight: 500, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Scroll to explore
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* ════════════════════════════════
          DESKTOP LAYOUT (md and above)
          Keep EXACTLY as it currently is
      ════════════════════════════════ */}
      <div className="hidden md:flex max-w-[1280px] mx-auto w-full px-section-x flex-col lg:flex-row items-center gap-[24px] lg:gap-[80px]">

        {/* LEFT — Text (desktop) */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start pt-[28px] lg:pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="bg-sage rounded-pill px-[14px] py-[6px] inline-flex items-center gap-2 mb-[28px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }}
          >
            <span className="w-2 h-2 bg-[#22c55e] rounded-full inline-block" />
            <span className="font-body text-[13px] text-ink font-medium">Available for work</span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-ink leading-[1.08] mb-[24px] flex flex-wrap gap-x-[12px] gap-y-[4px]"
            style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {titleWords.map((word, idx) => (
              <motion.span key={idx} variants={wordAnimation} className="inline-block">{word}</motion.span>
            ))}
            <motion.span variants={wordAnimation} className="inline-block relative whitespace-nowrap">
                <span className="relative z-10">actionable clarity</span>
                <svg className="absolute w-full h-[14px] -bottom-[4px] left-0 -z-10 text-rose"
                  viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                    fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </motion.span>
            </motion.h1>

          <motion.p
            className="font-body text-muted leading-[1.6] mb-[40px]"
            style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          >
            Experienced analyst using SQL, Python, and dashboards to make business problems visible and decisions faster.
          </motion.p>

          <motion.div
            className="flex flex-row gap-[12px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-ink text-white rounded-pill font-body font-semibold hover:scale-[1.03] transition-transform"
              style={{ padding: '14px 32px', fontSize: 15 }}
            >
              See my work →
            </button>
            <button
              className="bg-transparent border-[1.5px] border-ink text-ink rounded-pill font-body font-semibold hover:bg-ink hover:text-white transition-colors"
              style={{ padding: '14px 32px', fontSize: 15 }}
            >
              Download CV
            </button>
          </motion.div>

          <motion.div
            className="mt-[48px] flex flex-row items-center gap-[6px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          >
            <svg className="w-4 h-4 text-hint animate-bounce" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round">
              <path d="M19 9l-7 7-7-7" />
            </svg>
            <span className="font-body text-[11px] text-hint font-medium">Scroll to explore</span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Illustration (desktop) */}
        <motion.div
          className="hidden md:flex w-full lg:w-[45%] relative justify-center items-center mt-2 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <IllustrationCarousel />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
