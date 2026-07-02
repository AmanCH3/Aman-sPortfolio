import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
];

const SocialButton = ({ children, href = '#' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-ink transition-all duration-200 hover:border-ink hover:bg-cream"
  >
    {children}
  </a>
);

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll('[data-animate]');
      if (items) {
        gsap.from(items, {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          y: 30,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── CONTACT SECTION ── */}
      <section ref={sectionRef} className="w-full bg-cream overflow-hidden" style={{ padding: 'clamp(60px,10vh,100px) 0 clamp(40px,6vh,60px)' }}>
        <style>{`
          @keyframes wave-arm {
            0%   { transform: rotate(-10deg); }
            100% { transform: rotate(20deg);  }
          }
          .wave-arm {
            animation: wave-arm 1s ease-in-out infinite alternate;
            transform-origin: 68px 72px;
          }
        `}</style>

        <div ref={contentRef} className="max-w-[720px] mx-auto flex flex-col items-center px-section-x">

          {/* Waving character SVG */}
          <div data-animate className="mb-8">
            <svg viewBox="0 0 110 110" className="w-[80px] h-[80px] md:w-[110px] md:h-[110px]" xmlns="http://www.w3.org/2000/svg" fill="none">
              {/* Torso */}
              <rect x="36" y="68" width="38" height="32" rx="10" fill="#C4DCFA" />
              {/* Arm down (left) */}
              <rect x="24" y="72" width="13" height="28" rx="6" fill="#F5D5B8" />
              {/* Arm raised waving (right) */}
              <g className="wave-arm">
                <rect x="73" y="56" width="13" height="28" rx="6" fill="#F5D5B8" />
              </g>
              {/* Neck */}
              <rect x="48" y="58" width="14" height="14" rx="4" fill="#F5D5B8" />
              {/* Head */}
              <circle cx="55" cy="44" r="26" fill="#F5D5B8" />
              {/* Hair */}
              <rect x="29" y="18" width="52" height="18" rx="10" fill="#2C2A24" />
              {/* Ears */}
              <circle cx="29" cy="46" r="5" fill="#E6C6A9" />
              <circle cx="81" cy="46" r="5" fill="#E6C6A9" />
              {/* Eyes */}
              <circle cx="46" cy="44" r="3" fill="#2C2A24" />
              <circle cx="64" cy="44" r="3" fill="#2C2A24" />
              {/* Smile */}
              <path d="M47 54 Q55 62 63 54" stroke="#2C2A24" strokeWidth="2.5" strokeLinecap="round" />
              {/* Cheeks */}
              <circle cx="40" cy="50" r="4" fill="#F9C8D4" fillOpacity="0.7" />
              <circle cx="70" cy="50" r="4" fill="#F9C8D4" fillOpacity="0.7" />
            </svg>
          </div>

          {/* Headline */}
          <h2
            data-animate
            className="font-display font-bold text-ink text-center leading-[1.1] max-w-[680px] mb-5"
            style={{ fontSize: 'clamp(28px, 8vw, 60px)' }}
          >
            Let's turn data into{' '}
            <span className="relative inline-block whitespace-nowrap">
              action
              <svg className="absolute w-full h-[12px] -bottom-[2px] left-0" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
                  fill="none"
                  stroke="#F9C8D4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtext */}
          <p data-animate className="font-body text-[14px] md:text-[17px] text-muted leading-[1.7] text-center max-w-[520px] mb-12">
            I'm open to analytics projects, reporting work, and data-focused collaborations.
            If you need clearer insights, smarter dashboards, or better reporting, let's talk.
          </p>

          {/* CTA row */}
          <div data-animate className="flex flex-col md:flex-row items-center gap-4 md:flex-wrap md:justify-center w-full">
            <button className="w-full md:w-auto bg-ink text-white rounded-pill px-12 py-4 font-display font-medium text-[18px] transition-transform hover:scale-[1.04] text-center">
              Say hello →
            </button>
            <div className="flex items-center gap-4 justify-center">
              <span className="font-body text-[15px] text-hint">or</span>
              <a
                href="mailto:amanxchau1@gmail.com"
                className="font-body text-[15px] text-ink underline underline-offset-4 hover:text-muted transition-colors"
              >
                amanxchau1@gmail.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[1280px] h-px bg-border mt-20" />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-cream pb-12">
        <div className="max-w-[1280px] mx-auto px-section-x">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 text-center">
            {/* Left: name + role */}
            <div className="flex items-center gap-[10px]">
              <span className="font-display font-bold text-[20px] text-ink">Aman Chaudhary</span>
              <span className="w-1 h-1 rounded-full bg-[#D0CEC8]" />
              <span className="font-body text-[13px] text-hint">Data Analyst</span>
            </div>

            {/* Center: nav links */}
            <nav className="flex items-center gap-[16px] sm:gap-[24px] md:gap-8 flex-wrap justify-center">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-body text-[14px] text-muted hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: social icons */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <SocialButton href="https://github.com/AmanCH3">
                <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 1a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.32.66.07-.52.28-.87.51-1.07-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 019 5.8c.68 0 1.36.09 2 .27 1.52-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.12.52.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 009 1z" />
                </svg>
              </SocialButton>

              {/* LinkedIn */}
              <SocialButton href="https://www.linkedin.com/in/aman-chaudhary-2811b5267/">
                <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor">
                  <path d="M3.5 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 7h3v9H2V7zm5 0h2.9v1.3h.04C10.4 7.5 11.5 7 12.9 7 16 7 16.5 9 16.5 11.7V16h-3v-3.8c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V16H7V7z" />
                </svg>
              </SocialButton>
            </div>
          </div>

          {/* Row 2 — copyright */}
          <div className="border-t border-border pt-6 text-center">
            <p className="font-body text-[12px] text-hint">
              Built for data-driven storytelling &copy; 2025
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
