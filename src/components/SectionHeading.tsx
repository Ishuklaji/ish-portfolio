export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
    </div>
  );
}
