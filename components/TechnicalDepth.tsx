"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/data/content";

const details = [
  {
    title: "System architecture",
    code: "4-PLANE CONTRACT",
    body: "Roadside sensing and edge autonomy feed validated ingestion, bounded core services, then read-derived national intelligence. Each plane has a distinct failure boundary.",
    items: [
      "Roadside / Edge Plane",
      "Ingestion Plane",
      "Core Enforcement Plane",
      "Intelligence Plane",
    ],
  },
  {
    title: "Event pipeline",
    code: "ORDERED DOMAIN EVENTS",
    body: "Every transition is explicit and replayable. Edge events carry node identity and monotonic sequence so reconnect replay can be ordered and deduplicated.",
    items: [
      "transit.detected",
      "vehicle.flagged",
      "weight.certified",
      "identity.resolved",
      "penalty.computed",
      "evidence.sealed",
    ],
  },
  {
    title: "Evidence chain",
    code: "APPEND-ONLY",
    body: "Plate image, weight certificate, timestamps, sensor IDs, calibration reference and penalty record are sealed. Any later alteration breaks the chain.",
    items: [
      "Certified measurement provenance",
      "Sensor + calibration traceability",
      "Hash-linked package",
      "Separate immutable audit trail",
    ],
  },
  {
    title: "Penalty engine",
    code: "CERTIFIED INPUT ONLY",
    body: "The engine is the only service that decides a fine. It receives certified weight, class, legal GVW and verified identity; AI outputs never enter as legal weight.",
    items: [
      "Legal-limit lookup",
      "Certified weight comparison",
      "Overload magnitude",
      "Versioned penalty rule",
    ],
  },
] as const;

export function TechnicalDepth() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="technical-depth">
      <div className="technical-depth__accordions">
        {details.map((detail, index) => {
          const expanded = open === index;
          return (
            <article key={detail.title}>
              <button
                aria-expanded={expanded}
                aria-controls={`technical-panel-${index}`}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                <strong>{detail.title}</strong>
                <small className="mono">{detail.code}</small>
                <i aria-hidden="true">{expanded ? "−" : "+"}</i>
              </button>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    id={`technical-panel-${index}`}
                    className="technical-depth__panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div>
                      <p>{detail.body}</p>
                      <ul>
                        {detail.items.map((item) => (
                          <li key={item} className="mono">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>

      <div className="technical-depth__services">
        <div className="technical-depth__services-head">
          <span className="mono">NATIONAL SCALE</span>
          <h3>Bounded services. Explicit ownership.</h3>
        </div>
        {services.map((service) => (
          <article key={service.name}>
            <div>
              <span className="mono">{service.owns}</span>
              <h4>{service.name}</h4>
            </div>
            <p>{service.purpose}</p>
            <code>{service.event}</code>
          </article>
        ))}
      </div>
    </div>
  );
}
