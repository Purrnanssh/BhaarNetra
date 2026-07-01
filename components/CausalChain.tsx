"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { TruckGlyph } from "./TruckGlyph";
import { ReferenceLink } from "./ReferenceLink";

const problemChain = [
  {
    id: "01",
    label: "Overloaded vehicle",
    detail: "Private operators benefit from carrying extra weight.",
    visual: "truck",
  },
  {
    id: "02",
    label: "Accelerated damage",
    detail: <>Pavement deteriorates significantly faster than designed.<ReferenceLink id="PE-01" /></>,
    visual: "road-damage",
  },
  {
    id: "03",
    label: "Maintenance burden",
    detail: <>Premature intervention required on the highway network.<ReferenceLink id="PE-01" /></>,
    visual: "maintenance",
  },
  {
    id: "04",
    label: "Public cost",
    detail: <>Resulting damage is paid through public maintenance budgets.<ReferenceLink id="PE-01" /></>,
    visual: "public-burden",
  },
];

export function CausalChain() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reducedMotion = useReducedMotion();

  return (
    <>
      <div className="section-eyebrow mono" style={{ marginBottom: '24px', letterSpacing: '0.1em', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
        HOW OVERLOAD BECOMES PUBLIC COST
      </div>
      <div className="causal-chain" ref={ref}>
      <div className="causal-chain__problems">
        {problemChain.map((item, index) => (
          <motion.article
            key={item.id}
            className={`causal-chain__problem problem-${index + 1}`}
            initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20, boxShadow: "0 0px 0px rgba(0, 0, 0, 0)" }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, boxShadow: "0 0px 0px rgba(0, 0, 0, 0)" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={!reducedMotion ? { 
              y: -4, 
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.3, delay: 0 }
            } : {}}
          >
            <span className="causal-chain__index mono">{item.id}</span>
            <div className={`causal-chain__visual is-${item.visual}`}>
              {item.visual === "truck" && <TruckGlyph overloaded />}
              
              {item.visual === "road-damage" && (
                <svg viewBox="0 0 240 100" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '100%', height: 'auto', maxWidth: '120px' }}>
                  <path d="M20 30h70l15 15h30l15-15h70" />
                  <path d="M20 50h70l15 15h30l15-15h70" strokeOpacity="0.5" />
                  <path d="M20 70h70l15 15h30l15-15h70" strokeOpacity="0.2" />
                  <path d="M120 5v15M110 15l10 10l10-10" />
                </svg>
              )}

              {item.visual === "maintenance" && (
                <svg viewBox="0 0 240 100" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '100%', height: 'auto', maxWidth: '120px' }}>
                  <path d="M20 90h200" />
                  <path d="M60 90L75 50h10L90 90" strokeLinejoin="round" />
                  <path d="M65 75h20" />
                  <path d="M120 90L130 50M180 90L170 50" />
                  <rect x="110" y="55" width="80" height="15" fill="currentColor" fillOpacity="0.15" />
                  <path d="M110 55L125 70M130 55L145 70M150 55L165 70M170 55L185 70" />
                </svg>
              )}

              {item.visual === "public-burden" && (
                <svg viewBox="0 0 240 100" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '100%', height: 'auto', maxWidth: '120px' }}>
                  {/* Road */}
                  <path d="M20 80h200" strokeOpacity="0.3" />
                  <path d="M20 90h200" />
                  
                  {/* Maintenance barrier */}
                  <path d="M60 80L80 50h40l20 30" strokeLinejoin="round" />
                  <path d="M65 70h70M72 60h55" strokeOpacity="0.5" />
                  
                  {/* Warning sign */}
                  <polygon points="170,40 190,75 150,75" strokeLinejoin="round" />
                  <path d="M170 55v10M170 70v2" />
                  
                  {/* Financial implication lines */}
                  <path d="M120 20L40 50" strokeOpacity="0.4" strokeDasharray="4 4" />
                </svg>
              )}
            </div>
            <div className="causal-chain__content">
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
            <div className={`causal-chain__arrow${index === problemChain.length - 1 ? ' causal-chain__arrow--final' : ''}`} aria-hidden="true">
              →
            </div>
          </motion.article>
        ))}
      </div>

      <motion.article
        className="causal-chain__intervention"
        initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.98, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)" }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.98, boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)" }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        whileHover={!reducedMotion ? {
          y: -4,
          scale: 1,
          boxShadow: "0 16px 48px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.3, delay: 0, ease: "easeOut" }
        } : {}}
      >
        <div className="intervention__header">
          <span className="causal-chain__index mono" style={{ color: "#FFFFFF" }}>SYSTEM INTERVENTION</span>
          <h3>BhaarNetra Intervention</h3>
        </div>
        
        <div className="intervention__diagram">
          <svg viewBox="0 0 400 160" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '100%', height: 'auto' }}>
            {/* Roadway / WIM Sensors */}
            <path d="M40 140h320" strokeOpacity="0.4" />
            <rect x="100" y="136" width="40" height="8" fill="currentColor" fillOpacity="0.8" />
            <rect x="160" y="136" width="40" height="8" fill="currentColor" fillOpacity="0.8" />
            <text x="150" y="155" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" strokeWidth="0">CERTIFIED WIM ARRAY</text>

            {/* Gantry / ANPR & FASTag */}
            <path d="M60 140V40h280v100" strokeOpacity="0.6" />
            <rect x="180" y="30" width="40" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
            <path d="M190 50L170 90M210 50L230 90" strokeDasharray="4 4" strokeOpacity="0.5" />
            <circle cx="200" cy="40" r="4" fill="currentColor" />
            <text x="200" y="22" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" strokeWidth="0">ANPR / FASTAG</text>

            {/* Data Flow / Output */}
            <path d="M260 90h40" strokeOpacity="0.4" />
            <path d="M295 85l5 5-5 5" strokeOpacity="0.4" />
            
            <rect x="310" y="60" width="70" height="60" rx="4" fill="currentColor" fillOpacity="0.05" strokeOpacity="0.8" />
            <path d="M320 75h40M320 90h50M320 105h30" strokeOpacity="0.6" strokeWidth="3" />
            <text x="345" y="50" fill="currentColor" fontSize="10" fontFamily="monospace" textAnchor="middle" strokeWidth="0">EVIDENCE</text>
          </svg>
        </div>

        <ul className="intervention__points">
          <li><strong>Certified Measurement</strong></li>
          <li><strong>Identity Linkage</strong></li>
          <li><strong>Automatic Enforcement</strong></li>
        </ul>
      </motion.article>
    </div>
    </>
  );
}
