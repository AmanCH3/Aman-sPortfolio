import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCharacter from './AnimatedCharacter';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const stat2Ref = useRef(null);
  const stat3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Column approach animations
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out"
      });

      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out"
      });

      // Stats counting animations
      const stats = [
        { ref: stat2Ref, end: 12, suffix: '+' },
        { ref: stat3Ref, end: 4, suffix: '+' }
      ];

      stats.forEach((stat, index) => {
        let obj = { val: 0 };
        gsap.to(obj, {
          scrollTrigger: {
            trigger: stat.ref.current,
            start: "top 85%",
          },
          val: stat.end,
          duration: 2,
          delay: 0.5 + (index * 0.15),
          ease: "power2.out",
          onUpdate: () => {
            if (stat.ref.current) {
              // Use Math.ceil to smoothly step through numbers
              stat.ref.current.textContent = Math.ceil(obj.val) + stat.suffix;
            }
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="w-full bg-white py-section-y overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full px-section-x flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[80px]">

        {/* LEFT COLUMN - 45% */}
        <div ref={leftColRef} className="w-full lg:w-[45%] flex justify-center lg:justify-start relative order-first">

          <div className="relative w-full max-w-[340px] sm:max-w-[460px]">
            {/* Animated character card */}
            <div className="w-full bg-rose rounded-[20px] md:rounded-[32px] overflow-hidden relative shadow-sm" style={{ height: 'clamp(280px, 55vw, 500px)' }}>
              <AnimatedCharacter />
            </div>

            {/* Overlapping Skill Bubbles */}
            <div className="absolute -bottom-[16px] left-1/2 -translate-x-1/2 flex -space-x-2 z-10 w-max">
              <div className="bg-sand text-ink rounded-pill px-[18px] py-[8px] font-body text-[13px] font-medium border-[2px] border-white shadow-sm relative hover:-translate-y-1 transition-transform">
                SQL
              </div>
              <div className="bg-sky text-ink rounded-pill px-[18px] py-[8px] font-body text-[13px] font-medium border-[2px] border-white shadow-sm relative hover:-translate-y-1 transition-transform">
                Python
              </div>
              <div className="bg-sage text-ink rounded-pill px-[18px] py-[8px] font-body text-[13px] font-medium border-[2px] border-white shadow-sm relative hover:-translate-y-1 transition-transform">
                Power BI
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN - 55% */}
        <div ref={rightColRef} className="w-full lg:w-[55%] flex flex-col items-start pt-[20px] lg:pt-0 order-last">

          <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[12px] md:mb-[16px] font-semibold">
            About me
          </span>

          <h2 className="font-display font-bold text-ink leading-[1.2] max-w-[480px] mb-[16px] md:mb-[24px]" style={{ fontSize: 'clamp(26px, 7vw, 40px)' }}>
            Turning messy data into clear decisions.
          </h2>

          <p className="font-body text-[15px] md:text-[17px] text-muted leading-[1.7] md:leading-[1.8] max-w-[480px] mb-[32px] md:mb-[48px]">
            I'm Aman, a business analyst who turns messy operational data into clear, actionable recommendations.
            I use SQL, Python, and dashboard storytelling to help teams spot the right signals, reduce uncertainty, and move faster.
            My work is focused on making analytics practical for everyday business decisions.
            Right now, I am also building my data engineering skillset by learning ETL pipeline design, cloud data platforms, and production-ready data modeling.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 max-w-[400px] w-full gap-x-[16px] md:gap-x-0">
            <div className="border-r border-b border-border pb-[20px] md:pb-[32px] pr-[16px] md:pr-[32px] flex flex-col items-start">
              <span ref={stat2Ref} className="font-display font-bold text-ink leading-none" style={{ fontSize: 'clamp(28px, 7vw, 42px)' }}>0</span>
              <span className="font-body text-[12px] md:text-[13px] text-hint mt-[6px] md:mt-[8px]">Projects completed</span>
            </div>

            <div className="border-b border-border pb-[20px] md:pb-[32px] pl-[16px] md:pl-[32px] flex flex-col items-start">
              <span ref={stat3Ref} className="font-display font-bold text-ink leading-none" style={{ fontSize: 'clamp(28px, 7vw, 42px)' }}>0</span>
              <span className="font-body text-[12px] md:text-[13px] text-hint mt-[6px] md:mt-[8px]">Certifications</span>
            </div>

            <div className="border-r border-border pt-[20px] md:pt-[32px] pr-[16px] md:pr-[32px] flex flex-col items-start">
              <span className="font-display font-bold text-ink leading-none" style={{ fontSize: 'clamp(28px, 7vw, 42px)' }}>24/7</span>
              <span className="font-body text-[12px] md:text-[13px] text-hint mt-[6px] md:mt-[8px]">Curiosity for insights</span>
            </div>

            <a href="https://www.linkedin.com/in/aman-chaudhary-2811b5267/" target="_blank" rel="noopener noreferrer" className="pt-[20px] md:pt-[32px] pl-[16px] md:pl-[32px] flex flex-col items-start group">
              <div className="flex items-center gap-2 mt-1 md:mt-2">
                <span className="font-display font-bold text-[22px] md:text-[28px] text-ink leading-none group-hover:text-rose transition-colors duration-300">LinkedIn</span>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-ink group-hover:text-rose transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <span className="font-body text-[12px] md:text-[13px] text-hint mt-[6px] md:mt-[8px]">Let&apos;s connect</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
