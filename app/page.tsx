import Link from "next/link";
import GlowHorizonDemo from "@/components/sections/GlowHorizonDemo";
import { ArchitectureExplorer } from "@/components/ArchitectureExplorer";
import { CausalChain } from "@/components/CausalChain";
import { FourthPowerViz } from "@/components/FourthPowerViz";
import { LiveDemo } from "@/components/LiveDemo";
import { NationalNetwork } from "@/components/NationalNetwork";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteChrome";
import { Navbar } from "@/components/Navbar";
import { TechnicalDepth } from "@/components/TechnicalDepth";
import { VehicleJourney } from "@/components/VehicleJourney";
import { ComparisonCards } from "@/components/ComparisonCards";
import { mvpRows } from "@/data/content";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import { ReferenceLink } from "@/components/ReferenceLink";

const tiers: { id: string, title: string, copy: React.ReactNode, metric: string, note: string }[] = [
  {
    id: "TIER 1",
    title: "Monitor Everything",
    copy: <>Every commercial vehicle is screened using WIM, ANPR and FASTag data without interrupting traffic flow.<ReferenceLink id="PE-02" /></>,
    metric: "50,000+ vehicles/day",
    note: "Continuous monitoring",
  },
  {
    id: "TIER 2",
    title: "Verify Exceptions",
    copy: <>Only flagged vehicles proceed to certified legal-metrology verification and evidence generation.<ReferenceLink id="PE-05" /></>,
    metric: "~2,000 vehicles/day",
    note: "Certified review",
  },
  {
    id: "TIER 3",
    title: "Enforce Violations",
    copy: <>Confirmed overload cases automatically generate penalties, evidence packages and enforcement records.<ReferenceLink id="PE-06" /></>,
    metric: "~120 violations/day",
    note: "Legally admissible",
  },
];

const enforcementSteps: [string, string, React.ReactNode][] = [
  ["01", "Certified measurement", <>The adjudication path starts here—never from an AI estimate.<ReferenceLink id="PE-05" /></>],
  ["02", "Legal-limit lookup", "Vehicle class and registered GVW select the applicable rule."],
  ["03", "Penalty computation", "A versioned rule records overload magnitude and consequence."],
  ["04", "Evidence sealing", <>Certificate, images, calibration and timestamps are hash-linked.<ReferenceLink id="PE-06" /></>],
  ["05", "Settlement & notice", "The rail call and formal notice are logged as auditable events."],
];

export default function Home() {
  return (
    <>
      <ScrollRestoration />
      <GlowHorizonDemo />
      <main id="main">
        <Navbar />
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <div className="hero__scrim" aria-hidden="true" />
          <div className="hero__content">
            <SectionHeading
              as="h1"
              title={
                <>
                  <span style={{ display: "block", marginBottom: "16px" }}>
                    Highway Asset Protection.
                  </span>
                  <span style={{ whiteSpace: "nowrap" }}>
                    Every <span style={{ color: "#FFFFFF" }}>Passage Counts</span>.<ReferenceLink id="PE-01" />
                  </span>
                </>
              }
              copy={<>Every commercial vehicle already passes through infrastructure capable of supporting enforcement. BhaarNetra combines certified Weigh-In-Motion sensors, ANPR, and FASTag integration to identify overloaded trucks, generate legally defensible evidence, and automate enforcement.<ReferenceLink id="PE-02" /></>}
            />
            <div style={{ display: "flex", gap: "24px", marginTop: "56px", justifyContent: "center" }}>
              {/* Box 1 */}
              <div className="causal-chain__intervention" style={{ flex: "1 1 0%", width: "100%", padding: "40px 32px", backgroundColor: "rgb(32, 32, 32)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "8px" }}>Overload</span>
                    <strong style={{ display: "block", fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#FFFFFF", fontFamily: "var(--font-display)" }}>20%</strong>
                  </div>
                  <div style={{ flex: "0 0 auto", color: "rgba(255,255,255,0.15)", padding: "0 16px", transform: "translateY(10px)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="m14 6 6 6-6 6"/></svg>
                  </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "8px" }}>Damage</span>
                    <strong style={{ display: "block", fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#FFFFFF", fontFamily: "var(--font-display)" }}>2.0×<ReferenceLink id="PE-01" /></strong>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="causal-chain__intervention" style={{ flex: "1 1 0%", width: "100%", padding: "40px 32px", backgroundColor: "rgb(32, 32, 32)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "8px" }}>Overload</span>
                    <strong style={{ display: "block", fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#FFFFFF", fontFamily: "var(--font-display)" }}>30%</strong>
                  </div>
                  <div style={{ flex: "0 0 auto", color: "rgba(255,255,255,0.15)", padding: "0 16px", transform: "translateY(10px)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="m14 6 6 6-6 6"/></svg>
                  </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "8px" }}>Damage</span>
                    <strong style={{ display: "block", fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#FFFFFF", fontFamily: "var(--font-display)" }}>2.9×<ReferenceLink id="PE-01" /></strong>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="causal-chain__intervention" style={{ flex: "1 1 0%", width: "100%", padding: "40px 32px", backgroundColor: "rgb(32, 32, 32)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "8px" }}>Overload</span>
                    <strong style={{ display: "block", fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#FFFFFF", fontFamily: "var(--font-display)" }}>40%</strong>
                  </div>
                  <div style={{ flex: "0 0 auto", color: "rgba(255,255,255,0.15)", padding: "0 16px", transform: "translateY(10px)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="m14 6 6 6-6 6"/></svg>
                  </div>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "8px" }}>Damage</span>
                    <strong style={{ display: "block", fontSize: "3rem", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#FFFFFF", fontFamily: "var(--font-display)" }}>3.8×<ReferenceLink id="PE-01" /></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
                <section className="narrative-section problem" id="problem">
          <div className="page-shell">
            <SectionHeading
              index="01"
              eyebrow="The public cost chain"
              title={<>The load travels once. <span style={{ color: "#FFFFFF" }}>The damage remains</span>.</>}
              copy={<>A private operator may benefit from carrying extra weight, but the resulting road deterioration is ultimately paid for through public maintenance budgets.<ReferenceLink id="PE-01" /></>}
            />
            <CausalChain />
          </div>
        </section>

                <section className="narrative-section power-law">
          <div className="page-shell">
            <SectionHeading
              index="02"
              eyebrow="The fourth-power law"
              title={<><span style={{ color: "#FFFFFF" }}>20% overload</span> ≈ 2× road damage.</>}
              copy={
                <>
                  <span className="mono" style={{ display: "block", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "16px" }}>AASHTO Fourth-Power Law</span>
                  Road damage does not increase linearly with axle weight. A truck carrying 20% more load can generate roughly twice the pavement deterioration. This exponential relationship is why overload enforcement protects public infrastructure.<ReferenceLink id="PE-01" />
                </>
              }
            />
            <FourthPowerViz />
          </div>
        </section>

                <section className="narrative-section current-system" id="current-system">
          <div className="page-shell">
            <SectionHeading
              index="03"
              eyebrow="Toll plaza positioning"
              title={<>Leverage <span style={{ color: "#FFFFFF" }}>Existing Footprints</span>.</>}
              copy={<>Existing toll infrastructure already provides power, networking, lane discipline, and the FASTag ecosystem. BhaarNetra leverages this existing footprint rather than requiring an entirely new network. Accurate methods historically do not scale, and scalable methods are not legally admissible—until they are combined.<ReferenceLink id="PE-02" /></>}
            />
            <ComparisonCards />
          </div>
        </section>
                <section className="narrative-section solution" id="system">
          <div className="page-shell">
            <SectionHeading
              index="04"
              eyebrow="The physical reality"
              title={<>Enforce Narrow. <span style={{ color: "#FFFFFF" }}>Monitor Wide</span>.</>}
              copy={<>National enforcement cannot rely on stopping every truck. BhaarNetra continuously screens traffic at highway speed, escalates only high-risk vehicles for certified verification, and converts confirmed violations into legally defensible penalties.<ReferenceLink id="PE-06" /></>}
            />
            <div className="tiered-system">
              <div className="tiered-system__mainline mono">
                MAINLINE TRAFFIC · EVERY COMMERCIAL VEHICLE
              </div>
              <div className="tiered-system__row">
                {tiers.map((tier, index) => (
                  <article key={tier.id}>
                    <div className="tiered-system__header">
                      <span className="mono">{tier.id}</span>
                      {index < tiers.length - 1 && (
                        <div className="tiered-system__connector" aria-hidden="true" />
                      )}
                    </div>
                    <h3>{tier.title}</h3>
                    <p>{tier.copy}</p>
                    <div className="tiered-system__meta">
                      {tier.metric && <strong className="tiered-system__metric mono">{tier.metric}</strong>}
                      <small className="mono">{tier.note}</small>
                    </div>
                  </article>
                ))}
              </div>
              <div className="tiered-system__boundary">
                <strong>Hardware anchor</strong>
                <p>
                  No matter how sophisticated the software, legally binding weight always originates from certified physical Weigh-In-Motion infrastructure embedded in the roadway.<ReferenceLink id="PE-03" />
                </p>
              </div>
            </div>
          </div>
        </section>

                <VehicleJourney />
                <section className="narrative-section architecture" id="architecture">
          <div className="page-shell">
            <SectionHeading
              index="07"
              eyebrow="National Scale Operations"
              title={<>Architecture for <span style={{ color: "#FFFFFF" }}>National Deployment</span>.</>}
              copy={<>BhaarNetra is designed as a resilient, legally defensible, and highly scalable national enforcement network.<ReferenceLink id="PE-02" /></>}
            />
            <ArchitectureExplorer />
          </div>
        </section>
                <section className="narrative-section demonstration" id="demonstration">
          <div className="page-shell">
            <SectionHeading
              index="08"
              eyebrow="Live interactive demonstration"
              title={<><span style={{ color: "#FFFFFF" }}>Inspect</span> the Chain.</>}
              copy="Select a class, change its screening weight, and observe where a transit clears—or becomes a certified, identity-linked, evidence-backed enforcement record."
            />
            <LiveDemo />
          </div>
        </section>

                <section className="narrative-section enforcement">
          <div className="page-shell">
            <SectionHeading
              index="09"
              eyebrow="Enforcement flow"
              title={<>Consequence <span style={{ color: "#FFFFFF" }}>By Custody</span>.</>}
              copy={<>Every penalty-affecting action is explicit, versioned and auditable. Screening can be approximate; evidence and audit data cannot.<ReferenceLink id="PE-06" /></>}
            />
            <ol className="enforcement-flow">
              {enforcementSteps.map(([index, title, copy]) => (
                <li key={index}>
                  <span className="mono">{index}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <i aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

                <section className="analytics-section" id="analytics">
          <div className="page-shell">
            <SectionHeading
              index="10"
              eyebrow="Analytics layer"
              title={<><span style={{ color: "#FFFFFF" }}>Intelligence</span> Without Adjudication.</>}
              copy={<>The dashboard is deliberately light, dense and operational. It reads live events and derived aggregates; it never writes source evidence.<ReferenceLink id="PE-09" /></>}
            />
            <div className="analytics-board">
              <div className="analytics-board__top">
                <div>
                  <span className="mono">NATIONAL OVERLOAD INDEX <ReferenceLink id="PE-09" /></span>
                  <strong>11.8%</strong>
                  <small className="mono">SAMPLE DATA · −1.4 PP / 30D</small>
                </div>
                <div>
                  <span className="mono">IDENTITY MATCH</span>
                  <strong>98.4%</strong>
                  <small className="mono">SAMPLE DATA · TARGET ≥98%</small>
                </div>
                <div>
                  <span className="mono">EVIDENCE COMPLETE</span>
                  <strong>100%</strong>
                  <small className="mono">SAMPLE DATA · TARGET 100%</small>
                </div>
              </div>
              <div className="analytics-board__main">
                <article className="analytics-board__trend">
                  <div>
                    <span className="mono">CORRIDOR OVERLOAD TREND</span>
                    <small className="mono">SAMPLE · 12 WEEKS</small>
                  </div>
                  <svg viewBox="0 0 620 240" role="img" aria-label="Sample overload trend declining across twelve weeks">
                    <g>
                      {[40, 90, 140, 190].map((y) => (
                        <line key={y} x1="36" y1={y} x2="600" y2={y} />
                      ))}
                    </g>
                    <path d="M36 58C95 61 119 75 168 74S251 97 304 108s84 0 131 20 100 34 165 37" />
                    <path className="area" d="M36 58C95 61 119 75 168 74S251 97 304 108s84 0 131 20 100 34 165 37V205H36Z" />
                  </svg>
                </article>
                <article className="analytics-board__corridors">
                  <div>
                    <span className="mono">CORRIDOR STRESS</span>
                    <small className="mono">ILLUSTRATIVE</small>
                  </div>
                  <div className="mini-map" aria-label="Illustrative corridor stress map">
                    <span className="route route--one" />
                    <span className="route route--two" />
                    <span className="route route--three" />
                    <i style={{ left: "35%", top: "24%" }} />
                    <i style={{ left: "27%", top: "51%" }} />
                    <i style={{ left: "54%", top: "57%" }} />
                    <i style={{ left: "67%", top: "37%" }} />
                    <i style={{ left: "48%", top: "79%" }} />
                  </div>
                </article>
                <article className="analytics-board__ranking">
                  <div>
                    <span className="mono">OFFENDER RISK · SAMPLE</span>
                    <small className="mono">REPEAT EVENTS</small>
                  </div>
                  {[
                    ["Fleet cluster 07", 82],
                    ["Fleet cluster 12", 67],
                    ["Fleet cluster 03", 54],
                    ["Fleet cluster 18", 41],
                  ].map(([label, value]) => (
                    <div className="rank-bar" key={label}>
                      <span>{label}</span>
                      <i style={{ width: `${value}%` }} />
                      <strong className="mono">{value}</strong>
                    </div>
                  ))}
                </article>
              </div>
              <p className="data-source mono">
                ALL VALUES IN THIS SHOWCASE PANEL ARE SAMPLE DATA. CHARTS
                DEMONSTRATE THE DECIDED VISUAL GRAMMAR, NOT DEPLOYMENT RESULTS.
              </p>
            </div>
          </div>
        </section>
                <section className="narrative-section impact" id="impact">
          <div className="page-shell">
            <SectionHeading
              index="11"
              eyebrow="National impact"
              title={<>Change the <span style={{ color: "#FFFFFF" }}>Economics</span>.</>}
              copy={<>Continuous detection raises the probability of being caught; automatic consequence removes the negotiable step. The public value extends beyond enforcement.<ReferenceLink id="PE-07" /></>}
            />
            <div className="impact-grid">
              {[
                [
                  "Road Preservation",
                  <ul key="fiscal" className="impact-list">
                    <li>Reduced pavement deterioration <ReferenceLink id="PE-01" /></li>
                    <li>Extended infrastructure lifespan <ReferenceLink id="PE-07" /></li>
                  </ul>
                ],
                [
                  "Revenue Protection",
                  <ul key="gov" className="impact-list">
                    <li>Automatic recovery of overload penalties</li>
                    <li>Zero-discretion fine issuance</li>
                  </ul>
                ],
                [
                  "Fair Competition",
                  <ul key="market" className="impact-list">
                    <li>Compliant operators are no longer disadvantaged</li>
                  </ul>
                ],
                [
                  "Safety Improvement",
                  <ul key="safety" className="impact-list">
                    <li>Reduced overloaded vehicle risk <ReferenceLink id="PE-08" /></li>
                  </ul>
                ],
                [
                  "National Intelligence",
                  <ul key="data" className="impact-list">
                    <li>Highway stress and freight analytics</li>
                    <li>Real-time corridor insights <ReferenceLink id="PE-09" /></li>
                  </ul>
                ],
              ].map(([title, content], index) => (
                <article key={title as string}>
                  <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title as string}</h3>
                  <div className="impact-content">{content as React.ReactNode}</div>
                </article>
              ))}
            </div>
            <div className="impact-targets">
              <span className="mono">INDICATIVE PILOT TARGETS · TO BE FINALISED AGAINST BASELINES</span>
              <div>
                <strong>≥90%</strong><small>Screening detection <ReferenceLink id="PE-02" /></small>
                <strong>≥98%</strong><small>Identity match <ReferenceLink id="PE-04" /></small>
                <strong>≥95%</strong><small>Penalty automation <ReferenceLink id="PE-05" /></small>
                <strong>100%</strong><small>Evidence integrity <ReferenceLink id="PE-06" /></small>
              </div>
            </div>
          </div>
        </section>
                <section className="narrative-section honesty" id="method">
          <div className="page-shell">
            <SectionHeading
              index="12"
              eyebrow="MVP vs national deployment"
              title={<>Real Logic. <span style={{ color: "#FFFFFF" }}>Simulated Physics</span>.</>}
              copy="The MVP is a faithful single-lane miniature of the national architecture. It never claims that external government rails or in-tarmac hardware are already deployed."
            />
            <div className="honesty__registers">
              <article>
                <span className="status-chip status-chip--sample mono">CURRENT MVP</span>
                <h3>A working software chain on one node.</h3>
                <p>
                  ANPR, classification, tiered decision logic, penalty engine,
                  evidence chain and dashboard are demonstrated end-to-end.
                </p>
              </article>
              <article>
                <span className="status-chip status-chip--national mono">NATIONAL DEPLOYMENT VISION</span>
                <h3>A corridor-based, plaza-independent network.</h3>
                <p>
                  Certified roadside infrastructure, government identity rails,
                  automatic settlement and national analytics operating at scale.<ReferenceLink id="PE-09" />
                </p>
              </article>
            </div>
            <div className="honesty-table" role="region" aria-label="MVP component implementation status" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Status</th>
                    <th>Implementation boundary</th>
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

                <section className="narrative-section technical" id="technical">
          <div className="page-shell">
            <SectionHeading
              index="13"
              eyebrow="Technical depth"
              title={<><span style={{ color: "#FFFFFF" }}>Depth</span> is available on demand.</>}
              copy={<>The public narrative stays clear. Engineers and judges can inspect service boundaries, event semantics, evidence integrity and penalty ownership without leaving the system story.<ReferenceLink id="PE-06" /></>}
            />
            <TechnicalDepth />
          </div>
        </section>

                <section className="vision" id="vision">
          <div className="vision__content">
            <h2>Measure. Verify. <span style={{ color: "#FFFFFF" }}>Enforce</span>.</h2>
            <div className="vision-description" style={{ marginBottom: "2rem" }}>
              Today, highway enforcement is isolated, fragmented, and limited in coverage. A highway network must account for the load it is asked to carry. With BhaarNetra, India moves to corridor-wide monitoring, identity-linked enforcement, and an auditable evidence chain using certified Weigh-In-Motion sensors, ANPR and FASTag integration.<ReferenceLink id="PE-02" />
            </div>
            <div className="vision__statement mono">
              <span>CONTINUOUS DETECTION</span>
              <i />
              <span>CERTIFIED ADJUDICATION</span>
              <i />
              <span>AUTOMATIC CONSEQUENCE</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
