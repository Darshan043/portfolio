import { FolderGit2, Link2, Mail, Phone, type LucideIcon } from "lucide-react";
import { profile } from "@/content/profile";

const contactIcons = {
  mail: Mail,
  github: FolderGit2,
  linkedin: Link2,
  phone: Phone,
} as const satisfies Record<
  (typeof profile.contacts)[number]["icon"],
  LucideIcon
>;

export function ContactLinks() {
  return (
    <nav aria-label="Contact">
      <ul className="flex flex-wrap gap-x-5 gap-y-1">
        {profile.contacts.map((contact) => {
          const Icon = contactIcons[contact.icon];

          return (
            <li key={contact.href}>
              <a
                href={contact.href}
                {...(contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={
                  contact.external
                    ? `${contact.label}, opens in a new tab`
                    : `${contact.label} ${contact.value}`
                }
                className="text-muted hover:text-foreground focus-visible:ring-accent inline-flex min-h-11 max-w-full items-center gap-2 text-sm no-underline focus-visible:ring-2 focus-visible:outline-none motion-safe:transition-colors"
              >
                <Icon
                  aria-hidden="true"
                  className="text-accent size-4 shrink-0"
                  strokeWidth={1.5}
                />
                <span className="break-words">{contact.value}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
