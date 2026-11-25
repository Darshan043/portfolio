import { ContactForm } from "@/components/ui/contact-form";
import { ContactLinks } from "@/components/ui/contact-links";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="contact-heading" title="Contact" />
        <div className="mt-8">
          <ContactLinks />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
