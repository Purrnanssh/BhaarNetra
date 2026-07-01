"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue } from "framer-motion";
import { journeyStages } from "@/data/content";
import { TruckGlyph } from "./TruckGlyph";
import { ReferenceLink } from "./ReferenceLink";

const packetStates = [
  { label: "WT SENSOR", value: "34.2T" },
  { label: "PLATE", value: "HR 55 AB 2481" },
  { label: "FASTAG", value: "VERIFIED" },
  { label: "CLASS", value: "N3-RIGID-3A" },
  { label: "STATUS", value: "OVERLOAD DETECTED" },
  { label: "EVIDENCE", value: "SEALED" },
  { label: "PENALTY", value: "₹12,000" },
  { label: "SYNC", value: "COMMITTED" },
];

export function VehicleJourney() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      journeyStages.length - 1,
      Math.floor(latest * journeyStages.length)
    );
    if (next !== active) {
      setActive(next);
    }
  });

  // The truck wrapper takes 100% width, allowing GPU percentage transforms to match parent width
  const truckX = useTransform(scrollYProgress, (p) => `${p * 100}%`);
  // Perfect wheel synchronization based on distance
  const wheelRot = useTransform(scrollYProgress, (p) => p * 4000);

  return (
    <section
      className="journey"
      id="journey"
      ref={rootRef}
      aria-labelledby="journey-title"
    >
      <div className="journey__sticky">
        <div className="journey__header" style={{ position: 'relative' }}>
          <div className="section-heading__meta mono">
            <span>05</span>
            <span>Complete physical journey</span>
          </div>
          <h2 id="journey-title">The vehicle is the narrative spine.</h2>
          <p>Every commercial vehicle follows this exact physical sequence. The combination of WIM, ANPR, and FASTag enables 100% continuous enforcement.<ReferenceLink id="PE-02" /></p>
        </div>

        <div className="journey__stage">
          <div className="journey__tier-labels mono" style={{ display: "flex", justifyContent: "space-between" }}>
            <span className={active < 3 ? "is-active" : ""}>MEASUREMENT & ID</span>
            <span className={active >= 3 && active < 6 ? "is-active" : ""}>ADJUDICATION & EVIDENCE</span>
            <span className={active >= 6 ? "is-active" : ""}>PENALTY & REPORTING</span>
          </div>
          
          <div className="journey__rail" aria-hidden="true">
            <motion.div
              className="journey__rail-progress"
              style={{ width: "100%", scaleX: scrollYProgress, transformOrigin: "left", background: "#243a52", position: "absolute", bottom: "-2px", left: "0", height: "2px", zIndex: 1 }}
            />
            {journeyStages.map((stage, index) => (
              <i
                key={stage.id}
                className={index <= active ? "is-active" : ""}
                style={{ 
                  left: `${(index / (journeyStages.length - 1)) * 100}%`,
                  boxShadow: "none",
                  transition: "opacity 0.2s, border-width 0.2s, background-color 0.2s",
                  opacity: index <= active ? 1 : 0.4,
                  borderColor: index <= active ? "#243a52" : "var(--line-strong)",
                  borderWidth: index <= active ? "2px" : "1px",
                  backgroundColor: index <= active ? "#243a52" : "var(--bg)",
                  zIndex: 2
                }}
              />
            ))}
            <div 
              className="journey__wim-sensor"
              style={{
                position: 'absolute',
                left: '0',
                bottom: '-3px', /* Flush with the rail border */
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                zIndex: 1
              }}
              aria-hidden="true"
            >
              {/* Engineering-grade embedded sensor strips */}
              <div style={{ width: '4px', height: '6px', background: active === 0 ? '#243a52' : 'var(--line-strong)', transition: 'background-color 0.4s ease' }} />
              <div style={{ width: '4px', height: '6px', background: active === 0 ? '#243a52' : 'var(--line-strong)', transition: 'background-color 0.4s ease', transitionDelay: '0.1s' }} />
              <div style={{ width: '4px', height: '6px', background: active === 0 ? '#243a52' : 'var(--line-strong)', transition: 'background-color 0.4s ease', transitionDelay: '0.2s' }} />
              
              {/* Vertical measurement pulse */}
              {active === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 0, height: "0px" }}
                  animate={{ opacity: [0, 1, 0], y: [-5, -60], height: ["0px", "20px"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "circOut" }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: '6px',
                    width: '1px',
                    background: '#243a52',
                    marginLeft: '-0.5px'
                  }}
                />
              )}
            </div>

            <motion.div
              style={{
                position: "absolute",
                bottom: 8,
                left: 0,
                width: "100%",
                x: truckX,
                zIndex: 10
              }}
            >
              <div
                className={`journey__truck ${active >= 4 ? "is-flagged" : ""}`}
                style={{ 
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  transform: "translateX(-50%)",
                  transition: "none" 
                }}
              >
                <div className="journey__packet mono" style={{ display: "flex", gap: "6px", alignItems: "baseline", whiteSpace: "nowrap" }}>
                   <span className="packet-label">{packetStates[active].label}</span>
                   <span className="packet-value">{packetStates[active].value}</span>
                </div>
                <TruckGlyph overloaded={active >= 4} wheelRotation={wheelRot} />
              </div>
            </motion.div>
          </div>

          <div className="journey__readout" aria-live="polite" style={{ position: 'relative' }}>
          <div className="journey__count mono">
            <span>{journeyStages[active].id}</span>
            <span>/ 08</span>
          </div>
          <div>
            <span className="eyebrow mono">
              {journeyStages[active].eyebrow}
            </span>
            <h3>{journeyStages[active].title}</h3>
            <div 
              className="journey__metrics"
              style={journeyStages[active].metrics?.length === 5 ? { gridTemplateColumns: '1fr 1fr 1fr' } : undefined}
            >
              {journeyStages[active].metrics?.map((metric, i, arr) => {
                const isHero = active === 4 && i >= 2;
                const isFifth = arr.length === 5 && i === 4;
                return (
                  <div 
                    key={metric.label} 
                    className={`journey__metric ${isHero ? 'is-hero' : ''}`}
                    style={isFifth ? { gridColumn: 3, gridRow: '1 / span 2', justifyContent: 'center' } : undefined}
                  >
                    <span 
                      className="journey__metric-label"
                      style={metric.label === "Result" ? { color: "#4ADE80" } : undefined}
                    >
                      {metric.label}
                    </span>
                    <span className="journey__metric-value">{metric.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <code style={active === 4 ? { color: "#4ADE80" } : undefined}>{journeyStages[active].event}</code>
        </div>

          <ol className="journey__mobile-list">
            {journeyStages.map((stage) => (
              <li key={stage.id}>
                <span className="mono">{stage.id}</span>
                <div>
                  <small className="mono">{stage.eyebrow}</small>
                  <h3>{stage.title}</h3>
                  <code>{stage.event}</code>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
