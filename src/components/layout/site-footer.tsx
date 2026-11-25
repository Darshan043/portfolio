import { ContactLinks } from "@/components/ui/contact-links";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-border border-t px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-foreground">{profile.name}</p>
          <p className="text-muted">{profile.college}</p>
        </div>
        <ContactLinks />
      </div>
    </footer>
  );
}
