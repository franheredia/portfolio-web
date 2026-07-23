export type ContactChannel = "whatsapp" | "email" | "linkedin";

export const CONTACT = {
  whatsapp: {
    display: "+54 9 11 0000-0000",
    href: "https://wa.me/5491100000000",
  },
  email: {
    display: "fran@ejemplo.com",
    href: "mailto:fran@ejemplo.com",
  },
  linkedin: {
    display: "linkedin.com/in/franheredia",
    href: "https://linkedin.com/in/franheredia",
  },
} as const;

export const CHANNEL_LABELS: Record<ContactChannel, string> = {
  whatsapp: "WhatsApp",
  email: "Email",
  linkedin: "LinkedIn",
};

export const SOCIAL_LINKS = [
  { channel: "whatsapp" as const, label: "Whatsapp", ...CONTACT.whatsapp },
  { channel: "email" as const, label: "Email", ...CONTACT.email },
  { channel: "linkedin" as const, label: "LinkedIn", ...CONTACT.linkedin },
] as const;

export function openContactLink(channel: ContactChannel) {
  const { href } = CONTACT[channel];
  if (channel === "email") {
    window.location.href = href;
  } else {
    window.open(href, "_blank", "noopener,noreferrer");
  }
}
