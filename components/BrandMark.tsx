type BrandMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className = "" }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${className}`} aria-label="BhaarNetra">
      {!compact && (
        <span className="brand-mark__type">
          <span>BHAARNETRA</span>
        </span>
      )}
      {compact && (
        <span className="brand-mark__type">
          <span>BHAARNETRA</span>
        </span>
      )}
    </span>
  );
}
