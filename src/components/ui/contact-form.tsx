"use client";

import { type FormEvent } from "react";

const fields = [
  {
    id: "contact-name",
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "contact-email",
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "contact-subject",
    name: "subject",
    label: "Subject",
    type: "text",
    autoComplete: "off",
  },
] as const;

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-xl" noValidate={false}>
      <p id="contact-form-note" className="text-muted text-sm leading-6">
        Sending a message requires an email service to be connected. This form
        does not submit anywhere yet.
      </p>
      <div className="mt-5 flex flex-col gap-4">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label
              htmlFor={field.id}
              className="text-foreground text-sm font-medium"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required
              className="border-border bg-background text-foreground focus-visible:ring-accent min-h-11 rounded-xl border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
            />
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="text-foreground text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="border-border bg-background text-foreground focus-visible:ring-accent rounded-xl border px-3 py-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
          />
        </div>
        <button
          type="submit"
          aria-describedby="contact-form-note"
          className="bg-accent text-background focus-visible:ring-foreground motion-safe:hover:bg-foreground inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-medium focus-visible:ring-2 focus-visible:outline-none motion-safe:transition-colors sm:w-auto sm:self-start"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
