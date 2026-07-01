import { motion, MotionValue } from "framer-motion";

type TruckGlyphProps = {
  className?: string;
  overloaded?: boolean;
  wheelRotation?: MotionValue<number>;
};

export function TruckGlyph({
  className = "",
  overloaded = false,
  wheelRotation
}: TruckGlyphProps) {
  return (
    <motion.svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 240 100"
      fill="none"
    >
      <g style={{ 
        transform: 'translateY(5px)',
        transformOrigin: '180px 80px',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' 
      }}>
        {/* Legal Limit Line */}
        <path d="M10 3h150" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
        <text x="15" y="-3" fill="rgba(255, 255, 255, 0.4)" fontSize="7" fontFamily="var(--font-body), sans-serif" letterSpacing="0.05em">LEGAL LIMIT</text>

        {/* Cargo Blocks - Base Layer */}
        <rect x="20" y="10" width="38" height="12" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <rect x="62" y="10" width="46" height="12" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
        <rect x="112" y="10" width="34" height="12" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
        
        {/* Overloaded Cargo Layer */}
        <g>
          {/* These boxes stack above the dashed line and are always present */}
          <rect x="25" y="-4" width="30" height="12" fill={overloaded ? "#374151" : "#6B7280"} stroke={overloaded ? "#FF9500" : "#4B5563"} strokeWidth="1.5" style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }} />
          <rect x="65" y="-4" width="40" height="12" fill={overloaded ? "#374151" : "#6B7280"} stroke={overloaded ? "#FF9500" : "#4B5563"} strokeWidth="1.5" style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }} />
          <rect x="115" y="-4" width="25" height="12" fill={overloaded ? "#374151" : "#6B7280"} stroke={overloaded ? "#FF9500" : "#4B5563"} strokeWidth="1.5" style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }} />
        </g>

        {/* Main Truck Body */}
        <path
          d="M15 22h138v56H15zM153 39h43l27 24v15h-70z"
          className="truck-body"
          stroke="currentColor" strokeWidth="2"
        />
        <path d="M163 47h29l16 15h-45z" className="truck-window" stroke="currentColor" strokeWidth="2" />
        
        {/* Truck Chassis Line */}
        <path d="M15 67h208" className="truck-line" stroke="currentColor" strokeWidth="1" />
      </g>
      
      {/* Wheels */}
      <motion.g style={{ originX: "50%", originY: "50%", rotate: wheelRotation || 0 }}>
        {/* Wheels always squashed because truck is physically overloaded from the start */}
        <ellipse cx="52" cy="84" rx={14.5} ry={11.5} className="truck-wheel" stroke="currentColor" strokeWidth="2" style={{ transition: 'all 0.4s ease' }} />
        <circle cx="52" cy="84" r="4" className="truck-hub" fill="currentColor" />
      </motion.g>
      <motion.g style={{ originX: "50%", originY: "50%", rotate: wheelRotation || 0 }}>
        <ellipse cx="176" cy="84" rx={14.5} ry={11.5} className="truck-wheel" stroke="currentColor" strokeWidth="2" style={{ transition: 'all 0.4s ease' }} />
        <circle cx="176" cy="84" r="4" className="truck-hub" fill="currentColor" />
      </motion.g>
      <motion.g style={{ originX: "50%", originY: "50%", rotate: wheelRotation || 0 }}>
        <ellipse cx="207" cy="84" rx={14.5} ry={11.5} className="truck-wheel" stroke="currentColor" strokeWidth="2" style={{ transition: 'all 0.4s ease' }} />
        <circle cx="207" cy="84" r="4" className="truck-hub" fill="currentColor" />
      </motion.g>
    </motion.svg>
  );
}
