import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteChrome";
import { Navbar } from "@/components/Navbar";
import { revisionData } from "@/data/revisions";

export const metadata: Metadata = {
  title: "Revision History",
  description: "Version history and changelog for BhaarNetra proposal.",
};

export default function RevisionsPage() {
  const titleSlot = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
      <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}>Revision History</span>
    </div>
  );

  return (
    <>
      <Navbar titleSlot={titleSlot} />
      <main id="main" className="deep-page" style={{ paddingTop: '40px', backgroundColor: 'rgb(20, 20, 20)', minHeight: 'auto' }}>
        <div className="page-shell" style={{ paddingBottom: '64px' }}>
          
          <div style={{ marginBottom: '64px' }}>
            <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '12px', letterSpacing: '0.05em' }}>APPENDIX C</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 500, margin: 0, color: '#FFF', letterSpacing: '-0.02em' }}>
              Revision History
            </h1>
            <p style={{ marginTop: '24px', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '720px', lineHeight: 1.6 }}>
              This proposal is maintained as a living engineering document. All material changes, literature updates, and architectural refinements are version-controlled and logged below to ensure absolute traceability for review teams.
            </p>
          </div>
          <section style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {revisionData.map(rev => (
                <article key={rev.version} style={{
                  padding: '48px 56px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 500, color: '#FFF', letterSpacing: '-0.04em', lineHeight: 1 }}>{rev.version}</span>
                      <span style={{ display: 'inline-flex', padding: '6px 12px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 500, color: '#FFF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Release</span>
                    </div>
                    <div className="mono" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{rev.date}</div>
                  </div>
                  
                  <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', fontWeight: 400, letterSpacing: '-0.01em', marginBottom: '24px', lineHeight: 1.5 }}>
                    {rev.summary}
                  </p>

                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: 0, 
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {rev.details.map((detail, idx) => (
                      <li key={idx} style={{ 
                        fontSize: '1.05rem',
                        color: 'rgba(255,255,255,0.65)',
                        lineHeight: 1.6,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px'
                      }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: '11px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
