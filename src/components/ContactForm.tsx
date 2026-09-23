"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Arrow, buttonClasses } from "@/components/Button";
import { softEase } from "@/components/FadeIn";
import { site } from "@/lib/site";

type ContactMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Field = keyof ContactMessage;
type Errors = Partial<Record<Field, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldOrder: Field[] = ["name", "email", "phone", "message"];

function validate(values: ContactMessage): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Vul je naam in.";
  if (!values.email.trim()) errors.email = "Vul je e-mailadres in.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Dit lijkt geen geldig e-mailadres.";
  if (!values.message.trim()) errors.message = "Laat een kort bericht achter.";
  return errors;
}

const inputBase =
  "block w-full rounded-xl border bg-cream px-4 py-3.5 text-base text-ink transition-[border-color,box-shadow] duration-300 placeholder:text-ink-soft/50 focus:outline-none focus:ring-4";

export function ContactForm() {
  const [values, setValues] = useState<ContactMessage>({ name: "", email: "", phone: "", message: "" });
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);

  const errors = validate(values);
  const visibleError = (field: Field) => (touched[field] ? errors[field] : undefined);

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));
  const blur = (field: Field) => () => setTouched((t) => ({ ...t, [field]: true }));

  // De site is statisch (GitHub Pages), dus het bericht gaat via het e-mailprogramma van de bezoeker.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });

    const firstInvalid = fieldOrder.find((f) => errors[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const body = [
      `Naam: ${values.name.trim()}`,
      `E-mail: ${values.email.trim()}`,
      ...(values.phone.trim() ? [`Telefoon: ${values.phone.trim()}`] : []),
      "",
      values.message.trim(),
    ].join("\n");
    const subject = `Kennismaking via de website – ${values.name.trim()}`;
    window.location.assign(
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
  }

  const fieldProps = (field: Field) => {
    const error = visibleError(field);
    return {
      id: field,
      name: field,
      value: values[field],
      onChange: update(field),
      onBlur: blur(field),
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${field}-fout` : undefined,
      className: `${inputBase} ${
        error
          ? "border-error focus:border-error focus:ring-error/10"
          : "border-line hover:border-ink/25 focus:border-forest focus:ring-forest/10"
      }`,
    };
  };

  const errorText = (field: Field) => (
    <AnimatePresence initial={false}>
      {visibleError(field) && (
        <motion.p
          id={`${field}-fout`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-2 text-sm text-error"
        >
          {visibleError(field)}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="bedankt"
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: softEase }}
          onAnimationComplete={() => thanksRef.current?.focus()}
          className="flex flex-col items-start py-10 md:py-16"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-forest-soft text-forest">
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <h2 ref={thanksRef} tabIndex={-1} className="mt-8 text-h3 focus:outline-none">
            Bedankt voor je bericht, ik neem binnen één werkdag contact met je op.
          </h2>
          <p className="mt-4 max-w-prose text-ink-soft">
            Je e-mailprogramma is geopend met je bericht erin. Klik daar op verzenden om het af te
            ronden. Opende er niets? Mail dan direct naar{" "}
            <a href={`mailto:${site.email}`} className="text-forest underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
          <p className="mt-3 max-w-prose text-ink-soft">
            Heb je haast? Bel me gerust op{" "}
            <a href={site.phoneHref} className="text-forest underline underline-offset-4">
              {site.phone}
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="formulier"
          ref={formRef}
          noValidate
          onSubmit={onSubmit}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6"
        >
          <div className="mb-2">
            <h2 className="text-h3">Stuur een bericht</h2>
            <p className="mt-2 text-ink-soft">Vul je gegevens in, dan neem ik contact met je op.</p>
          </div>

          <div>
            <label htmlFor="name" className="mb-2 block text-[0.95rem] font-medium">
              Naam
            </label>
            <input type="text" autoComplete="name" {...fieldProps("name")} />
            {errorText("name")}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-[0.95rem] font-medium">
                E-mail
              </label>
              <input type="email" autoComplete="email" inputMode="email" {...fieldProps("email")} />
              {errorText("email")}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 flex items-baseline justify-between text-[0.95rem] font-medium">
                Telefoon <span className="text-sm font-normal text-ink-soft">optioneel</span>
              </label>
              <input type="tel" autoComplete="tel" inputMode="tel" {...fieldProps("phone")} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-[0.95rem] font-medium">
              Bericht
            </label>
            <textarea
              rows={6}
              placeholder="Waar loop je tegenaan, of waar wil je over sparren?"
              {...fieldProps("message")}
              className={`${fieldProps("message").className} resize-y`}
            />
            {errorText("message")}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <button type="submit" className={buttonClasses("primary")}>
              Verstuur bericht
              <Arrow />
            </button>
            <p className="text-sm text-ink-soft">Ik reageer binnen één werkdag.</p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
