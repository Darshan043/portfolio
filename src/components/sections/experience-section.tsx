import Image from "next/image";
import { experiences } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience-heading"
          title="Professional Experience"
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {experiences.map((experience) => (
            <li key={experience.company}>
              <article className="surface-card border-border bg-surface flex h-full min-w-0 flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:p-6">
                <div className="bg-foreground grid size-16 shrink-0 place-items-center rounded-xl p-1.5">
                  <Image
                    src={experience.logo.src}
                    alt={experience.logo.alt}
                    width={experience.logo.width}
                    height={experience.logo.height}
                    sizes="64px"
                    className="h-auto max-h-12 w-auto max-w-12 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-foreground text-xl tracking-tight">
                    {experience.company}
                  </h3>
                  <p className="text-foreground mt-1 text-sm font-medium">
                    {experience.role}
                  </p>
                  <p className="text-accent mt-1 text-sm">
                    {experience.duration}
                  </p>
                  <p className="text-muted mt-3 text-sm leading-6">
                    {experience.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
