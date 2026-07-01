"use client";

import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { ReferenceLink } from "./ReferenceLink";

export function FloatingLogo() {
  return (
    <div className="floating-logo">
      <Link href="/" aria-label="BhaarNetra Home">
        <div className="liquid-glass-pill">
          <BrandMark />
        </div>
      </Link>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand-col">
          <BrandMark className="footer-brand" />
          <div className="site-footer__tagline">National Digital Public Infrastructure for Highway Asset Protection.<ReferenceLink id="PE-07" /></div>
        </div>
        
        <nav aria-label="Footer navigation" className="site-footer__nav-col">
          <strong>Appendix</strong>
          <Link href="/references" target="_blank" rel="noopener noreferrer">Literature & Standards</Link>
          <Link href="/methodology" target="_blank" rel="noopener noreferrer">Methodology</Link>
          <Link href="/glossary" target="_blank" rel="noopener noreferrer">Glossary</Link>
          <Link href="/revisions" target="_blank" rel="noopener noreferrer">Revision History</Link>
        </nav>

        <nav aria-label="Primary actions" className="site-footer__nav-col">
          <strong>Actions</strong>
          <Link href="/architecture">Review the architecture</Link>
          <Link href="/method">Inspect method &amp; status</Link>
        </nav>

        <div className="site-footer__meta-col mono">
          <strong>Version</strong>
          <span>1.0</span>
          <div className="spacer" />
          <strong>Updated</strong>
          <span>June 2026</span>
        </div>
        <div className="site-footer__meta-col mono">
          <strong>Prepared For</strong>
          <span style={{ maxWidth: "200px", lineHeight: "1.4" }}>National Highways Authority of India (NHAI)</span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__credits">
          <p>Built by Purrananssh Sinha</p>
          <p>© {new Date().getFullYear()} BhaarNetra</p>
        </div>
        <div className="site-footer__links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
