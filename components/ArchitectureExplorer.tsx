"use client";

import { motion } from "framer-motion";
import { strategicCapabilities } from "@/data/content";
import { TruckGlyph } from "./TruckGlyph";

function CapabilityGraphic({ id }: { id: string }) {
  switch (id) {
    case "edge":
      return (
        <div className="capability-scene capability-scene--edge">
          <div className="scene-road">
            <i className="wim-sensor" />
            <i className="wim-sensor" />
            <i className="wim-sensor" />
            <motion.div className="wim-pulse" animate={{ x: [0, 60], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
          </div>
          <TruckGlyph className="scene-truck" />
          <div className="scene-cabinet">
            <span className="cabinet-antenna" />
            <motion.span className="cabinet-signal" animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            <span className="cabinet-light" />
            <div className="cabinet-vent" />
            <span className="cabinet-label">EDGE AI</span>
          </div>
        </div>
      );
    case "legal":
      return (
        <div className="capability-scene capability-scene--legal">
          <div className="scene-scale">
            <div className="scale-platform" />
            <div className="scale-indicator" />
          </div>
          <TruckGlyph className="scene-truck" overloaded />
          
          {/* ANPR Camera */}
          <div className="scene-camera-pole">
             <div className="camera-box">
                <motion.div className="camera-flash" animate={{ opacity: [0, 1, 0, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
             </div>
          </div>

          <div className="scene-certificate">
             <span className="cert-header">EVIDENCE</span>
             <div className="cert-rows">
                <span className="cert-row" />
                <span className="cert-row" />
                <span className="cert-row" />
             </div>
             <span className="cert-hash">SHA-256</span>
             <div className="cert-seal">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="seal-inner" />
             </div>
          </div>
        </div>
      );
    case "integration":
      return (
        <div className="capability-scene capability-scene--integration">
          <div className="scene-gantry">
            <div className="gantry-pillar" />
            <div className="gantry-beam" />
            <div className="gantry-reader">
               <i className="reader-lens" />
            </div>
            <div className="gantry-reader">
               <i className="reader-lens" />
            </div>
            <motion.div className="scene-rfid-cone" animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
          <TruckGlyph className="scene-truck" />
          <motion.div className="db-badge" initial={{ opacity: 0, y: 10 }} animate={{ opacity: [0, 1, 1, 0], y: [10, 0, -5, -15] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
             <span className="db-badge-text">IDENTITY VERIFIED</span>
          </motion.div>
        </div>
      );
    case "intelligence":
      return (
        <div className="capability-scene capability-scene--intelligence">
          <div className="scene-intelligence-view">
            <div className="intel-map-overlay">
              <div className="intel-highway-line intel-highway-line--main">
                 <motion.div className="data-blip" animate={{ left: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              </div>
              <div className="intel-highway-line intel-highway-line--branch1">
                 <motion.div className="data-blip" animate={{ left: ["0%", "100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
              </div>
              <div className="intel-highway-line intel-highway-line--branch2" />
              <div className="intel-hotspot intel-hotspot--moderate" style={{ top: '35%', left: '35%' }} />
              <div className="intel-hotspot intel-hotspot--severe" style={{ top: '65%', right: '25%' }} />
            </div>
            <div className="intel-operator-panel">
              <div className="intel-stat">
                <span className="intel-label mono">OVERLOAD DENSITY</span>
                <span className="intel-value" style={{ color: '#FFFFFF' }}>14.2%</span>
              </div>
              <div className="intel-stat">
                <span className="intel-label mono">ACTIVE CORRIDORS</span>
                <span className="intel-value">12</span>
              </div>
            </div>
            <TruckGlyph className="scene-truck scene-truck--map" overloaded />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function ArchitectureExplorer() {
  return (
    <div className="strategic-capabilities">
      <div className="strategic-capabilities__grid">
        {strategicCapabilities.map((cap, index) => (
          <motion.article 
            key={cap.id} 
            className="capability-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="capability-block__visual">
              <CapabilityGraphic id={cap.id} />
            </div>
            <div className="capability-block__content">
              <span className="mono">{cap.index}</span>
              <h3>{cap.title}</h3>
              <p>{cap.copy}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
