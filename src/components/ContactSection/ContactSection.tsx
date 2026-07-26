import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { CONTACT, type ContactChannel } from "@/data/contact";
import "./ContactSection.scss";

type ContactSectionProps = {
  onContactClick: (channel: ContactChannel) => void;
};

export function ContactSection({ onContactClick }: ContactSectionProps) {
  return (
    <section className="contact-section" aria-labelledby="home-contact-title">
      <div className="contact-section__panel">
        <h2 id="home-contact-title" className="contact-section__title">
          ¿Charlamos?
        </h2>
        <p className="contact-section__lead">
          Contame tu idea y coordinamos una charla sin compromiso.
        </p>
        <ul className="contact-section__actions">
          <li>
            <button
              type="button"
              className="contact-section__action contact-section__action--primary"
              onClick={() => onContactClick("whatsapp")}
            >
              <SiWhatsapp size={22} aria-hidden />
              <span className="contact-section__action-text">
                <span className="contact-section__action-label">WhatsApp</span>
                <span className="contact-section__action-display">
                  {CONTACT.whatsapp.display}
                </span>
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="contact-section__action contact-section__action--secondary"
              onClick={() => onContactClick("email")}
            >
              <Mail size={22} aria-hidden />
              <span className="contact-section__action-text">
                <span className="contact-section__action-label">Email</span>
                <span className="contact-section__action-display">
                  {CONTACT.email.display}
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
