import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navAvatar from '../assets/nav/active-man-with-party-horn-avatar.gif';

const navLinks = [
  { label: 'Work', section: 'work' },
  { label: 'About', section: 'about' },
  { label: 'Process', section: 'process' },
  { label: 'Experience', section: 'experience' },
  { label: 'Certificates', section: 'certificates' },
];

const sectionToNav = {
  hero: null,
  about: 'About',
  work: 'Work',
  process: 'Process',
  experience: 'Experience',
  certificates: 'Certificates',
  contact: 'Certificates',
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  // Active pill geometry
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const prevScrollY = useRef(0);
  const linksRef = useRef([]);
  const navLinksRef = useRef(null);

  // Track mobile breakpoint
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close drawer on desktop resize
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // ── Scroll hide/show + compact mode ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);

      if (y < 100) {
        setHidden(false);
      } else if (y - prevScrollY.current > 10) {
        setHidden(true);
      } else if (prevScrollY.current - y > 5) {
        setHidden(false);
      }
      prevScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Intersection Observer ────────────────────────────────────────────────
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'work', 'process', 'experience', 'certificates', 'contact'];
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(sectionToNav[id] ?? null); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  // ── Active pill position ─────────────────────────────────────────────────
  const updatePill = useCallback(() => {
    const idx = navLinks.findIndex(l => l.label === activeSection);
    if (idx === -1 || !linksRef.current[idx] || !navLinksRef.current) {
      setPillStyle(s => ({ ...s, opacity: 0 }));
      return;
    }
    const link = linksRef.current[idx];
    const parent = navLinksRef.current;
    const parentRect = parent.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setPillStyle({
      left: linkRect.left - parentRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, [activeSection]);

  useEffect(() => { updatePill(); }, [updatePill]);

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // ── MOBILE TOP BAR ───────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        {/* Mobile fixed top bar */}
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, height: '56px',
            background: 'rgba(250,248,244,0.95)', backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid #E8E6E0',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', padding: '0 20px',
            zIndex: 50,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', minHeight: 'auto' }}
          >
            <span style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, fontSize: '17px', color: '#2C2A24' }}>
              Ac<span style={{ color: '#F9C8D4' }}>.</span>
            </span>
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: '1px solid #E8E6E0',
              background: menuOpen ? '#2C2A24' : 'transparent',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: '3.5px', cursor: 'pointer',
              transition: 'background 0.3s ease', minHeight: 'auto', padding: 0,
            }}
          >
            <span style={{
              display: 'block', width: '14px', height: '1.5px', borderRadius: '2px',
              background: menuOpen ? '#FAF8F4' : '#2C2A24',
              transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
              transition: 'all 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '14px', height: '1.5px', borderRadius: '2px',
              background: menuOpen ? '#FAF8F4' : '#2C2A24',
              opacity: menuOpen ? 0 : 1,
              transition: 'all 0.3s ease',
            }} />
            <span style={{
              display: 'block', width: '14px', height: '1.5px', borderRadius: '2px',
              background: menuOpen ? '#FAF8F4' : '#2C2A24',
              transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
              transition: 'all 0.3s ease',
            }} />
          </button>
        </div>

        {/* Full-screen slide-in drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed', top: '56px', left: 0, right: 0, bottom: 0,
                background: 'rgba(250,248,244,0.98)', backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: 49, display: 'flex', flexDirection: 'column',
                padding: '32px 24px',
              }}
            >
              {/* Nav links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {navLinks.map(link => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.section)}
                    style={{
                      fontFamily: 'Clash Display, sans-serif', fontWeight: 700, fontSize: '32px',
                      color: '#2C2A24', padding: '12px 0',
                      borderBottom: '1px solid #E8E6E0', borderTop: 'none',
                      borderLeft: 'none', borderRight: 'none',
                      background: 'transparent', textAlign: 'left', cursor: 'pointer',
                      transition: 'color 0.2s', minHeight: 'auto',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#9B9A95'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#2C2A24'; }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Hire me button */}
              <button
                onClick={() => { scrollTo('contact'); }}
                style={{
                  marginTop: '32px', width: '100%', background: '#2C2A24', color: '#FAF8F4',
                  borderRadius: '999px', padding: '16px',
                  fontFamily: 'Clash Display, sans-serif', fontWeight: 700, fontSize: '18px',
                  textAlign: 'center', border: 'none', cursor: 'pointer', minHeight: 'auto',
                }}
              >
                Hire me
              </button>

              {/* Social icons */}
              <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', justifyContent: 'flex-start' }}>
                {[
                  { href: 'https://github.com/AmanCH3', icon: (
                    <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 1a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.32.66.07-.52.28-.87.51-1.07-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 019 5.8c.68 0 1.36.09 2 .27 1.52-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.12.52.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 009 1z" />
                    </svg>
                  )},
                  { href: 'https://www.linkedin.com/in/aman-chaudhary-2811b5267/', icon: (
                    <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
                      <path d="M3.5 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 7h3v9H2V7zm5 0h2.9v1.3h.04C10.4 7.5 11.5 7 12.9 7 16 7 16.5 9 16.5 11.7V16h-3v-3.8c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V16H7V7z" />
                    </svg>
                  )},
                ].map(({ href, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: 'white', border: '1px solid #E8E6E0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#2C2A24', flexShrink: 0, minHeight: 'auto',
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // ── DESKTOP NAVBAR ───────────────────────────────────────────────────────
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-3 md:gap-4 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: hidden ? -120 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      style={{ paddingTop: scrolled ? '12px' : '20px', paddingLeft: '24px', paddingRight: '24px', transition: 'padding 0.4s ease' }}
    >
      {/* ── AVATAR OUTSIDE NAVBAR ── */}
      <div
        className="pointer-events-auto hidden md:flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer"
        style={{ width: '64px', height: '64px' }}
        onClick={() => scrollTo('hero')}
      >
        <img src={navAvatar} alt="Profile Avatar" className="w-full h-full object-contain drop-shadow-md scale-[1.3] md:scale-[1.4]" />
      </div>

      {/* ── PILL ─────────────────────────────────────────────────────────── */}
      <div
        className="pointer-events-auto w-full relative"
        style={{
          maxWidth: scrolled ? '660px' : '680px',
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid #E8E6E0',
          borderRadius: '999px',
          padding: '6px 6px 6px 20px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: scrolled ? '0 2px 24px rgba(44,42,36,0.08)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="group font-display font-bold text-[18px] text-ink flex-shrink-0 mr-auto bg-transparent border-none cursor-pointer"
        >
          Ac
          <span
            className="inline-block transition-all duration-300 ease-out text-rose group-hover:text-ink group-hover:scale-[1.4] group-hover:rotate-[20deg] origin-center"
            style={{ display: 'inline-block' }}
          >
            .
          </span>
        </button>

        {/* Desktop nav links */}
        <div
          ref={navLinksRef}
          className="hidden md:flex items-center gap-1 relative px-1"
        >
          {/* Sliding active pill */}
          <span
            className="absolute top-0 bottom-0 rounded-pill bg-[#EDEAE4] pointer-events-none"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
              transition: 'left 0.3s cubic-bezier(0.16,1,0.3,1), width 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease',
            }}
          />
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.label;
            return (
              <button
                key={link.label}
                ref={el => linksRef.current[i] = el}
                onClick={() => scrollTo(link.section)}
                className="relative flex items-center gap-[6px] rounded-pill font-body text-[13px] font-medium transition-colors duration-200 cursor-pointer border-none bg-transparent"
                style={{
                  padding: '7px 14px',
                  color: isActive ? '#2C2A24' : '#6B6A65',
                  zIndex: 1,
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#F0EDE8'; e.currentTarget.style.color = '#2C2A24'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isActive ? '#2C2A24' : '#6B6A65'; }}
              >
                {isActive && (
                  <span className="w-[5px] h-[5px] rounded-full bg-rose flex-shrink-0 inline-block" />
                )}
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Hire me — desktop */}
        <button
          className="hidden md:block flex-shrink-0 ml-2 font-body text-[13px] font-semibold rounded-pill cursor-pointer transition-all duration-200 hover:scale-[1.03]"
          style={{
            background: '#2C2A24',
            color: '#FAF8F4',
            border: 'none',
            padding: '9px 20px',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#3D3B35'}
          onMouseLeave={e => e.currentTarget.style.background = '#2C2A24'}
        >
          Hire me
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
