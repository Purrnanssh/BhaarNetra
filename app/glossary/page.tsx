"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteChrome";
import { Navbar } from "@/components/Navbar";
import { glossaryData, HandbookEntry } from "@/data/glossary";

// SVG diagrams for terms that have `hasDiagram: true`
function TermDiagram({ term }: { term: string }) {
  // Minimal monochrome engineering diagrams
  switch (term) {
    case "ANPR":
      return (
        <svg viewBox="0 0 100 40" width="100%" height="40" style={{ marginTop: '24px', opacity: 0.8 }}>
          <rect x="0" y="5" width="90" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
          <text x="45" y="25" fill="currentColor" fontSize="12" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1em">MH12 DE 1433</text>
          <line x1="5" y1="5" x2="85" y2="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
      );
    case "WIM":
      return (
        <svg viewBox="0 0 100 40" width="100%" height="40" style={{ marginTop: '24px', opacity: 0.8 }}>
          <line x1="0" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="1" />
          <rect x="20" y="18" width="60" height="4" fill="currentColor" />
          <path d="M 30,18 L 30,5 M 70,18 L 70,5" stroke="currentColor" strokeWidth="1" strokeDasharray="1,2" fill="none" />
          <circle cx="30" cy="5" r="2" fill="currentColor" />
          <circle cx="70" cy="5" r="2" fill="currentColor" />
        </svg>
      );
    case "FASTag":
      return (
        <svg viewBox="0 0 100 40" width="100%" height="40" style={{ marginTop: '24px', opacity: 0.8 }}>
          <rect x="25" y="5" width="50" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 35,15 Q 45,5 55,15 T 75,15" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 35,25 Q 45,15 55,25 T 75,25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "Chain of Custody":
      return (
        <svg viewBox="0 0 100 40" width="100%" height="40" style={{ marginTop: '24px', opacity: 0.8 }}>
          <rect x="10" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="20" x2="45" y2="20" stroke="currentColor" strokeWidth="1" />
          <rect x="45" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="65" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1" />
          <circle cx="90" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 85,20 L 90,25 L 97,15" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    case "Legal Metrology":
      return (
        <svg viewBox="0 0 100 40" width="100%" height="40" style={{ marginTop: '24px', opacity: 0.8 }}>
          <line x1="50" y1="5" x2="50" y2="35" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="15" x2="80" y2="15" stroke="currentColor" strokeWidth="1" />
          <polygon points="50,5 45,15 55,15" fill="currentColor" />
          <rect x="15" y="15" width="10" height="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="75" y="15" width="10" height="15" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      );
    default:
      return null;
  }
}

// Highlight matching text in search results
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

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const sortedGlossary = useMemo(() => {
    return [...glossaryData].sort((a, b) => a.term.localeCompare(b.term));
  }, []);

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return sortedGlossary;

    return sortedGlossary.filter(record => {
      const matchTerm = record.term.toLowerCase().includes(query);
      const matchFullName = record.fullName?.toLowerCase().includes(query);
      const matchDef = record.definition.toLowerCase().includes(query);
      const matchCategory = record.category.toLowerCase().includes(query);
      const matchRelated = record.seeAlso.some(t => t.toLowerCase().includes(query));
      
      return matchTerm || matchFullName || matchDef || matchCategory || matchRelated;
    });
  }, [searchQuery, sortedGlossary]);

  // Group by letter
  const groupedData = useMemo(() => {
    const groups: { [key: string]: { entries: HandbookEntry[], startIndex: number } } = {};
    let globalIndex = 1;
    
    filteredData.forEach(entry => {
      const letter = entry.term.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = { entries: [], startIndex: globalIndex };
      }
      groups[letter].entries.push(entry);
      globalIndex++;
    });
    
    return groups;
  }, [filteredData]);

  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const activeLetters = Object.keys(groupedData);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const searchInput = (
    <div style={{ position: 'relative', width: '320px', marginRight: '24px' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isFocused ? '#FFF' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', transition: 'stroke 0.3s ease' }}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input 
        type="text" 
        placeholder="Search acronym or term..." 
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
      <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.02em' }}>Glossary</span>
    </div>
  );

  return (
    <>
      <style>{`
        .pub-card {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
      `}</style>
      <Navbar searchSlot={searchInput} titleSlot={titleSlot} />
      <main id="main" className="deep-page" style={{ paddingTop: '40px', backgroundColor: 'rgb(20, 20, 20)', minHeight: '100vh' }}>
        <div className="page-shell" style={{ paddingBottom: '160px' }}>
          
          <div style={{ marginBottom: '40px' }}>
            <div className="mono" style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '12px', letterSpacing: '0.05em' }}>APPENDIX A</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 500, margin: 0, color: '#FFF', letterSpacing: '-0.02em' }}>
              Engineering Terminology
            </h1>
            <p style={{ marginTop: '24px', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '720px', lineHeight: 1.6 }}>
              An exhaustive technical handbook defining the operational, legal, and engineering terminology utilized throughout the BhaarNetra architecture. This appendix defines the engineering, legal and operational terminology used throughout the proposal. Wherever applicable, terms are linked to recognised government standards, engineering literature and primary technical publications.
            </p>
          </div>

          {/* Sticky A-Z Navigation Pill */}
          <div style={{
            position: 'sticky',
            top: '96px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            padding: '8px 16px',
            zIndex: 100,
            marginBottom: '64px',
            display: 'flex',
            gap: '2px',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            margin: '0 auto 64px auto',
            width: 'max-content',
            maxWidth: '100%',
            overflowX: 'auto',
            scrollbarWidth: 'none' /* Hide scrollbar for Firefox */
          }}>
              {allLetters.map(letter => {
                const isActive = activeLetters.includes(letter);
                return (
                  <button
                    key={letter}
                    onClick={() => scrollToLetter(letter)}
                    disabled={!isActive}
                    className="mono"
                    style={{
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      background: 'transparent',
                      border: 'none',
                      color: isActive ? '#FFF' : 'rgba(255,255,255,0.2)',
                      cursor: isActive ? 'pointer' : 'default',
                      fontSize: '0.75rem',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontWeight: isActive ? 600 : 400,
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      if (isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

        </div>

        <div className="page-shell" style={{ paddingBottom: '120px' }}>
          {Object.keys(groupedData).length === 0 ? (
            <div className="mono" style={{ textAlign: 'center', padding: '120px 0', color: 'var(--muted)' }}>
              No terminology matched your query.<br/><br/>
              Try searching by acronym, full name, category or engineering domain.
            </div>
          ) : (
            Object.keys(groupedData).sort().map((letter, letterIndex) => (
              <section key={letter} id={`section-${letter}`} style={{ marginBottom: '80px' }}>
                
                {letterIndex > 0 && (
                  <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', borderTop: '1px solid rgba(255, 255, 255, 0.12)', marginBottom: '80px', marginTop: '40px' }} />
                )}

                <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '80px' }}>
                  <h2 style={{ 
                    fontSize: '4.5rem', 
                    fontWeight: 500, 
                    margin: 0, 
                    color: '#FFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1
                  }}>{letter}</h2>
                </div>

                <div>
                  {groupedData[letter].entries.map((entry, index) => {
                    const documentNumber = `${letter}-${String(groupedData[letter].startIndex + index).padStart(2, '0')}`;
                    
                    return (
                      <article key={entry.term} id={entry.term.toLowerCase()} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '64px',
                        padding: '48px 0',
                        borderBottom: index === groupedData[letter].entries.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)'
                      }}>
                        
                        {/* Left Column: Core Definition */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 500, margin: 0, color: '#FFF' }}>
                              <HighlightedText text={entry.term} query={searchQuery} />
                            </h3>
                            <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{documentNumber}</span>
                          </div>
                          
                          {entry.fullName && (
                            <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>
                              <HighlightedText text={entry.fullName} query={searchQuery} />
                            </div>
                          )}

                          <div style={{ marginBottom: '32px' }}>
                            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                              <HighlightedText text={entry.definition} query={searchQuery} />
                            </p>
                            
                            {entry.hasDiagram && <TermDiagram term={entry.term} />}
                          </div>

                          <div>
                            <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px' }}>WHY THIS MATTERS</div>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, margin: 0 }}>
                              {entry.whyItMatters}
                            </p>
                          </div>
                        </div>

                        {/* Right Column: Metadata & Cross-references */}
                        <div className="pub-card mono" style={{ fontSize: '0.85rem' }}>
                          
                          <div style={{ paddingBottom: '24px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: '8px', letterSpacing: '0.05em' }}>CATEGORY</div>
                            <div style={{ color: '#FFF', fontSize: '0.95rem' }}>
                              <HighlightedText text={entry.category.toUpperCase()} query={searchQuery} />
                            </div>
                          </div>

                          <div style={{ paddingBottom: '24px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                            <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: '8px', letterSpacing: '0.05em' }}>
                              REFERENCED IN PROPOSAL ({entry.usageCount} TIMES)
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.8)', display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.95rem' }}>
                              {entry.referencedIn.map((ref, idx) => (
                                <span key={idx}><HighlightedText text={ref} query={searchQuery} /></span>
                              ))}
                            </div>
                          </div>

                          {entry.primaryReferences.length > 0 && (
                            <div style={{ paddingBottom: entry.seeAlso.length > 0 ? '24px' : '0', marginBottom: entry.seeAlso.length > 0 ? '24px' : '0', borderBottom: entry.seeAlso.length > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                              <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: '16px', letterSpacing: '0.05em' }}>PRIMARY REFERENCES</div>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {entry.primaryReferences.map((ref, idx) => (
                                  <div key={idx} style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <h5 style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500, margin: '0 0 16px 0', lineHeight: 1.45, letterSpacing: '-0.01em', textWrap: 'balance' }}>
                                      {ref.publication}
                                    </h5>
                                    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', rowGap: '12px', columnGap: '16px' }}>
                                      <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'baseline' }}>Authority</span>
                                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300, alignSelf: 'baseline' }}>
                                        {ref.organisation}
                                      </span>
                                      <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'baseline' }}>Type</span>
                                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300, alignSelf: 'baseline' }}>
                                        {ref.documentType}
                                      </span>
                                      <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'baseline' }}>Published</span>
                                      <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300, alignSelf: 'baseline' }}>
                                        {ref.year}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {entry.seeAlso.length > 0 && (
                            <div>
                              <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginBottom: '12px', letterSpacing: '0.05em' }}>SEE ALSO</div>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.95rem' }}>
                                {entry.seeAlso.map((term, idx) => (
                                  <a 
                                    key={idx} 
                                    href={`#${term.toLowerCase()}`} 
                                    style={{ 
                                      color: 'rgba(255, 255, 255, 0.9)', 
                                      textDecoration: 'none',
                                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                      border: '1px solid rgba(255, 255, 255, 0.08)',
                                      borderRadius: '999px',
                                      padding: '6px 14px',
                                      fontSize: '0.85rem',
                                      fontWeight: 500,
                                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                      display: 'inline-block'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                    }}
                                  >
                                    <HighlightedText text={term} query={searchQuery} />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))
          )}

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
