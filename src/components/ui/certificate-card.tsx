"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { Certification } from "@/content/certifications";

export function CertificateCard({
  certification,
}: {
  certification: Certification;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);

  function showCertificate() {
    setOpen(true);
    dialogRef.current?.showModal();
  }

  function closeCertificate() {
    dialogRef.current?.close();
  }

  return (
    <article className="border-border bg-surface motion-safe:hover:border-accent flex h-full flex-col rounded-2xl border p-4 motion-safe:transition-colors">
      <button
        type="button"
        className="bg-foreground focus-visible:ring-accent flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-xl p-2 focus-visible:ring-2 focus-visible:outline-none"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`View ${certification.title} certificate`}
        onClick={showCertificate}
      >
        <Image
          src={certification.image.src}
          alt=""
          width={certification.image.width}
          height={certification.image.height}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-contain"
        />
      </button>
      <h3 className="font-display text-foreground mt-4 text-lg tracking-tight">
        {certification.title}
      </h3>
      <p className="text-muted mt-1 text-sm">{certification.platform}</p>
      <button
        type="button"
        className="border-border text-foreground focus-visible:ring-accent motion-safe:hover:border-accent mt-4 inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-sm font-medium focus-visible:ring-2 focus-visible:outline-none motion-safe:transition-colors"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={showCertificate}
      >
        View Certificate
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="border-border bg-background text-foreground w-[calc(100%-2rem)] max-w-4xl rounded-2xl border p-4 backdrop:bg-black/75 sm:p-6"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeCertificate();
          }
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id={titleId} className="font-display text-xl tracking-tight">
            {certification.title}
          </h3>
          <button
            type="button"
            className="border-border focus-visible:ring-accent inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm font-medium focus-visible:ring-2 focus-visible:outline-none"
            onClick={closeCertificate}
          >
            Close
          </button>
        </div>
        <p className="text-muted mt-1 text-sm">{certification.platform}</p>
        {/* The enlarged view uses the original file so certificate text is not recompressed. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={certification.image.src}
          alt={certification.image.alt}
          width={certification.image.width}
          height={certification.image.height}
          className="mt-4 h-auto max-h-[75vh] w-full object-contain"
        />
      </dialog>
    </article>
  );
}
