"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REF_DATA: Record<string, { symbol: string, title: string, subtitle: string }> = {
  "PE-01": { symbol: "01", title: "Pavement Engineering", subtitle: "Fourth Power Law" },
  "PE-02": { symbol: "07", title: "Enforcement Strategy", subtitle: "Continuous Corridor Enforcement" },
  "PE-03": { symbol: "02", title: "Physical Infrastructure", subtitle: "Weigh-In-Motion Standards" },
  "PE-04": { symbol: "08", title: "Identity Resolution", subtitle: "Vehicle Identification" },
  "PE-05": { symbol: "05", title: "Legal Metrology", subtitle: "Regulatory Standards" },
  "PE-06": { symbol: "06", title: "Chain of Custody", subtitle: "Digital Evidence & Auditability" },
  "PE-07": { symbol: "03", title: "Public Infrastructure", subtitle: "Highway Asset Management" },
  "PE-08": { symbol: "04", title: "Public Safety", subtitle: "Heavy Vehicle Risk" },
  "PE-09": { symbol: "09", title: "Network Intelligence", subtitle: "Freight Analytics & Monitoring" },
};

export function ReferenceLink({ id }: { id: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const data = REF_DATA[id] || { symbol: "?", title: id, subtitle: "Unknown Reference" };

  return (
    <span 
      className="reference-wrapper" 
      style={{ position: 'relative', display: 'inline', whiteSpace: 'nowrap' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={`/references#${id.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "8px",
          verticalAlign: "super",
          lineHeight: 0,
          opacity: 0.35,
          color: "inherit",
          textDecoration: "none",
          marginLeft: "0px",
          letterSpacing: "normal",
          fontFamily: "inherit",
          transition: "opacity 0.2s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "0.35"}
        aria-label={`View technical reference ${id}`}
      >
        {data.symbol}
      </Link>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginBottom: '8px',
              width: 'max-content',
              minWidth: '180px',
              backgroundColor: 'rgba(20, 20, 20, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              zIndex: 50,
              pointerEvents: 'none',
              textAlign: 'left'
            }}
          >

            <div style={{ fontSize: '13px', fontWeight: 500, color: '#fff', marginBottom: '2px', lineHeight: 1.4 }}>
              {data.title}
            </div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', lineHeight: 1.4 }}>
              {data.subtitle}
            </div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View Reference <span style={{ opacity: 0.5 }}>→</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
