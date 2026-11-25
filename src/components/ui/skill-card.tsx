import {
  Atom,
  Cloud,
  Database,
  FileCode,
  Layers,
  MessagesSquare,
  Palette,
  Server,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import type { Skill, SkillIconName } from "@/content/skills";

const skillIcons: Record<SkillIconName, LucideIcon> = {
  react: Atom,
  html: FileCode,
  css: Palette,
  node: Server,
  python: Terminal,
  genai: Sparkles,
  llm: MessagesSquare,
  mongodb: Database,
  postgresql: Layers,
  supabase: Cloud,
};

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skillIcons[skill.icon];

  return (
    <div className="surface-card border-border bg-surface min-w-0 rounded-2xl border px-4 py-5">
      <Icon
        aria-hidden="true"
        className="text-accent size-5"
        strokeWidth={1.5}
      />
      <p className="text-foreground mt-4 text-sm leading-5 font-medium">
        {skill.name}
      </p>
    </div>
  );
}
