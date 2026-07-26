import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import type { ContactChannel } from "@/data/contact";
import "./WhatsAppSticky.scss";

type WhatsAppStickyProps = {
  onContactClick: (channel: ContactChannel) => void;
};

export function WhatsAppSticky({ onContactClick }: WhatsAppStickyProps) {
  return (
    <button
      type="button"
      className="whatsapp-sticky"
      aria-label="Contactar por WhatsApp"
      onClick={() => onContactClick("whatsapp")}
    >
      <SiWhatsapp size={28} aria-hidden />
    </button>
  );
}
