export function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        className="font-display text-foreground text-3xl tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      <div className="bg-accent mt-4 h-px w-16" />
    </div>
  );
}
