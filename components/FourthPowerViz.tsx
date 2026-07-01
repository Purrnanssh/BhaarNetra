"use client";

import { TruckGlyph } from "./TruckGlyph";
import { ReferenceLink } from "./ReferenceLink";

export function FourthPowerViz() {
  const load = 1.2;
  const damage = load ** 4; // 2.0736

  return (
    <div className="power-viz">
      <div className="power-viz__comparison">
        <article>
          <div className="power-viz__truck-stage">
            <TruckGlyph className="power-viz__truck" />
            <span className="power-viz__road" />
          </div>
          <div className="power-viz__metric mono" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <span style={{ fontWeight: 700, fontSize: "1rem", color: "rgba(255, 255, 255, 0.4)", textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Baseline Truck</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 400, color: "rgba(255,255,255,0.3)" }}>1.00× ROAD DAMAGE<ReferenceLink id="PE-01" /></div>
          </div>
        </article>

        <div className="power-viz__takeaway mono" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ fontSize: '1.1rem', color: "rgba(255,255,255,0.4)", letterSpacing: '0.1em', marginBottom: '12px' }}>BASELINE</span>
          <span style={{ fontSize: '2rem', fontWeight: 700, color: "rgba(255,255,255,0.6)", whiteSpace: 'nowrap' }}>→ +20% LOAD →</span>
          <span style={{ fontSize: '1.1rem', color: "rgba(255,255,255,0.4)", letterSpacing: '0.1em', marginTop: '12px' }}>OVERLOADED</span>
        </div>
        
        <article className="is-overloaded" style={{ position: 'relative' }}>
          <div className="power-viz__truck-stage">
            <TruckGlyph className="power-viz__truck" overloaded={true} />
            <span 
              className="power-viz__road is-damaged" 
              style={{ transform: `translateY(${(damage - 1) * 2}px)` }}
            />
          </div>
          <div className="power-viz__metric mono" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
            <span style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              Overloaded Truck
            </span>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>≈ 2.07× ROAD DAMAGE<ReferenceLink id="PE-01" /></div>
          </div>
        </article>
      </div>


    </div>
  );
}
