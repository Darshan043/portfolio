import { MobileNav } from "@/components/layout/mobile-nav";
import { profile } from "@/content/profile";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications & Achievements" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-border bg-background/90 sticky top-0 z-20 border-b backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#home"
          className="font-display text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center text-lg tracking-tight no-underline focus-visible:ring-2 focus-visible:outline-none"
        >
          {profile.name}
        </a>
        <nav
          aria-label="Sections"
          className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-3 gap-y-1 md:flex lg:gap-x-5"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 items-center text-sm no-underline focus-visible:ring-2 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <MobileNav links={links} />
      </div>
    </header>
  );
}
