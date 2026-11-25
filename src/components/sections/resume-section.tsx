import { Download } from "lucide-react";
import { resume } from "@/content/resume";
import { SectionHeading } from "@/components/ui/section-heading";

export function ResumeSection() {
  return (
    <div id="resume" className="scroll-mt-28">
      <SectionHeading id="resume-heading" title={resume.title} />
      <div className="border-border bg-surface mt-8 flex max-w-3xl flex-col gap-5 rounded-2xl border p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8">
        <p className="text-muted max-w-xl text-sm leading-6 sm:text-base sm:leading-7">
          {resume.description}
        </p>
        <a
          href={resume.href}
          download={resume.fileName}
          aria-label="Download Resume PDF"
          className="bg-accent text-background focus-visible:ring-foreground motion-safe:hover:bg-foreground inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium no-underline focus-visible:ring-2 focus-visible:outline-none motion-safe:transition-colors sm:w-auto"
        >
          <Download aria-hidden="true" className="size-4" strokeWidth={1.5} />
          Download Resume
        </a>
      </div>
    </div>
  );
}
