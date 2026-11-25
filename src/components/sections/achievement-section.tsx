import Image from "next/image";
import { Trophy } from "lucide-react";
import { achievement } from "@/content/achievement";
import { SectionHeading } from "@/components/ui/section-heading";

export function AchievementSection() {
  return (
    <div id="achievement" className="scroll-mt-28">
      <SectionHeading id="achievement-heading" title="Achievement" />
      <div className="border-border bg-surface mt-8 grid w-full max-w-3xl min-w-0 items-center gap-5 rounded-2xl border p-4 sm:w-fit sm:gap-6 sm:p-6 lg:grid-cols-[auto_17.5rem] lg:gap-8 lg:p-8">
        <div className="flex max-w-xl flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div className="border-accent text-accent grid size-12 shrink-0 place-items-center rounded-full border">
            <Trophy aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-display text-foreground text-3xl tracking-tight sm:text-4xl">
              {achievement.placement}
            </p>
            <p className="text-muted mt-2 text-base">{achievement.event}</p>
            <p className="text-muted mt-4 text-sm leading-6">
              {achievement.description}
            </p>
          </div>
        </div>
        <figure className="mx-auto w-60 max-w-full sm:w-72 lg:mx-0 lg:w-[17.5rem]">
          <Image
            src={achievement.photo.src}
            alt={achievement.photo.alt}
            width={achievement.photo.width}
            height={achievement.photo.height}
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 288px, 240px"
            className="border-border h-auto w-full rounded-2xl border"
          />
        </figure>
      </div>
    </div>
  );
}
