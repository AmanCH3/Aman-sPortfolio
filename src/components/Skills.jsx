import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const equipment = [
  'SQL', 'Python', 'Pandas', 'NumPy', 'Power BI',
  'Excel', 'Tableau', 'DAX', 'ETL', 'Statistics',
  'Data Cleaning', 'Dashboarding', 'Reporting', 'Forecasting'
];

const Skills = () => {
  const [activeModal, setActiveModal] = useState(null); // 'analysis', 'reporting', or null
  const sectionRef = useRef(null);
  
  // lock body scroll when modal open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeModal]);

  return (
    <section ref={sectionRef} id="skills" className="w-full bg-transparent overflow-hidden relative p-0" style={{ padding: 0 }}>
      <div className="mx-auto w-full relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[64px] pt-[64px] md:pt-[100px]">
          <span className="font-body text-[12px] uppercase tracking-[3px] text-hint mb-[8px] md:mb-[16px] font-semibold">
            What I bring
          </span>
          <h2 className="font-display font-bold text-ink mb-[12px] md:mb-[16px] leading-[1.1]" style={{ fontSize: 'clamp(28px, 7vw, 52px)' }}>
            What I work with
          </h2>
          <p className="font-body text-[15px] md:text-[17px] text-muted max-w-[520px] leading-[1.6] md:leading-[1.7]">
            I build analytical workflows and dashboards that turn raw data into clear business insight.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          
          {/* Analysis Card */}
          <div 
            onClick={() => setActiveModal('analysis')}
            className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[460px] md:h-[520px] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(44,42,36,0.12)]"
          >
            {/* Pills */}
            <div className="absolute top-6 left-6 z-20 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-pill text-[13px] font-semibold font-body text-ink border border-white/40 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-ink"></span> Analysis
            </div>
            <div className="absolute top-6 right-6 z-20 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-pill text-[13px] font-semibold font-body text-ink border border-white/40 shadow-sm">
              SQL + Python
            </div>

            {/* Content: Mini Masonry Placeholder */}
            <div className="absolute inset-0 pt-20 px-4 pb-0 overflow-hidden flex justify-center gap-3 opacity-90 transition-opacity">
               <div className="flex flex-col gap-3 w-1/3">
                 <div className="w-full bg-[#d5c3af] rounded-[12px] h-[120px]"></div>
                 <div className="w-full bg-[#c8b39b] rounded-[12px] h-[160px]"></div>
                 <div className="w-full bg-[#b8a186] rounded-[12px] h-[100px]"></div>
               </div>
               <div className="flex flex-col gap-3 w-1/3 -mt-6">
                 <div className="w-full bg-[#c8b39b] rounded-[12px] h-[180px]"></div>
                 <div className="w-full bg-[#d5c3af] rounded-[12px] h-[140px]"></div>
                 <div className="w-full bg-[#b8a186] rounded-[12px] h-[150px]"></div>
               </div>
               <div className="flex flex-col gap-3 w-1/3">
                 <div className="w-full bg-[#b8a186] rounded-[12px] h-[130px]"></div>
                 <div className="w-full bg-[#c8b39b] rounded-[12px] h-[110px]"></div>
                 <div className="w-full bg-[#d5c3af] rounded-[12px] h-[170px]"></div>
               </div>
            </div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#2C2A24]/60 to-transparent p-6 md:p-8 flex flex-col justify-end z-20">
              <h3 className="font-display font-bold text-[24px] md:text-[28px] text-white mb-1">Data exploration &amp; cleaning</h3>
              <p className="font-body text-[14px] md:text-[15px] text-white/80 group-hover:text-white transition-colors">Click to view the workflow &rarr;</p>
            </div>
          </div>

          {/* Reporting Card */}
          <div 
            onClick={() => setActiveModal('reporting')}
            className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[460px] md:h-[520px] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
          >
            {/* Pills */}
            <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-pill text-[13px] font-semibold font-body text-white border border-white/10 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff0050'}}></span> Reporting
            </div>
            <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-pill text-[13px] font-semibold font-body text-white border border-white/10 shadow-sm">
              Dashboards
            </div>

            {/* Content: Stacked Reels */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[180px] h-[320px]">
                 <div className="absolute top-0 left-10 w-[140px] h-[250px] bg-[#1a1a1a] rounded-[16px] rotate-[10deg] opacity-50 border border-white/5 shadow-xl"></div>
                 <div className="absolute top-4 -left-6 w-[150px] h-[260px] bg-[#222] rounded-[16px] -rotate-[5deg] opacity-70 border border-white/5 shadow-xl"></div>
                 
                 {/* Main front reel */}
                 <div className="absolute top-8 left-0 right-0 h-[280px] bg-[#2a2a2a] rounded-[16px] z-10 border border-white/10 flex flex-col justify-between p-3 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                    <div className="self-end text-white/50">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M10 9l5 3-5 3v-6z"></path></svg>
                    </div>
                    <div>
                       <div className="w-full h-1 bg-white/20 rounded-full mb-2"><div className="w-1/3 h-full bg-white rounded-full"></div></div>
                       <div className="flex gap-2">
                          <div className="bg-white/10 rounded px-1.5 py-0.5 text-[9px] text-white/70 flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 12k</div>
                          <div className="bg-white/10 rounded px-1.5 py-0.5 text-[9px] text-white/70 flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 4.2k</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-black to-transparent p-6 md:p-8 flex flex-col justify-end z-20">
              <h3 className="font-display font-bold text-[24px] md:text-[28px] text-white mb-1">Reporting &amp; storytelling</h3>
              <p className="font-body text-[14px] md:text-[15px] text-white/80 group-hover:text-white transition-colors">Click to explore dashboards &rarr;</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-[40px]">
          <button onClick={() => setActiveModal('analysis')} className="bg-ink text-white font-body text-[15px] font-medium px-6 py-3 rounded-pill transition-transform hover:scale-105 border border-ink cursor-pointer shadow-sm">
            View workflow
          </button>
          <button onClick={() => setActiveModal('reporting')} className="bg-transparent text-ink font-body text-[15px] font-medium px-6 py-3 rounded-pill transition-transform hover:scale-105 border border-ink cursor-pointer shadow-sm">
            Explore dashboards
          </button>
        </div>

        {/* Marquee Row */}
        <div className="mt-[56px] overflow-hidden w-full relative pb-[64px] md:pb-[100px]">
          <div className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[100px] bg-gradient-to-r from-[var(--cream)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[100px] bg-gradient-to-l from-[var(--cream)] to-transparent z-10 pointer-events-none"></div>
          
          <style>{`
            @keyframes marquee-new {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track-new {
              animation: marquee-new 40s linear infinite;
              width: max-content;
            }
            .marquee-track-new:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="marquee-track-new flex gap-[24px] items-center">
            {/* We duplicate the array to ensure seamless infinite scroll */}
            {[...equipment, ...equipment, ...equipment].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-[12px] flex-shrink-0"
              >
                <span className="font-body text-[18px] md:text-[24px] font-semibold text-ink/30 uppercase tracking-wide whitespace-nowrap">
                  {item}
                </span>
                <span className="text-ink/10 text-[20px]">&middot;</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Analysis Modal - Full Page Overlay */}
      {activeModal === 'analysis' && (
        <div className="fixed inset-0 z-[9999] bg-[#f0ede6] overflow-y-auto overflow-x-hidden" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 z-30 bg-white border-b border-ink/10 px-6 py-4 flex items-center justify-between shadow-sm">
            <button onClick={() => setActiveModal(null)} className="flex items-center justify-center w-10 h-10 hover:bg-black/5 rounded-full text-ink transition-colors cursor-pointer bg-transparent border-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <h2 className="font-display text-[20px] font-bold text-ink m-0 absolute left-1/2 -translate-x-1/2">Workflow</h2>
            <div className="w-10"></div>
          </div>
          
          <div className="p-4 md:p-8 max-w-[1600px] mx-auto min-h-screen">
            <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4">
              {[
                {h: 'aspect-[2/3]', t: 'Golden Hour', l: 'Kyoto, Japan', c: 'from-[#e8ddd0] to-[#c8b39b]'},
                {h: 'aspect-square', t: 'Street Portrait', l: 'New York', c: 'from-[#d5c3af] to-[#b8a186]'},
                {h: 'aspect-[4/3]', t: 'Minimalist Architecture', l: 'Berlin', c: 'from-[#e2e2e2] to-[#c4c4c4]'},
                {h: 'aspect-[2/3]', t: 'Morning Coffee', l: 'London', c: 'from-[#c8b39b] to-[#a8937b]'},
                {h: 'aspect-[1/2]', t: 'Mountain Peaks', l: 'Swiss Alps', c: 'from-[#d0dbe5] to-[#a6b8c7]'},
                {h: 'aspect-square', t: 'Neon Nights', l: 'Tokyo', c: 'from-[#2a2d34] to-[#141518]'},
                {h: 'aspect-[4/3]', t: 'Ocean Waves', l: 'Bali', c: 'from-[#c2d6d3] to-[#9ebbb6]'},
                {h: 'aspect-[2/3]', t: 'Autumn Leaves', l: 'Vancouver', c: 'from-[#d9b38c] to-[#b88c5c]'},
                {h: 'aspect-[1/2]', t: 'Desert Dunes', l: 'Sahara', c: 'from-[#e8d0a9] to-[#c9a66b]'},
                {h: 'aspect-[2/3]', t: 'City Skyline', l: 'Chicago', c: 'from-[#b0bcc2] to-[#8a98a0]'},
                {h: 'aspect-square', t: 'Vintage Car', l: 'Havana', c: 'from-[#e3aba8] to-[#c4817e]'},
                {h: 'aspect-[4/3]', t: 'Forest Trail', l: 'Oregon', c: 'from-[#b5c2b7] to-[#8a9a8d]'},
                {h: 'aspect-[2/3]', t: 'Quiet Library', l: 'Boston', c: 'from-[#d8ccc0] to-[#bfae9f]'},
                {h: 'aspect-[1/2]', t: 'Snowy Cabin', l: 'Norway', c: 'from-[#eef2f5] to-[#d1dce5]'},
                {h: 'aspect-[4/3]', t: 'Market Colors', l: 'Marrakech', c: 'from-[#d4a373] to-[#b5804e]'},
                {h: 'aspect-square', t: 'Abstract Shadows', l: 'Studio', c: 'from-[#cfcfcf] to-[#a6a6a6]'},
                {h: 'aspect-[2/3]', t: 'Clifftop View', l: 'Amalfi', c: 'from-[#aec0c6] to-[#879ea6]'},
                {h: 'aspect-[4/3]', t: 'Misty Lake', l: 'Scotland', c: 'from-[#b8bfb8] to-[#929a92]'},
              ].map((img, i) => (
                <div key={i} className="break-inside-avoid relative group cursor-pointer mb-4">
                  <div className="relative rounded-[16px] overflow-hidden mb-2">
                    {/* swap with your <img> here */}
                    <div className={`w-full ${img.h} bg-gradient-to-br ${img.c}`}></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {/* Save button */}
                      <div className="absolute top-3 right-3 bg-[#e60023] hover:bg-[#ad081b] text-white font-bold font-body text-[14px] px-4 py-3 leading-none rounded-full cursor-pointer transition-colors">
                        Save
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                      </div>
                    </div>
                  </div>
                  <div className="px-1">
                    <p className="font-body font-bold text-[13px] text-ink m-0 leading-tight">{img.t}</p>
                    <p className="font-body text-[11px] text-[#767676] m-0 mt-0.5 leading-tight">{img.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reporting Modal - Full Page Overlay */}
      {activeModal === 'reporting' && (
        <div className="fixed inset-0 z-[9999] bg-[#f9f9f9] overflow-y-auto overflow-x-hidden" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 z-30 bg-white border-b border-ink/10 px-6 py-4 flex items-center justify-between shadow-sm">
            <button onClick={() => setActiveModal(null)} className="flex items-center justify-center w-10 h-10 hover:bg-black/5 rounded-full text-ink transition-colors cursor-pointer bg-transparent border-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <h2 className="font-display text-[20px] font-bold text-ink m-0 absolute left-1/2 -translate-x-1/2">Dashboards</h2>
            <div className="w-10"></div>
          </div>

          <div className="p-4 md:p-8 max-w-[1200px] mx-auto min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {t: 'Cinematic B-Roll', v: '124k', l: '12k', d: '0:45'},
                {t: 'Travel Diary: Japan', v: '89k', l: '8.4k', d: '1:00'},
                {t: 'Product Commercial', v: '45k', l: '3.2k', d: '0:30'},
                {t: 'Behind the Scenes', v: '210k', l: '24k', d: '0:55'},
                {t: 'Color Grading Breakdown', v: '65k', l: '5.1k', d: '0:40'},
                {t: 'Urban Exploration', v: '112k', l: '9.8k', d: '0:50'},
                {t: 'Food Photography Setup', v: '32k', l: '2.8k', d: '0:25'},
                {t: 'Street Style Shoot', v: '150k', l: '18k', d: '0:60'},
                {t: 'Drone Hyperlapse', v: '280k', l: '35k', d: '0:15'},
              ].map((reel, i) => (
                <div key={i} className="relative group rounded-[12px] overflow-hidden aspect-[9/16] cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
                  {/* swap with your <video> or <img> here */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a]"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all border border-white/40">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="font-body font-bold text-[13px] text-white mb-2 line-clamp-2 m-0 leading-tight">{reel.t}</p>
                    <div className="flex items-center gap-3 text-[11px] font-body text-white">
                      <span className="flex items-center gap-1 opacity-90">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> {reel.v}
                      </span>
                      <span className="flex items-center gap-1 opacity-90">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> {reel.l}
                      </span>
                      <span className="ml-auto opacity-80">{reel.d}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
