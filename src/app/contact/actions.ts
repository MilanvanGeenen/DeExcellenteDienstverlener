"use server";

export type ContactMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(input: ContactMessage): Promise<{ ok: boolean }> {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return { ok: false };
  }

  // TODO: koppel hier een e-maildienst (bijv. Resend of Postmark) zodat berichten echt in de inbox van Thijs landen.
  console.info("[contact] nieuw bericht", { name, email, phone: input.phone?.trim(), message });

  return { ok: true };
}
