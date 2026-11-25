import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card border-border bg-surface text-foreground focus-visible:ring-accent focus-visible:ring-offset-background flex h-full min-w-0 flex-col rounded-2xl border p-5 no-underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-6"
    >
      <p className="text-accent text-xs font-medium tracking-[0.14em] uppercase">
        {project.category}
      </p>
      <h3 className="font-display mt-3 text-xl tracking-tight sm:text-2xl">
        {project.name}
      </h3>
      <p className="text-muted mt-3 flex-1 text-sm leading-6">
        {project.description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
        {project.action}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </span>
    </a>
  );
}
