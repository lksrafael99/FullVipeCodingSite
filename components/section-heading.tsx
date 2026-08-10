type Props = { kicker: string; title: React.ReactNode; description?: string; align?: "left" | "center" };

export function SectionHeading({ kicker, title, description, align = "left" }: Props) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="kicker">{`// ${kicker}`}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
