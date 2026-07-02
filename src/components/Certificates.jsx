import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certs = [
  {
    id: 1, variant: 'dark', colSpan: 2,
    initial: 'D', platform: 'DataCamp',
    title: 'Associate Data Analyst',
    issuer: 'DataCamp',
    date: '2024', credentialId: '-',
    skills: ['Data Analysis', 'SQL', 'Python'],
    verifyUrl: 'https://www.datacamp.com/certificate/DAA0015319179645'
  },
  {
    id: 2, variant: 'rose', colSpan: 1,
    initial: 'D', platform: 'DataCamp',
    title: 'Data Analyst in Tableau',
    issuer: 'DataCamp',
    date: '2024', credentialId: '-',
    skills: ['Tableau', 'Visualization'],
    verifyUrl: 'https://www.datacamp.com/statement-of-accomplishment/track/a446ff0b78ea407999a793ca0d65aced9ce14ab8?raw=1'
  },
  {
    id: 3, variant: 'sky', colSpan: 1,
    initial: 'D', platform: 'Dataquest',
    title: 'SQL Analyst',
    issuer: 'Dataquest',
    date: '2024', credentialId: '-',
    skills: ['SQL', 'Data Modeling', 'Query Optimization'],
    verifyUrl: 'https://app.dataquest.io/view_cert/J5ARPILKM58YVFL8T57R'
  },
  {
    id: 4, variant: 'sand', colSpan: 2,
    initial: 'D', platform: 'DataCamp',
    title: 'Data Literacy',
    issuer: 'DataCamp',
    date: '2024', credentialId: '-',
    skills: ['Data Literacy', 'Data Interpretation', 'Communication'],
    verifyUrl: 'https://www.datacamp.com/skill-verification/DL0038139913195'
  }
];

const bgMap = {
  dark: '#2C2A24',
  rose: '#F9C8D4',
  sand: '#FAE8C0',
  sage: '#C8E6D8',
  sky: '#C4DCFA'
};

const Certificates = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);

  const sectionRef = useRef(null);
  const headerRef = useRef([]);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 50, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', delay: 0.2
      });

      gsap.from(statsRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        scale: 0.95, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.6
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardBase = {
    borderRadius: 24,
    padding: 32,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
    minHeight: 260
  };

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  return (
    <section id="certificates" ref={sectionRef} style={{ background: '#FAF8F4', padding: isMobile ? '60px 0' : '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : (isTablet ? '0 24px' : '0 80px') }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div ref={el => headerRef.current[0] = el} style={{ fontSize: 12, fontWeight: 600, color: '#9B9A95', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Credentials
          </div>
          <h2 ref={el => headerRef.current[1] = el} style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, fontSize: isMobile ? 'clamp(26px, 8vw, 36px)' : 'clamp(36px, 4vw, 56px)', color: '#2C2A24', lineHeight: 1.1, marginBottom: 16 }}>
            Certificates & achievements
          </h2>
          <p ref={el => headerRef.current[2] = el} style={{ fontSize: 17, color: '#6B6A65', lineHeight: 1.6, maxWidth: 500, margin: '0 auto', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Verified learning focused on analytics, SQL, dashboards, and business insights.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
          gridTemplateRows: 'auto auto',
          gap: isMobile ? '12px' : '16px',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          {certs.map((cert, idx) => {
            const isDark = cert.variant === 'dark';

            return (
              <div
                key={cert.id}
                ref={el => cardsRef.current[idx] = el}
                onMouseEnter={() => setHoveredId(cert.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => window.open(cert.verifyUrl, '_blank')}
                style={{
                  ...cardBase,
                  background: bgMap[cert.variant],
                  gridColumn: isTablet ? 'span 1' : `span ${cert.colSpan}`,
                  transform: hoveredId === cert.id ? 'translateY(-6px)' : 'translateY(0)'
                }}
              >
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', width: 150, height: 150, borderRadius: '50%', bottom: -35, right: -35, background: 'rgba(255,255,255,0.15)', pointerEvents: 'none', zIndex: 0 }} />
                <div style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', top: -15, right: 15, background: 'rgba(255,255,255,0.1)', pointerEvents: 'none', zIndex: 0 }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: 90, height: 90, opacity: 1, backgroundImage: 'radial-gradient(circle, rgba(44,42,36,0.1) 1px, transparent 1px)', backgroundSize: '8px 8px', pointerEvents: 'none', zIndex: 0 }} />

                {/* Content Wrapper */}
                <div style={{ zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>

                  {/* Top Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <div style={{
                        width: 38, height: 38, borderRadius: 10,
                        background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.6)',
                        border: isDark ? 'none' : '1px solid rgba(255,255,255,0.8)',
                        color: isDark ? 'white' : '#2C2A24',
                        fontFamily: 'Clash Display, sans-serif', fontWeight: 700, fontSize: 16,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {cert.initial}
                      </div>
                      <span style={{
                        fontSize: 12, fontWeight: 600,
                        color: isDark ? 'rgba(255,255,255,0.55)' : '#6B6A65',
                        fontFamily: 'Plus Jakarta Sans, sans-serif'
                      }}>
                        {cert.platform}
                      </span>
                    </div>

                    <div style={{
                      background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(44,42,36,0.07)',
                      border: isDark ? '1px solid rgba(255,255,255,0.22)' : '1px solid rgba(44,42,36,0.12)',
                      borderRadius: 999, padding: '5px 12px',
                      display: 'flex', alignItems: 'center', gap: 5,
                      fontSize: 11, fontWeight: 600,
                      color: isDark ? 'rgba(255,255,255,0.8)' : '#6B6A65',
                      cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif'
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M1 6h10M7 2l4 4-4 4" />
                      </svg>
                      Verify
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <div style={{
                    fontSize: isDark ? 22 : (cert.colSpan === 2 ? 20 : 17),
                    fontWeight: 700, color: isDark ? 'white' : '#2C2A24',
                    lineHeight: 1.2, marginBottom: 8, fontFamily: 'Clash Display, sans-serif'
                  }}>
                    {cert.title}
                  </div>

                  {/* Issuer Line */}
                  <div style={{
                    fontSize: 13, color: isDark ? 'rgba(255,255,255,0.5)' : '#6B6A65', marginBottom: 18, fontFamily: 'Plus Jakarta Sans, sans-serif'
                  }}>
                    {cert.issuer}
                  </div>

                  {/* Skills Row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                    {cert.skills.map(skill => (
                      <div key={skill} style={{
                        background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(44,42,36,0.07)',
                        border: isDark ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(44,42,36,0.1)',
                        color: isDark ? 'rgba(255,255,255,0.75)' : '#2C2A24',
                        borderRadius: 999, padding: '3px 10px',
                        fontSize: 11, fontWeight: 500, fontFamily: 'Plus Jakarta Sans, sans-serif'
                      }}>
                        {skill}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{
                    marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14,
                    borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(44,42,36,0.08)'
                  }}>
                    <span style={{
                      fontSize: 11, fontWeight: 500, fontFamily: 'Plus Jakarta Sans, sans-serif',
                      color: isDark ? 'rgba(255,255,255,0.4)' : '#9B9A95'
                    }}>
                      {cert.date}
                    </span>
                    <span style={{
                      fontSize: 10, fontFamily: 'monospace',
                      color: isDark ? 'rgba(255,255,255,0.25)' : '#B4B2A9'
                    }}>
                      ID: {cert.credentialId}
                    </span>
                  </div>

                </div>

                {/* Specific Decoration: Medal for dark card */}
                {isDark && (
                  <svg style={{ position: 'absolute', bottom: 24, right: 28, opacity: 0.08, pointerEvents: 'none', zIndex: 0 }} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div style={{
          display: isMobile ? 'grid' : 'flex',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'none',
          gap: 16, maxWidth: 1280, margin: '48px auto 0'
        }}>
          {[
            { value: '4', label: 'Certificates' },
            { value: '2', label: 'Platforms' },
            { value: 'Data', label: 'Specialization' },
            { value: '2024', label: 'Latest issued' }
          ].map((stat, idx) => (
            <div
              key={idx}
              ref={el => statsRef.current[idx] = el}
              style={{
                background: 'white', border: '1px solid #E8E6E0', borderRadius: 16,
                padding: isMobile ? '16px 12px' : 20, textAlign: 'center', flex: 1
              }}
            >
              <div style={{ fontFamily: 'Clash Display, sans-serif', fontWeight: 700, fontSize: isMobile ? 24 : 30, color: '#2C2A24', marginBottom: 4 }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 12, color: '#9B9A95', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
