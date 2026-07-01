import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureExplorer } from "@/components/ArchitectureExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter, FloatingLogo } from "@/components/SiteChrome";
import { TechnicalDepth } from "@/components/TechnicalDepth";

export const metadata: Metadata = {
  title: "Technical Architecture",
  description:
    "The four-plane system, event flow, domain ownership and security architecture behind BhaarNetra.",
};

const topics = [
  ["transit.detected", "{ edge_id, ts, plate?, class?, screen_weight }"],
  ["vehicle.flagged", "{ transit_id, reason, threshold }"],
  ["weight.certified", "{ transit_id, cert_weight, cert_id, calib_ref }"],
  ["identity.resolved", "{ transit_id, vehicle_id, owner_id, legal_gvw }"],
  ["penalty.computed", "{ transit_id, overload_pct, penalty_amount }"],
  ["evidence.sealed", "{ transit_id, evidence_hash, chain_prev }"],
  ["settlement.initiated", "{ penalty_id, rail_ref, status }"],
  ["analytics.updated", "{ corridor_id, window, metrics }"],
] as const;

export default function ArchitecturePage() {
  return (
    <>
      <FloatingLogo />
      <main id="main" className="deep-page">
        <header className="deep-hero">
          <div className="page-shell">
            <div className="deep-hero__back mono">
              <Link href="/">← Return to narrative</Link>
              <span>ARCHITECTURE BIBLE · D3</span>
            </div>
            <span className="eyebrow mono">THE SYSTEM CONTRACT</span>
            <h1>Four planes from roadside measurement to national intelligence.</h1>
            <p>
              Screen 100% of trucks cheaply, adjudicate only the flagged
              minority on certified instruments, then make the consequence
              identity-linked, automatic and legally defensible.
            </p>
            <div className="deep-hero__rules mono">
              <span>PLAZA-INDEPENDENT</span>
              <span>CERTIFIED-ONLY ADJUDICATION</span>
              <span>AI ≠ LEGAL WEIGHT</span>
              <span>APPEND-ONLY EVIDENCE</span>
            </div>
          </div>
        </header>

        <section className="narrative-section">
          <div className="page-shell">
            <SectionHeading
              index="01"
              eyebrow="Plane architecture"
              title="Read this diagram as the contract."
              copy="Every implementation detail must preserve these boundaries, even when the MVP runs the services as modules inside one process."
            />
            <ArchitectureExplorer />
          </div>
        </section>

        <section className="narrative-section architecture-sequence">
          <div className="page-shell">
            <SectionHeading
              index="02"
              eyebrow="Flagged vehicle sequence"
              title="One transit, ten controlled transitions."
            />
            <div className="sequence-diagram">
              {[
                ["Vehicle", "passes instrumented corridor"],
                ["Edge", "fuses weight + plate + class"],
                ["Tier 1", "raises probable-overload flag"],
                ["Tier 2", "produces certified weight"],
                ["Vehicle Service", "resolves VAHAN / FASTag identity"],
                ["Penalty Engine", "computes from certified weight"],
                ["Evidence", "seals package + chain hash"],
                ["Settlement", "initiates rail call + notice"],
                ["Analytics", "updates scoped dashboards"],
              ].map(([actor, action], index) => (
                <article key={actor}>
                  <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{actor}</strong>
                    <p>{action}</p>
                  </div>
                  <i aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="narrative-section event-topics">
          <div className="page-shell">
            <SectionHeading
              index="03"
              eyebrow="Event flow"
              title="Domain events make the chain replayable and auditable."
              copy="Edge reconnection can replay in order; services consume explicit state transitions instead of reaching into one another’s data."
            />
            <div className="event-topics__list">
              {topics.map(([topic, payload]) => (
                <article key={topic}>
                  <code>{topic}</code>
                  <span aria-hidden="true">→</span>
                  <pre>{payload}</pre>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="narrative-section architecture-boundaries">
          <div className="page-shell">
            <SectionHeading
              index="04"
              eyebrow="Failure and trust boundaries"
              title="The strongest guarantees sit where a court would look."
            />
            <div className="boundary-grid">
              <article>
                <span className="mono">EDGE AUTONOMY</span>
                <h3>No transit is lost to a dropped link.</h3>
                <p>
                  Local durable buffering precedes uplink. Reconnect replay is
                  ordered and deduplicated.
                </p>
              </article>
              <article>
                <span className="mono">CERTIFIED PROVENANCE</span>
                <h3>Screening data can be approximate. Evidence cannot.</h3>
                <p>
                  Legal weight retains certificate, instrument and calibration
                  references.
                </p>
              </article>
              <article>
                <span className="mono">DOMAIN OWNERSHIP</span>
                <h3>Only the Penalty Engine writes penalties.</h3>
                <p>
                  Services exchange IDs and events; they never modify another
                  domain’s tables.
                </p>
              </article>
              <article>
                <span className="mono">IMMUTABILITY</span>
                <h3>Evidence and audit are write-once.</h3>
                <p>
                  Alteration breaks the hash chain and is visible under legal
                  or administrative review.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="narrative-section">
          <div className="page-shell">
            <SectionHeading
              index="05"
              eyebrow="Service catalogue"
              title="National services; MVP modules with the same boundaries."
            />
            <TechnicalDepth />
          </div>
        </section>

        <section className="deep-cta">
          <div className="page-shell">
            <span className="eyebrow mono">NEXT: OPERATING PROOF</span>
            <h2>Watch the architecture become one enforcement record.</h2>
            <Link className="action-button" href="/demo">
              <span>Open demonstration</span>
              <i aria-hidden="true">→</i>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
