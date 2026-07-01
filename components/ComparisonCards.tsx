"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ReferenceLink } from "./ReferenceLink";

type Capability = {
  label: string;
  status: "pass" | "partial" | "fail";
  note: string;
};

type ComparisonMethod = {
  name: string;
  capabilities: Capability[];
  isBhaarNetra?: boolean;
};

const methods: ComparisonMethod[] = [
  {
    name: "Static Weighbridges",
    capabilities: [
      { label: "Coverage", status: "fail", note: "Samples a fraction" },
      { label: "Evidence", status: "pass", note: "Accurate when used" },
      { label: "Identity", status: "fail", note: "Separate process" },
      { label: "Enforcement", status: "fail", note: "Easily bypassed" },
    ],
  },
  {
    name: "Manual Enforcement",
    capabilities: [
      { label: "Coverage", status: "fail", note: "Sparse coverage" },
      { label: "Evidence", status: "partial", note: "Varies by process" },
      { label: "Identity", status: "partial", note: "Operator-led" },
      { label: "Enforcement", status: "fail", note: "Rent-seeking exposure" },
    ],
  },
  {
    name: "Camera Systems",
    capabilities: [
      { label: "Coverage", status: "pass", note: "Continuous" },
      { label: "Evidence", status: "fail", note: "Not admissible" },
      { label: "Identity", status: "partial", note: "ANPR possible" },
      { label: "Enforcement", status: "fail", note: "Trivially defeated" },
    ],
  },
  {
    name: "Existing WIM",
    capabilities: [
      { label: "Coverage", status: "partial", note: "Isolated patches" },
      { label: "Evidence", status: "partial", note: "Not centralized" },
      { label: "Identity", status: "fail", note: "Often disconnected" },
      { label: "Enforcement", status: "fail", note: "No automatic penalty" },
    ],
  },
  {
    name: "BhaarNetra",
    isBhaarNetra: true,
    capabilities: [
      { label: "Coverage", status: "pass", note: "100% corridor screening" },
      { label: "Evidence", status: "pass", note: "Certified Tier 2" },
      { label: "Identity", status: "pass", note: "ANPR + VAHAN + FASTag" },
      { label: "Enforcement", status: "pass", note: "Automatic + auditable" },
    ],
  },
];

function StatusIndicator({ status }: { status: "pass" | "partial" | "fail" }) {
  if (status === "pass") {
    return (
      <span className="cc-status cc-status--pass" aria-label="Supported">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3 7.5L5.5 10L11 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className="cc-status cc-status--partial" aria-label="Partial">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3.5 7h7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="cc-status cc-status--fail" aria-label="Not supported">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M4 4l6 6M10 4l-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function ComparisonCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();

  return (
    <div className="cc-container" ref={ref}>
      {/* Capability axis labels */}
      <div className="cc-axis mono" aria-hidden="true">
        <span>Coverage</span>
        <span>Evidence</span>
        <span>Identity</span>
        <span>Enforcement</span>
      </div>

      {/* Competitor cards row */}
      <div className="cc-grid">
        {methods
          .filter((m) => !m.isBhaarNetra)
          .map((method, index) => (
            <motion.article
              key={method.name}
              className="cc-card"
              initial={{
                opacity: reducedMotion ? 1 : 0,
                y: reducedMotion ? 0 : 24,
              }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 24,
              }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <h3 className="cc-card__title">{method.name}</h3>
              <div className="cc-card__capabilities">
                {method.capabilities.map((cap) => (
                  <div key={cap.label} className="cc-cap">
                    <div className="cc-cap__row">
                      <StatusIndicator status={cap.status} />
                      <span className="cc-cap__label mono">{cap.label}</span>
                    </div>
                    <span className="cc-cap__note">{cap.note}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
      </div>

      {/* BhaarNetra hero card */}
      {methods
        .filter((m) => m.isBhaarNetra)
        .map((method) => (
          <motion.article
            key={method.name}
            className="cc-card cc-card--integrated"
            initial={{
              opacity: reducedMotion ? 1 : 0,
              y: reducedMotion ? 0 : 32,
            }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 32,
            }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <div className="cc-hero__title-area">
              <h3 className="cc-hero__title">{method.name}</h3>
              <p className="cc-hero__subtitle">
                The only system that combines all four.
              </p>
            </div>
            <div className="cc-card__capabilities cc-hero__capabilities">
              {method.capabilities.map((cap) => (
                <div key={cap.label} className="cc-cap cc-hero__cap">
                  <div className="cc-cap__row">
                    <StatusIndicator status={cap.status} />
                    <span className="cc-cap__label mono">{cap.label}</span>
                  </div>
                  <span className="cc-cap__note cc-hero__note">{cap.note}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}

      {/* Conclusion line */}
      <motion.p
        className="cc-conclusion"
        initial={{ opacity: reducedMotion ? 1 : 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        No existing system combines continuous screening, certified
        measurement, identity linkage, and automatic consequence.<ReferenceLink id="PE-02" />
      </motion.p>
    </div>
  );
}
