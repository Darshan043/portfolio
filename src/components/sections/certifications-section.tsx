import { AchievementSection } from "@/components/sections/achievement-section";
import { certifications } from "@/content/certifications";
import { CertificateCard } from "@/components/ui/certificate-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="certifications-heading"
          title="Certifications & Achievements"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <li key={certification.title} className="min-w-0">
              <CertificateCard certification={certification} />
            </li>
          ))}
        </ul>
        <div className="mt-16 sm:mt-20">
          <AchievementSection />
        </div>
      </div>
    </section>
  );
}
