import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, FloatingLogo } from "@/components/SiteChrome";
import { mvpRows } from "@/data/content";

export const metadata: Metadata = {
  title: "Method & Status",
  description:
    "The locked decisions, MVP boundaries and source documents governing the BhaarNetra showcase.",
};

const locked = [
  "The system is corridor-based and plaza-independent.",
  "Weight is measured on calibrated instruments, never inferred.",
  "FASTag is an identity and payment layer only.",
  "Tiered Weigh-In-Motion is the national design: screen wide, adjudicate narrow.",
  "AI is confined to detection, classification, analytics and intelligence—not legal weight adjudication.",
] as const;

const principles = [
  ["Evidence over assertion", "Every claim is paired with a number, mechanism or live artefact."],
  ["Clarity is the aesthetic", "Complexity is made legible; decoration is not used as explanation."],
  ["Restraint signals confidence", "Space, semantic colour and calm motion carry authority."],
  ["Depth on demand", "The main narrative remains clear; engineering detail is one interaction away."],
  ["Honesty as credibility", "Real, simulated, mocked and sample states are never blurred."],
] as const;

export default function MethodPage() {
  return (
    <>
      <FloatingLogo />
      <main id="main" className="method-page">
        <header className="method-page__header">
          <div className="page-shell">
            <Link href="/" className="mono">
              ← Return to narrative
            </Link>
            <span className="eyebrow mono">CREDITS / METHOD / STATUS</span>
            <h1>The decisions behind the public experience.</h1>
            <p>
              The showcase instantiates three governing documents without
              reopening their conclusions: the Project Definition Document,
              Master Technical Architecture D3, and Experience Bible D4.
            </p>
          </div>
        </header>

        <section className="method-page__section">
          <div className="page-shell">
            <div className="method-page__title">
              <span className="mono">01 · LOCKED</span>
              <h2>Foundational system decisions</h2>
            </div>
            <ol className="locked-list">
              {locked.map((item, index) => (
                <li key={item}>
                  <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="method-page__section">
          <div className="page-shell">
            <div className="method-page__title">
              <span className="mono">02 · EXPERIENCE</span>
              <h2>Instrument-grade civic design principles</h2>
            </div>
            <div className="principle-list">
              {principles.map(([title, copy], index) => (
                <article key={title}>
                  <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="method-page__section">
          <div className="page-shell">
            <div className="method-page__title">
              <span className="mono">03 · IMPLEMENTATION STATUS</span>
              <h2>Current MVP boundaries</h2>
            </div>
            <div className="honesty-table" role="region" aria-label="MVP implementation boundaries" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Status</th>
                    <th>Boundary</th>
                  </tr>
                </thead>
                <tbody>
                  {mvpRows.map(([component, status, boundary]) => (
                    <tr key={component}>
                      <th scope="row">{component}</th>
                      <td>
                        <span className={`status-chip status-chip--${status.toLowerCase()} mono`}>
                          {status}
                        </span>
                      </td>
                      <td>{boundary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="method-page__section method-page__sources">
          <div className="page-shell">
            <div className="method-page__title">
              <span className="mono">04 · SOURCE OF TRUTH</span>
              <h2>Governing documents</h2>
            </div>
            <div>
              <article>
                <span className="mono">PDD</span>
                <h3>Project Definition Document</h3>
                <p>
                  Identity, vision, mission, problem, solution, scope, success
                  metrics and public positioning.
                </p>
              </article>
              <article>
                <span className="mono">D3</span>
                <h3>Master Technical Architecture</h3>
                <p>
                  Planes, event flow, services, domain ownership, AI boundaries,
                  evidence, security and MVP implementation status.
                </p>
              </article>
              <article>
                <span className="mono">D4</span>
                <h3>Experience Bible</h3>
                <p>
                  Narrative order, instrument-grade civic language, motion,
                  3D, dashboard, accessibility and performance decisions.
                </p>
              </article>
            </div>
            <p className="method-page__notice mono">
              STATUS: PRE-DECISIONAL TECHNICAL SHOWCASE. NATIONAL-SCALE
              TOPOLOGY AND DASHBOARD VALUES ARE ILLUSTRATIVE UNLESS EXPLICITLY
              LABELLED OTHERWISE.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
