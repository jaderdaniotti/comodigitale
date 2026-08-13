"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";
import { contactForm, finalCta } from "@/lib/home-content";

type ClientType = "privato" | "azienda";

const inputClass =
  "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-foreground/40";

function FieldLabel({
  children,
  optional,
}: {
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <span className="mb-2 flex items-baseline justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
      {children}
      {optional ? (
        <span className="font-medium normal-case tracking-normal opacity-70">
          {contactForm.optionalHint}
        </span>
      ) : null}
    </span>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [clientType, setClientType] = useState<ClientType>("privato");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-center font-display text-xl font-semibold" role="status">
        Grazie. Ti ricontattiamo a breve.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div
        role="tablist"
        aria-label="Tipo di cliente"
        className="grid grid-cols-2 rounded-xl border border-border bg-background p-1"
      >
        {(Object.keys(contactForm.tabs) as ClientType[]).map((type) => {
          const selected = clientType === type;
          return (
            <button
              key={type}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setClientType(type)}
              className={cn(
                "h-10 rounded-lg text-xs font-semibold uppercase tracking-[0.14em] transition",
                selected
                  ? "bg-accent text-ink"
                  : "text-muted hover:text-foreground",
              )}
            >
              {contactForm.tabs[type]}
            </button>
          );
        })}
      </div>

      <input type="hidden" name="tipoCliente" value={clientType} />

      {clientType === "privato" ? (
        <label className="block">
          <FieldLabel>{contactForm.fields.fullName}</FieldLabel>
          <input required name="nome" autoComplete="name" className={inputClass} />
        </label>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <FieldLabel>{contactForm.fields.companyName}</FieldLabel>
            <input
              required
              name="azienda"
              autoComplete="organization"
              className={inputClass}
            />
          </label>
          <label className="block">
            <FieldLabel optional>{contactForm.fields.contactPerson}</FieldLabel>
            <input name="referente" autoComplete="name" className={inputClass} />
          </label>
          <label className="block">
            <FieldLabel optional>{contactForm.fields.vat}</FieldLabel>
            <input name="piva" autoComplete="off" className={inputClass} />
          </label>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <FieldLabel>{contactForm.fields.phone}</FieldLabel>
          <input
            required
            type="tel"
            name="telefono"
            autoComplete="tel"
            className={inputClass}
          />
        </label>
        <label className="block">
          <FieldLabel>{contactForm.fields.email}</FieldLabel>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <FieldLabel optional>{contactForm.fields.service}</FieldLabel>
          <select name="servizio" defaultValue="" className={inputClass}>
            <option value="" disabled>
              {contactForm.placeholders.service}
            </option>
            {contactForm.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <FieldLabel optional>{contactForm.fields.budget}</FieldLabel>
          <select name="budget" defaultValue="" className={inputClass}>
            <option value="" disabled>
              {contactForm.placeholders.budget}
            </option>
            {contactForm.budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <FieldLabel optional>{contactForm.fields.website}</FieldLabel>
        <input
          type="text"
          name="sito"
          autoComplete="url"
          placeholder="https://"
          className={inputClass}
        />
      </label>

      <label className="block">
        <FieldLabel optional>{contactForm.fields.message}</FieldLabel>
        <textarea
          name="messaggio"
          rows={4}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground/40"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          required
          type="checkbox"
          name="privacy"
          className="mt-1 h-4 w-4 shrink-0 accent-accent"
        />
        <span>
          {contactForm.fields.privacy}{" "}
          <span className="text-foreground/70">*</span>
        </span>
      </label>

      <Button type="submit" className="w-full">
        {finalCta.cta}
      </Button>
    </form>
  );
}
