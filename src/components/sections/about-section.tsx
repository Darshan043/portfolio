import { ResumeSection } from "@/components/sections/resume-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 sm:gap-16">
        <div>
          <SectionHeading id="about-heading" title="About" />
          <p className="text-muted mt-8 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            {profile.statement}
          </p>
          <p className="text-muted mt-5 max-w-2xl text-sm leading-6">
            <span className="text-foreground font-medium">Education</span>
            <span className="px-2" aria-hidden="true">
              ·
            </span>
            {profile.education}
          </p>
        </div>
        <ResumeSection />
      </div>
    </section>
  );
}
