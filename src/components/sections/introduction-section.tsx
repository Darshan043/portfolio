import Image from "next/image";
import { profile } from "@/content/profile";

export function IntroductionSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="scroll-mt-28 px-4 pt-8 pb-6 sm:px-6 sm:pt-12 sm:pb-8 lg:pt-14"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_16.5rem] lg:gap-x-14">
        <div className="contents lg:flex lg:flex-col lg:gap-6">
          <h1
            id="home-heading"
            className="font-display from-foreground to-accent order-1 max-w-3xl bg-linear-to-r bg-clip-text text-4xl leading-none tracking-tight text-transparent sm:text-6xl lg:order-none lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="text-foreground order-3 max-w-2xl text-lg leading-8 sm:text-xl lg:order-none">
            {profile.metadataDescription}
          </p>
          <div className="order-4 flex flex-col gap-3 sm:flex-row lg:order-none">
            <a
              href="#projects"
              className="bg-accent text-background focus-visible:ring-foreground motion-safe:hover:bg-foreground inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium no-underline focus-visible:ring-2 focus-visible:outline-none motion-safe:transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-border text-foreground hover:border-accent focus-visible:ring-accent inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-medium no-underline focus-visible:ring-2 focus-visible:outline-none motion-safe:transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <figure className="order-2 mx-auto w-full max-w-xs lg:order-none lg:mx-0 lg:max-w-none">
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={profile.photo.width}
            height={profile.photo.height}
            priority
            sizes="(min-width: 1024px) 264px, 320px"
            className="border-border h-auto w-full rounded-2xl border"
          />
        </figure>
      </div>
    </section>
  );
}
