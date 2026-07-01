"use client";

import { EvidenceRecord as EvidenceRecordType, Publication } from "@/data/literature";

interface EvidenceRecordProps {
  record: EvidenceRecordType;
}

const getOrgMonogram = (org: string) => {
  if (org.includes("ASTM")) return "ASTM";
  if (org.includes("European Commission")) return "EU";
  if (org.includes("OIML")) return "OIML";
  if (org.includes("Indian Roads Congress")) return "IRC";
  if (org.includes("Federal Highway Administration")) return "FHWA";
  if (org.includes("Government of India")) return "GOI";
  if (org.includes("AASHO")) return "AASHO";
  return null;
};

export function EvidenceRecord({ record }: EvidenceRecordProps) {
  return (
    <>
      <style>{`
        .evidence-record-grid {
          display: grid;
          grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
          gap: 120px;
        }
        @media (max-width: 1024px) {
          .evidence-record-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
        }
        
        .pub-link {
          display: inline-flex;
          align-items: center;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 100px;
          background-color: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          font-weight: 400;
          transition: all 0.2s ease;
        }
        .pub-link:hover {
          background-color: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
          color: #FFFFFF;
        }

        .pub-card {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pub-card:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .evidence-record:last-of-type {
          border-bottom: none !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
      <article className="evidence-record evidence-record-grid" id={record.id.toLowerCase()} style={{
        marginBottom: '208px',
        paddingBottom: '120px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        scrollMarginTop: '120px'
      }}>
        
        {/* Left Column: Traceability & Relevance */}
        <div style={{ paddingRight: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: '2.4rem', color: 'rgba(255, 255, 255, 0.45)', margin: 0, fontWeight: 300, lineHeight: 1.1, paddingTop: '4px' }}>
              {record.publicId}
            </h3>
            <h4 style={{ fontSize: '2.5rem', color: '#FFFFFF', fontWeight: 400, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2, textWrap: 'balance' }}>
              {record.title.split(' & ')[0]}
            </h4>
          </div>

          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, marginBottom: '48px', fontWeight: 300 }}>
            {record.description}
          </p>

          <div style={{ marginBottom: '68px' }}>
            <div style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '24px', fontWeight: 400, letterSpacing: '-0.01em' }}>Engineering Relevance</div>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: 0, fontWeight: 300 }}>
              {record.engineeringRelevance}
            </p>
          </div>

          <div>
            <div style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '48px', fontWeight: 400, letterSpacing: '-0.01em' }}>Evidence Mapping</div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {record.supports && record.supports.length > 0 && (
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '38px', marginBottom: '38px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: 500 }}>Supports</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {record.supports.map((sup, idx) => (
                      <div key={idx} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', gap: '16px', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.5 }}>
                        <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
                        <span>{sup}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '38px', marginBottom: '38px' }}>
                <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: 500 }}>Referenced Throughout</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {record.referencedThroughout.map((ref, idx) => (
                    <div key={idx} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', gap: '16px', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.5 }}>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
                      <span>{ref}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '38px', marginBottom: '38px' }}>
                <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: 500 }}>Primary Standards</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {record.publications.map((p, i) => (
                    <div key={i} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', gap: '16px', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.5 }}>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
                      <span>{p.documentIdentifier !== 'TODO' ? p.documentIdentifier : p.organisation}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{ paddingBottom: '38px' }}>
                <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: 500 }}>Engineering Outcomes</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {record.proposalOutcomes.map((out, idx) => (
                    <div key={idx} style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', gap: '16px', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.5 }}>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Evidence Base */}
        <div>
          <div style={{ marginBottom: '48px', minHeight: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '8px' }}>
            <span className="mono" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>PRIMARY LITERATURE</span>
            <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>{record.publications.length} Official Publications</span>
          </div>

          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {record.publications.map((pub: Publication, idx) => (
                <div 
                  key={idx} 
                  className="pub-card"
                >
                  <div style={{ paddingBottom: '24px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Document ID</span>
                      <span className="mono" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', fontWeight: 500, letterSpacing: '0.08em' }}>{pub.documentIdentifier}</span>
                    </div>
                    
                    <h5 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 500, margin: 0, lineHeight: 1.45, letterSpacing: '-0.01em', textWrap: 'balance' }}>
                      {pub.title}
                    </h5>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', rowGap: '12px', columnGap: '16px', paddingBottom: '24px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'baseline' }}>Authority</span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>{pub.organisation}</span>
                      {getOrgMonogram(pub.organisation) && (
                        <span className="mono" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', letterSpacing: '0.02em', transform: 'translateY(-1px)' }}>
                          {getOrgMonogram(pub.organisation)}
                        </span>
                      )}
                    </div>

                    <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'baseline' }}>Type</span>
                    <span style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300, alignSelf: 'baseline' }}>
                      {pub.category || pub.classification || ''}
                    </span>

                    <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'baseline' }}>Jurisdiction</span>
                    <span style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300, alignSelf: 'baseline' }}>{pub.region}</span>

                    {pub.year && pub.year !== "TODO" && (
                      <>
                        <span className="mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', alignSelf: 'baseline' }}>Published</span>
                        <span style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', fontWeight: 300, alignSelf: 'baseline' }}>{pub.year}</span>
                      </>
                    )}
                  </div>

                  {pub.linkText && pub.url && pub.url !== "TODO" && (
                    <div style={{ marginTop: 'auto', display: 'flex' }}>
                      <a 
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-link"
                      >
                        View Official Publication ↗
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
