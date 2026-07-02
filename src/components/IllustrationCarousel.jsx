import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IllustrationCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const TOTAL = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % TOTAL);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
    }}>

      {/* SLIDE WINDOW */}
      <div style={{
        width: '100%',
        maxWidth: 500,
        aspectRatio: '1 / 1',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 28,
      }}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x < -50 || velocity.x < -500) {
                goTo((current + 1) % TOTAL);
              } else if (offset.x > 50 || velocity.x > 500) {
                goTo(current === 0 ? TOTAL - 1 : current - 1);
              }
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {current === 0 && <Slide1 />}
            {current === 1 && <Slide2 />}
            {current === 2 && <Slide3 />}
            {current === 3 && <Slide4 />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 24 : 8,
              minWidth: i === current ? 24 : 8,
              height: 8,
              minHeight: 8,
              borderRadius: 999,
              background: i === current ? '#2C2A24' : '#D3D1C7',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default IllustrationCarousel;

/* ═══════════════════════════════════════════════════════
   SLIDE 1 — Analytics Dashboard with Charts & KPIs
   ═══════════════════════════════════════════════════════ */
const Slide1 = () => {
  const barData = [35, 52, 44, 68, 58, 72, 85, 65, 78, 90, 82, 95];
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D'];

  return (
    <div style={{
      width:'100%', height:'100%',
      background: 'linear-gradient(135deg, #C4DCFA 0%, #dce8fa 100%)',
      borderRadius:28,
      position:'relative',
      overflow:'hidden',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    }}>

      {/* Dot grid */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(circle,rgba(44,42,36,0.04) 1px,transparent 1px)',
        backgroundSize:'16px 16px' }}/>

      {/* Blobs */}
      <div style={{ position:'absolute', width:200, height:200,
        borderRadius:'50%', background:'rgba(255,255,255,0.15)',
        top:-50, right:-50, pointerEvents:'none' }}/>

      {/* Main dashboard card */}
      <div style={{
        width:'86%', background:'white',
        borderRadius:16, overflow:'hidden',
        boxShadow:'0 8px 40px rgba(44,42,36,0.12)',
        border:'1px solid rgba(255,255,255,0.9)',
        position:'relative', zIndex:5,
      }}>

        {/* Dashboard header */}
        <div style={{ background:'#FAFAF8', padding:'10px 14px',
          display:'flex', alignItems:'center', justifyContent:'space-between',
          borderBottom:'1px solid #E8E6E0' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:24, height:24, borderRadius:6, background:'#C4DCFA',
              display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="#2C2A24" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 20V10M12 20V4M6 20v-6"/>
              </svg>
            </div>
            <span style={{ fontSize:11, fontWeight:700, color:'#2C2A24',
              fontFamily:'Clash Display, sans-serif' }}>Analytics Overview</span>
          </div>
          <div style={{ display:'flex', gap:4 }}>
            <div style={{ background:'#F0EDE8', borderRadius:999,
              padding:'3px 8px', fontSize:7, color:'#6B6A65',
              fontFamily:'Plus Jakarta Sans, sans-serif', fontWeight:600 }}>Monthly</div>
            <div style={{ background:'#2C2A24', borderRadius:999,
              padding:'3px 8px', fontSize:7, color:'white',
              fontFamily:'Plus Jakarta Sans, sans-serif', fontWeight:600 }}>YTD</div>
          </div>
        </div>

        {/* KPI row */}
        <div style={{ padding:'10px 14px 6px', display:'flex', gap:6 }}>
          {[
            { label:'Revenue', value:'$284K', change:'+18%', color:'#3BA876', bg:'#C8E6D8' },
            { label:'Users', value:'12.4K', change:'+24%', color:'#4A8FE7', bg:'#C4DCFA' },
            { label:'Retention', value:'87%', change:'+5%', color:'#E06B84', bg:'#F9C8D4' },
          ].map(kpi => (
            <div key={kpi.label} style={{
              flex:1, background:'#FAFAF8', borderRadius:10,
              padding:'8px 8px', border:'1px solid #F0EDE8',
            }}>
              <div style={{ fontSize:7, color:'#9B9A95', fontWeight:500,
                fontFamily:'Plus Jakarta Sans, sans-serif', marginBottom:3 }}>{kpi.label}</div>
              <div style={{ fontSize:14, fontWeight:700, color:'#2C2A24',
                fontFamily:'Clash Display, sans-serif', lineHeight:1 }}>{kpi.value}</div>
              <div style={{ fontSize:8, fontWeight:600, color:kpi.color,
                fontFamily:'Plus Jakarta Sans, sans-serif', marginTop:2, display:'flex', alignItems:'center', gap:2 }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={kpi.color} strokeWidth="3">
                  <path d="M7 17l5-5 5 5M7 7l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {kpi.change}
              </div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div style={{ padding:'6px 14px 10px' }}>
          <div style={{ fontSize:8, color:'#9B9A95', fontWeight:600,
            fontFamily:'Plus Jakarta Sans, sans-serif', marginBottom:6 }}>Monthly Performance</div>
          <svg width="100%" viewBox="0 0 260 80" style={{ display:'block' }}>
            {/* Grid lines */}
            {[0, 25, 50, 75].map(y => (
              <line key={y} x1="0" y1={75-y*0.75} x2="260" y2={75-y*0.75}
                stroke="#F0EDE8" strokeWidth="0.5"/>
            ))}
            {/* Bars */}
            {barData.map((val, i) => {
              const barH = val * 0.7;
              const x = i * 21 + 4;
              return (
                <g key={i}>
                  <rect x={x} y={75-barH} width="14" height={barH} rx="3"
                    fill={i === barData.length - 1 ? '#4A8FE7' : i >= 9 ? '#C4DCFA' : '#E8E6E0'}
                    opacity={i === barData.length - 1 ? 1 : 0.8} />
                  <text x={x+7} y={75+10} textAnchor="middle"
                    fill="#9B9A95" fontSize="6" fontFamily="Plus Jakarta Sans, sans-serif">
                    {months[i]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Floating KPI badge */}
      <div style={{ position:'absolute', bottom:24, right:20, zIndex:10,
        background:'white', borderRadius:14, padding:'10px 14px',
        boxShadow:'0 4px 20px rgba(0,0,0,0.08)',
        border:'1px solid rgba(255,255,255,0.9)', display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ width:28, height:28, borderRadius:8, background:'#C8E6D8',
          display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="#3BA876" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize:11, fontWeight:700, color:'#2C2A24',
            fontFamily:'Clash Display, sans-serif' }}>+85%</div>
          <div style={{ fontSize:7, color:'#9B9A95',
            fontFamily:'Plus Jakarta Sans, sans-serif' }}>Forecast Accuracy</div>
        </div>
      </div>

      {/* Floating metric top-right */}
      <div style={{ position:'absolute', top:20, right:16, zIndex:10,
        background:'white', borderRadius:12, padding:'8px 12px',
        boxShadow:'0 2px 12px rgba(0,0,0,0.06)',
        border:'1px solid rgba(255,255,255,0.9)' }}>
        <div style={{ fontSize:9, fontWeight:600, color:'#9B9A95',
          fontFamily:'Plus Jakarta Sans, sans-serif', marginBottom:2 }}>Pipeline</div>
        <div style={{ fontSize:12, fontWeight:700, color:'#2C2A24',
          fontFamily:'Clash Display, sans-serif' }}>100K+ rows</div>
      </div>

    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   SLIDE 2 — SQL/Python Code Editor with Data Output
   ═══════════════════════════════════════════════════════ */
const Slide2 = () => (
  <div style={{
    width:'100%', height:'100%',
    background:'#1E1E2E',
    borderRadius:28,
    position:'relative',
    overflow:'hidden',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding: 20,
  }}>

    {/* Subtle grid */}
    <div style={{ position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.03) 1px,transparent 1px)',
      backgroundSize:'20px 20px' }}/>

    <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:10, position:'relative', zIndex:5 }}>

      {/* Code editor card */}
      <div style={{
        background:'#282A36', borderRadius:14, overflow:'hidden',
        border:'1px solid rgba(255,255,255,0.06)',
        boxShadow:'0 8px 32px rgba(0,0,0,0.3)',
      }}>
        {/* Editor top bar */}
        <div style={{ padding:'8px 12px', display:'flex', alignItems:'center', gap:6,
          background:'rgba(255,255,255,0.04)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#FF5F56' }}/>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#FFBD2E' }}/>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#27CA40' }}/>
          <div style={{ flex:1 }}/>
          <span style={{ fontSize:8, color:'rgba(255,255,255,0.35)',
            fontFamily:'monospace' }}>analysis.py</span>
        </div>

        {/* Python code */}
        <div style={{ padding:'12px 14px', fontFamily:'monospace', fontSize:10, lineHeight:1.7 }}>
          <div>
            <span style={{ color:'#FF79C6' }}>import</span>
            <span style={{ color:'#F8F8F2' }}> pandas </span>
            <span style={{ color:'#FF79C6' }}>as</span>
            <span style={{ color:'#50FA7B' }}> pd</span>
          </div>
          <div>
            <span style={{ color:'#FF79C6' }}>import</span>
            <span style={{ color:'#F8F8F2' }}> matplotlib.pyplot </span>
            <span style={{ color:'#FF79C6' }}>as</span>
            <span style={{ color:'#50FA7B' }}> plt</span>
          </div>
          <div style={{ height:6 }}/>
          <div>
            <span style={{ color:'#6272A4' }}># Load and clean dataset</span>
          </div>
          <div>
            <span style={{ color:'#F8F8F2' }}>df </span>
            <span style={{ color:'#FF79C6' }}>=</span>
            <span style={{ color:'#F8F8F2' }}> pd.</span>
            <span style={{ color:'#50FA7B' }}>read_csv</span>
            <span style={{ color:'#F8F8F2' }}>(</span>
            <span style={{ color:'#F1FA8C' }}>'sales_data.csv'</span>
            <span style={{ color:'#F8F8F2' }}>)</span>
          </div>
          <div>
            <span style={{ color:'#F8F8F2' }}>df </span>
            <span style={{ color:'#FF79C6' }}>=</span>
            <span style={{ color:'#F8F8F2' }}> df.</span>
            <span style={{ color:'#50FA7B' }}>dropna</span>
            <span style={{ color:'#F8F8F2' }}>()</span>
          </div>
          <div style={{ height:6 }}/>
          <div>
            <span style={{ color:'#6272A4' }}># Group by region</span>
          </div>
          <div>
            <span style={{ color:'#F8F8F2' }}>summary </span>
            <span style={{ color:'#FF79C6' }}>=</span>
            <span style={{ color:'#F8F8F2' }}> df.</span>
            <span style={{ color:'#50FA7B' }}>groupby</span>
            <span style={{ color:'#F8F8F2' }}>(</span>
            <span style={{ color:'#F1FA8C' }}>'region'</span>
            <span style={{ color:'#F8F8F2' }}>)</span>
          </div>
          <div>
            <span style={{ color:'#F8F8F2' }}>  .</span>
            <span style={{ color:'#50FA7B' }}>agg</span>
            <span style={{ color:'#F8F8F2' }}>(</span>
            <span style={{ color:'#F1FA8C' }}>'revenue'</span>
            <span style={{ color:'#F8F8F2' }}>:</span>
            <span style={{ color:'#F1FA8C' }}>'sum'</span>
            <span style={{ color:'#F8F8F2' }}>)</span>
          </div>
        </div>
      </div>

      {/* Output / data table card */}
      <div style={{
        background:'#282A36', borderRadius:14, overflow:'hidden',
        border:'1px solid rgba(255,255,255,0.06)',
        boxShadow:'0 4px 20px rgba(0,0,0,0.2)',
      }}>
        <div style={{ padding:'8px 12px', display:'flex', alignItems:'center', gap:6,
          background:'rgba(255,255,255,0.04)', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
            stroke="#50FA7B" strokeWidth="2" strokeLinecap="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
            <line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
          <span style={{ fontSize:8, color:'#50FA7B', fontFamily:'monospace' }}>Output</span>
        </div>
        <div style={{ padding:'10px 12px' }}>
          {/* Mini data table */}
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:8, fontFamily:'monospace' }}>
            <thead>
              <tr>
                {['Region','Revenue','Growth'].map(h => (
                  <th key={h} style={{ textAlign:'left', padding:'3px 6px', color:'#BD93F9',
                    borderBottom:'1px solid rgba(255,255,255,0.08)', fontWeight:600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { r:'North', v:'$142K', g:'+22%', c:'#50FA7B' },
                { r:'South', v:'$98K', g:'+15%', c:'#50FA7B' },
                { r:'East', v:'$67K', g:'-3%', c:'#FF5555' },
                { r:'West', v:'$115K', g:'+31%', c:'#50FA7B' },
              ].map(row => (
                <tr key={row.r}>
                  <td style={{ padding:'4px 6px', color:'#F8F8F2' }}>{row.r}</td>
                  <td style={{ padding:'4px 6px', color:'#F1FA8C' }}>{row.v}</td>
                  <td style={{ padding:'4px 6px', color:row.c, fontWeight:600 }}>{row.g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Floating SQL badge */}
    <div style={{ position:'absolute', top:16, right:16, zIndex:10,
      background:'rgba(255,255,255,0.08)', backdropFilter:'blur(8px)',
      borderRadius:12, padding:'8px 12px',
      border:'1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ fontSize:9, fontWeight:700, color:'#BD93F9',
        fontFamily:'monospace', letterSpacing:1 }}>SQL + Python</div>
      <div style={{ fontSize:7, color:'rgba(255,255,255,0.4)',
        fontFamily:'Plus Jakarta Sans, sans-serif', marginTop:2 }}>Data Analysis</div>
    </div>

    {/* Terminal cursor blink indicator */}
    <div style={{ position:'absolute', bottom:16, left:20, zIndex:10,
      display:'flex', alignItems:'center', gap:6 }}>
      <div style={{ width:6, height:6, borderRadius:'50%', background:'#50FA7B',
        animation:'livePulse 2s ease-in-out infinite' }}/>
      <span style={{ fontSize:8, color:'rgba(255,255,255,0.35)',
        fontFamily:'monospace' }}>Running analysis...</span>
    </div>

  </div>
);

/* ═══════════════════════════════════════════════════════
   SLIDE 3 — Orbiting Data Tools (Python, SQL, Tableau, etc.)
   ═══════════════════════════════════════════════════════ */
const Slide3 = () => (
  <div style={{
    width:'100%', height:'100%',
    background:'#FAF8F4',
    borderRadius:28,
    position:'relative',
    overflow:'hidden',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }}>

    {/* Dot grid */}
    <div style={{ position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage:'radial-gradient(circle,rgba(44,42,36,0.05) 1px,transparent 1px)',
      backgroundSize:'16px 16px' }}/>

    <div style={{ position:'relative', width:320, height:320 }}>

      {/* Orbit rings */}
      <svg width="320" height="320" viewBox="0 0 320 320"
        style={{ position:'absolute', inset:0 }}>
        <circle cx="160" cy="160" r="125"
          fill="none" stroke="rgba(44,42,36,0.07)"
          strokeWidth="1.5" strokeDasharray="5 5"/>
        <circle cx="160" cy="160" r="80"
          fill="none" stroke="rgba(44,42,36,0.05)"
          strokeWidth="1" strokeDasharray="4 6"/>
      </svg>

      {/* OUTER ORBIT — (Python, SQL, Tableau, Power BI) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        {/* Python — top */}
        <div style={{ position:'absolute', top:0, left:'50%',
          transform:'translateX(-50%)', width:56, height:56 }}>
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
            style={{ width:56, height:56, borderRadius:16,
            background:'#306998', border:'2px solid rgba(255,255,255,0.8)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 4px 16px rgba(0,0,0,0.1)', position:'relative',
            flexDirection:'column' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C9.2 2 8 3.2 8 5v2h4.5v1H6c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3h2v-2.5C8 14 9.3 13 11 13h4c1.1 0 2-.9 2-2V5c0-1.7-1.3-3-3-3h-2z" fill="#FFD43B"/>
              <path d="M12 22c2.8 0 4-1.2 4-3v-2h-4.5v-1H18c1.7 0 3-1.3 3-3v-4c0-1.7-1.3-3-3-3h-2v2.5c0 1.5-1.3 2.5-3 2.5h-4c-1.1 0-2 .9-2 2v6c0 1.7 1.3 3 3 3h2z" fill="#4584B6"/>
              <circle cx="10" cy="5.5" r="1" fill="white"/>
              <circle cx="14" cy="18.5" r="1" fill="white"/>
            </svg>
            <div style={{ position:'absolute', bottom:-18,
              fontSize:8, fontWeight:600, color:'#6B6A65',
              fontFamily:'Plus Jakarta Sans, sans-serif' }}>Python</div>
          </motion.div>
        </div>

        {/* SQL — right */}
        <div style={{ position:'absolute', top:'50%', right:0,
          transform:'translateY(-50%)', width:56, height:56 }}>
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
            style={{ width:56, height:56, borderRadius:16,
            background:'white', border:'1.5px solid #E8E6E0',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 4px 16px rgba(0,0,0,0.07)', position:'relative' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="7" rx="8" ry="3" stroke="#4A8FE7" strokeWidth="1.5" fill="#C4DCFA" fillOpacity="0.4"/>
              <path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="#4A8FE7" strokeWidth="1.5"/>
              <path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#4A8FE7" strokeWidth="1.5"/>
            </svg>
            <div style={{ position:'absolute', bottom:-18,
              fontSize:8, fontWeight:600, color:'#6B6A65',
              fontFamily:'Plus Jakarta Sans, sans-serif' }}>SQL</div>
          </motion.div>
        </div>

        {/* Tableau — bottom */}
        <div style={{ position:'absolute', bottom:0, left:'50%',
          transform:'translateX(-50%)', width:56, height:56 }}>
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
            style={{ width:56, height:56, borderRadius:16,
            background:'white', border:'1.5px solid #E8E6E0',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 4px 16px rgba(0,0,0,0.07)', position:'relative' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {/* Tableau cross pattern */}
              <rect x="11" y="1" width="2" height="8" fill="#E06B84"/>
              <rect x="8" y="4" width="8" height="2" fill="#E06B84"/>
              <rect x="11" y="15" width="2" height="8" fill="#4A8FE7"/>
              <rect x="8" y="18" width="8" height="2" fill="#4A8FE7"/>
              <rect x="1" y="11" width="8" height="2" fill="#FAC775"/>
              <rect x="4" y="8" width="2" height="8" fill="#FAC775"/>
              <rect x="15" y="11" width="8" height="2" fill="#3BA876"/>
              <rect x="18" y="8" width="2" height="8" fill="#3BA876"/>
              <rect x="11" y="11" width="2" height="2" fill="#2C2A24"/>
            </svg>
            <div style={{ position:'absolute', bottom:-18,
              fontSize:8, fontWeight:600, color:'#6B6A65',
              fontFamily:'Plus Jakarta Sans, sans-serif' }}>Tableau</div>
          </motion.div>
        </div>

        {/* Power BI — left */}
        <div style={{ position:'absolute', top:'50%', left:0,
          transform:'translateY(-50%)', width:56, height:56 }}>
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
            style={{ width:56, height:56, borderRadius:16,
            background:'#F2C811', border:'1.5px solid rgba(255,255,255,0.8)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 4px 16px rgba(0,0,0,0.07)', position:'relative' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="10" width="4" height="10" rx="2" fill="#2C2A24"/>
              <rect x="10" y="6" width="4" height="14" rx="2" fill="#2C2A24" opacity="0.7"/>
              <rect x="16" y="2" width="4" height="18" rx="2" fill="#2C2A24" opacity="0.4"/>
            </svg>
            <div style={{ position:'absolute', bottom:-18,
              fontSize:7, fontWeight:600, color:'#6B6A65',
              fontFamily:'Plus Jakarta Sans, sans-serif', whiteSpace:'nowrap' }}>Power BI</div>
          </motion.div>
        </div>
      </motion.div>

      {/* INNER ORBIT — (Pandas, scikit-learn) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        {/* Pandas */}
        <div style={{ position:'absolute', top:78, right:75, width:48, height:48 }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            style={{ width:48, height:48, borderRadius:14,
            background:'#150458',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 4px 16px rgba(0,0,0,0.15)', position:'relative' }}>
            <span style={{ fontSize:10, fontWeight:800, color:'white',
              fontFamily:'monospace' }}>pd</span>
          </motion.div>
        </div>

        {/* scikit-learn */}
        <div style={{ position:'absolute', bottom:78, left:75, width:48, height:48 }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            style={{ width:48, height:48, borderRadius:14,
            background:'#F09B36', border:'1.5px solid rgba(255,255,255,0.8)',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 4px 16px rgba(0,0,0,0.1)', position:'relative' }}>
            <span style={{ fontSize:8, fontWeight:800, color:'white',
              fontFamily:'monospace' }}>sk</span>
          </motion.div>
        </div>
      </motion.div>

      {/* CENTER — Data icon */}
      <div style={{
        position:'absolute',
        top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        width:80, height:80,
        borderRadius:'50%',
        background:'white',
        border:'2px solid #E8E6E0',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        zIndex:5,
        boxShadow:'0 4px 20px rgba(0,0,0,0.08)',
        flexDirection:'column', gap:2,
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="#2C2A24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6"/>
        </svg>
        <span style={{ fontSize:7, fontWeight:700, color:'#6B6A65',
          fontFamily:'Plus Jakarta Sans, sans-serif' }}>Data Stack</span>
      </div>

    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════
   SLIDE 4 — Data Pipeline Flow Visualization
   ═══════════════════════════════════════════════════════ */
const Slide4 = () => (
  <div style={{
    width:'100%', height:'100%',
    background:'linear-gradient(135deg, #C8E6D8 0%, #e0f0e8 100%)',
    borderRadius:28,
    position:'relative',
    overflow:'hidden',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
  }}>

    {/* Dot grid */}
    <div style={{ position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage:'radial-gradient(circle,rgba(44,42,36,0.04) 1px,transparent 1px)',
      backgroundSize:'16px 16px' }}/>

    {/* Blobs */}
    <div style={{ position:'absolute', width:200, height:200,
      borderRadius:'50%', background:'rgba(255,255,255,0.2)',
      top:-40, right:-40, pointerEvents:'none' }}/>

    <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:12, position:'relative', zIndex:5 }}>

      {/* Title */}
      <div style={{ textAlign:'center', marginBottom:4 }}>
        <div style={{ fontSize:9, fontWeight:600, color:'#3BA876', letterSpacing:2,
          textTransform:'uppercase', fontFamily:'Plus Jakarta Sans, sans-serif', marginBottom:4 }}>Data Pipeline</div>
        <div style={{ fontSize:15, fontWeight:700, color:'#2C2A24',
          fontFamily:'Clash Display, sans-serif' }}>From Raw Data to Insight</div>
      </div>

      {/* Pipeline steps */}
      {[
        { step:'01', title:'Ingest', desc:'CSV, APIs, Databases',
          icon:(
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A8FE7" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          ),
          color:'#C4DCFA', accent:'#4A8FE7' },
        { step:'02', title:'Clean & Transform', desc:'Pandas, Null handling, Feature Eng.',
          icon:(
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E06B84" strokeWidth="2" strokeLinecap="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
          ),
          color:'#F9C8D4', accent:'#E06B84' },
        { step:'03', title:'Analyze & Model', desc:'SQL, scikit-learn, Statistics',
          icon:(
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M14.5 9l-3 6h1l-3 6"/>
            </svg>
          ),
          color:'#FAE8C0', accent:'#D4A017' },
        { step:'04', title:'Visualize & Report', desc:'Tableau, Power BI, Dashboards',
          icon:(
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3BA876" strokeWidth="2" strokeLinecap="round">
              <path d="M18 20V10M12 20V4M6 20v-6"/>
            </svg>
          ),
          color:'#C8E6D8', accent:'#3BA876' },
      ].map((item, i) => (
        <div key={i} style={{ display:'flex', alignItems:'center', gap:10 }}>

          {/* Step number */}
          <div style={{
            width:32, minWidth:32, height:32, borderRadius:10,
            background:item.color, display:'flex', alignItems:'center',
            justifyContent:'center', flexShrink:0,
          }}>
            {item.icon}
          </div>

          {/* Content */}
          <div style={{
            flex:1, background:'white', borderRadius:12,
            padding:'10px 14px', border:'1px solid rgba(255,255,255,0.9)',
            boxShadow:'0 2px 12px rgba(0,0,0,0.05)',
            display:'flex', alignItems:'center', justifyContent:'space-between',
          }}>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:'#2C2A24',
                fontFamily:'Clash Display, sans-serif' }}>{item.title}</div>
              <div style={{ fontSize:8, color:'#9B9A95',
                fontFamily:'Plus Jakarta Sans, sans-serif', marginTop:1 }}>{item.desc}</div>
            </div>
            <div style={{ fontSize:10, fontWeight:700, color:item.accent,
              fontFamily:'Clash Display, sans-serif' }}>{item.step}</div>
          </div>

          {/* Connector arrow (except last) */}
          {i < 3 && (
            <div style={{ position:'absolute', right:-2,
              transform:'translateX(100%)',
              pointerEvents:'none' }}>
            </div>
          )}
        </div>
      ))}

      {/* Bottom floating badge */}
      <div style={{
        alignSelf:'center', marginTop:4,
        background:'white', borderRadius:999,
        padding:'6px 16px', display:'flex', alignItems:'center', gap:6,
        boxShadow:'0 2px 12px rgba(0,0,0,0.06)',
        border:'1px solid rgba(255,255,255,0.9)',
      }}>
        <div style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e',
          animation:'livePulse 2s ease-in-out infinite' }}/>
        <span style={{ fontSize:9, fontWeight:600, color:'#2C2A24',
          fontFamily:'Plus Jakarta Sans, sans-serif' }}>10 hrs/week saved</span>
      </div>

    </div>

    {/* Sparkle dots */}
    {[
      { top:40, left:30, size:6, color:'#F9C8D4' },
      { top:120, right:20, size:5, color:'#C4DCFA' },
      { bottom:50, left:20, size:7, color:'#FAE8C0' },
    ].map((dot, i) => (
      <div key={i} style={{
        position:'absolute', width:dot.size, height:dot.size,
        borderRadius:'50%', background:dot.color,
        top:dot.top, left:dot.left, right:dot.right, bottom:dot.bottom,
        pointerEvents:'none', zIndex:3,
      }}/>
    ))}

  </div>
);
