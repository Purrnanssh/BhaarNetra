"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/SiteChrome";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function MethodologyPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
  };

  const titleSlot = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
      <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}>Methodology</span>
    </div>
  );

  return (
    <>
      <Navbar titleSlot={titleSlot} />
      <main id="main" className="deep-page" style={{ paddingTop: '80px' }}>
        <header className="deep-hero" style={{ minHeight: 'auto', display: 'block', paddingBottom: '64px', borderBottom: 'none' }}>
          <div className="page-shell">
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
              style={{ fontSize: '4rem', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '24px' }}
            >
              Methodology.
            </motion.h1>
            <motion.p 
              initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.15 }}
              style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '720px', marginBottom: '40px' }}
            >
              The technical assertions within this proposal are not arbitrary. This document outlines the stringent selection criteria applied to all literature, explaining why primary government publications and recognised engineering standards take absolute precedence over secondary summaries.
            </motion.p>
          </div>
        </header>

        <div className="page-shell" style={{ paddingBottom: '120px' }}>
          <section style={{ maxWidth: '720px' }}>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}
            >
              <h2 className="mono" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', margin: 0 }}>
                LITERATURE SELECTION CRITERIA
              </h2>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: '100px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px' }}>Primary Publications Take Precedence</h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
                We intentionally avoid linking to news articles, secondary summaries, or vendor whitepapers. Every engineering, legal, or operational claim must be traceable back to its primary source, such as a MoRTH notification, an IRC code, or an official OIML specification. If a primary source cannot be confidently verified, the claim is left unsupported with a placeholder until it can be formally validated.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: '100px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px' }}>Why We Prioritize Standards</h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
                The enforcement of commercial vehicles carries severe financial and legal implications. Consequently, the systems that measure and penalize these vehicles must be legally defensible. By strictly mapping technical claims to existing Legal Metrology frameworks and ISO/OIML guidelines, we ensure that the proposed architecture is not merely technologically feasible, but legally robust enough to withstand judicial scrutiny.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ marginBottom: '120px' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '24px' }}>How Citations Are Mapped</h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
                Citations are anchored to the conclusion of a logical claim block. Rather than clustering citations densely at the end of every sentence, they are strategically placed where a reviewer would naturally question the validity of an assertion. This maintains the readability of the proposal while ensuring absolute verifiability.
              </p>
            </motion.div>

            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}
            >
              Prepared as supporting technical literature.
            </motion.p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
