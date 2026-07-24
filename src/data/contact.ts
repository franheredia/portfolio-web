export type ContactChannel = "whatsapp" | "email" | "linkedin";

export const CONTACT = {
  whatsapp: {
    display: "+54 9 351 2292543",
    href: "https://wa.me/+5493512292543",
  },
  email: {
    display: "franheredia.ov@gmail.com",
    href: "mailto:franheredia.ov@gmail.com",
  },
  linkedin: {
    display: "linkedin.com/in/francoheredia",
    href: "https://linkedin.com/in/francoheredia",
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
