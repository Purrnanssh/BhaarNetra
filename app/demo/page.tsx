import type { Metadata } from "next";
import Link from "next/link";
import { LiveDemo } from "@/components/LiveDemo";
import { SiteFooter, FloatingLogo } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Interactive Demonstration",
  description:
    "Run a sample commercial vehicle through BhaarNetra’s tiered screening, certified adjudication and evidence pipeline.",
};

export default function DemoPage() {
  return (
    <>
      <FloatingLogo />
      <main id="main" className="demo-page">
        <header className="demo-page__header">
          <div>
            <Link href="/" className="mono">
              ← Return to narrative
            </Link>
            <span className="status-chip status-chip--sample mono">
              CURRENT MVP · INTERACTIVE SAMPLE
            </span>
          </div>
          <h1>One vehicle. One complete enforcement record.</h1>
          <p>
            Roadside weight and government rails are simulated or mocked exactly
            where the architecture specifies. The decision sequence, penalty
            logic and evidence state are demonstrated as the real software path.
          </p>
        </header>
        <section className="demo-page__workspace" aria-label="BhaarNetra live demonstration">
          <LiveDemo expanded />
        </section>
        <section className="demo-page__notes">
          <article>
            <span className="status-chip status-chip--real mono">REAL</span>
            <h2>Software logic</h2>
            <p>
              ANPR/classification path, tiered decision, configured penalty
              rule, evidence hash and dashboard state.
            </p>
          </article>
          <article>
            <span className="status-chip status-chip--simulated mono">
              SIMULATED
            </span>
            <h2>Roadside physics</h2>
            <p>
              Tier‑1 screening and Tier‑2 certified readings stand in for
              in-tarmac and Legal Metrology hardware.
            </p>
          </article>
          <article>
            <span className="status-chip status-chip--mocked mono">MOCKED</span>
            <h2>External rails</h2>
            <p>
              VAHAN, FASTag identity and settlement calls are represented by
              local interfaces and status transitions.
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
