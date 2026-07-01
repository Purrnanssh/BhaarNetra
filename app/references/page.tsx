"use client";

import { useState, useMemo } from "react";
import { SiteFooter } from "@/components/SiteChrome";
import { Navbar } from "@/components/Navbar";
import { literatureData } from "@/data/literature";
import { EvidenceRecord } from "@/components/EvidenceRecord";

// Helper for developer-style search highlighting
function HighlightedText({ text, query }: { text: string, query: string }) {
  if (!query.trim()) return <>{text}</>;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        regex.test(part) ? <mark key={i} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'inherit' }}>{part}</mark> : part
      )}
    </>
  );
}

export default function ReferencesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return literatureData;

    return literatureData.filter(record => {
      const matchSearch = 
        record.id.toLowerCase().includes(query) || 
        record.title.toLowerCase().includes(query) || 
        record.description.toLowerCase().includes(query) ||
        record.engineeringRelevance.toLowerCase().includes(query) ||
        record.traceabilityClaim.toLowerCase().includes(query) ||
        record.publications.some(p => 
          p.title.toLowerCase().includes(query) || 
          p.documentIdentifier.toLowerCase().includes(query) ||
          p.organisation.toLowerCase().includes(query) ||
          p.classification.toLowerCase().includes(query)
        );
      
      return matchSearch;
    });
  }, [searchQuery]);

  const engineeringRecords = filteredData.filter(r => r.group === "Engineering");
  const legalRecords = filteredData.filter(r => r.group === "Legal & Enforcement");
  const digitalRecords = filteredData.filter(r => r.group === "Digital Infrastructure");

  const searchInput = (
    <div style={{ position: 'relative', width: '320px', marginRight: '24px' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isFocused ? '#FFF' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', transition: 'stroke 0.3s ease' }}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input 
        type="text" 
        placeholder="Search literature or ID..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '100px',
          color: '#FFF',
          fontSize: '0.85rem',
          padding: '10px 16px 10px 40px',
          outline: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          if (!isFocused) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
        }}
        onMouseLeave={(e) => {
          if (!isFocused) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        }}
      />
    </div>
  );

  const titleSlot = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
      <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}>Literature & Standards</span>
    </div>
  );

  return (
    <>
      <Navbar searchSlot={searchInput} titleSlot={titleSlot} />
      <main id="main" className="deep-page" style={{ paddingTop: '40px', backgroundColor: 'rgb(20, 20, 20)', minHeight: '100vh' }}>
        <div className="page-shell" style={{ paddingBottom: '160px' }}>
          
          {engineeringRecords.length > 0 && (
            <section style={{ marginBottom: '80px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '80px', paddingBottom: '24px' }}>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '12px', letterSpacing: '0.05em' }}>PART I</div>
                <h2 style={{ fontSize: '3rem', fontWeight: 500, margin: 0, color: '#FFF', letterSpacing: '-0.02em' }}>
                  Engineering Principles
                </h2>
              </div>
              
              {engineeringRecords.map(record => (
                <EvidenceRecord key={record.id} record={record} />
              ))}
            </section>
          )}

          {legalRecords.length > 0 && (
            <>
              {engineeringRecords.length > 0 && <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }} />}
              <section style={{ marginTop: '120px', marginBottom: '80px' }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '80px', paddingBottom: '24px' }}>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '12px', letterSpacing: '0.05em' }}>PART II</div>
                <h2 style={{ fontSize: '3rem', fontWeight: 500, margin: 0, color: '#FFF', letterSpacing: '-0.02em' }}>
                  Measurement & Enforcement
                </h2>
              </div>
              
              {legalRecords.map(record => (
                <EvidenceRecord key={record.id} record={record} />
              ))}
            </section>
            </>
          )}

          {digitalRecords.length > 0 && (
            <>
              {(engineeringRecords.length > 0 || legalRecords.length > 0) && <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }} />}
              <section style={{ marginTop: '120px', marginBottom: '80px' }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '80px', paddingBottom: '24px' }}>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '12px', letterSpacing: '0.05em' }}>PART III</div>
                <h2 style={{ fontSize: '3rem', fontWeight: 500, margin: 0, color: '#FFF', letterSpacing: '-0.02em' }}>
                  Evidence & Digital Infrastructure
                </h2>
              </div>
              
              {digitalRecords.map(record => (
                <EvidenceRecord key={record.id} record={record} />
              ))}
            </section>
            </>
          )}

          {filteredData.length === 0 && (
            <div className="mono" style={{ textAlign: 'center', padding: '120px 0', color: 'var(--muted)', fontSize: '0.9rem' }}>
              No documentation matched your query.
            </div>
          )}

          {filteredData.length > 0 && (
            <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }} />
          )}

          <div style={{ margin: '64px auto 0 auto', paddingBottom: '40px', maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column' }}>
            
            <h2 style={{ fontSize: '2rem', color: '#FFF', fontWeight: 500, margin: '0 0 24px 0', letterSpacing: '-0.02em', padding: 0 }}>
              Engineering Reference Appendix
            </h2>
            
            {/* Statement */}
            <div style={{ 
              color: 'rgba(255,255,255,0.85)', 
              fontSize: '1.05rem', 
              lineHeight: 1.7, 
              maxWidth: '600px', 
              fontWeight: 300,
              margin: '0 0 64px 0',
              padding: 0
            }}>
              This appendix cites only primary government legislation, engineering standards, official specifications and foundational research used throughout the proposal. Secondary summaries have been intentionally excluded wherever authoritative publications were available.
            </div>

            {/* Divider 2 */}
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '48px' }} />



            {/* Absolute bottom copyright/editorial line */}
            <div style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1rem',
              fontWeight: 300,
              letterSpacing: '0.01em',
              margin: 0,
              padding: 0
            }}>
              Prepared as supporting technical literature for the BhaarNetra National Highway Overload Enforcement Proposal.
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
