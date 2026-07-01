type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  copy?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
  align = "left",
  as: Component = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <Component>
        {(index || eyebrow) && (
          <span className="section-heading__meta">
            {index && <span>{index}</span>}
            {eyebrow && <span>{eyebrow}</span>}
          </span>
        )}
        {title}
      </Component>
      {copy && <div className="section-heading__copy">{copy}</div>}
    </div>
  );
}
