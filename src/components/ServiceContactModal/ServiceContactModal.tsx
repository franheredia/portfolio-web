import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import linkedInSvg from "@/assets/linkedIn.svg?raw";
import { SOCIAL_LINKS } from "@/data/contact";
import type { Service } from "@/data/services";
import { Modal } from "@/components/Modal/Modal";
import "./ServiceContactModal.scss";

type ServiceContactModalProps = {
  service: Service;
  onClose: () => void;
};

const TITLE_ID = "service-contact-modal-title";

function LinkedInIcon() {
  return (
    <span
      className="service-contact-modal__contact-icon-svg"
      aria-hidden
      dangerouslySetInnerHTML={{ __html: linkedInSvg }}
    />
  );
}

function ContactIcon({ channel }: { channel: (typeof SOCIAL_LINKS)[number]["channel"] }) {
  if (channel === "linkedin") {
    return <LinkedInIcon />;
  }
  if (channel === "whatsapp") {
    return <SiWhatsapp size={18} color="currentColor" aria-hidden />;
  }
  return <Mail size={18} aria-hidden />;
}

export function ServiceContactModal({ service, onClose }: ServiceContactModalProps) {
  return (
    <Modal titleId={TITLE_ID} onClose={onClose} wide>
      <div className="service-contact-modal">
        <h2 id={TITLE_ID} className="service-contact-modal__title">
          {service.title}
        </h2>

        <h3 className="service-contact-modal__section-title">Cómo trabajo</h3>
        <ol className="service-contact-modal__steps">
          {service.processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="service-contact-modal__next-steps">{service.nextSteps}</p>

        <h3 className="service-contact-modal__contact-title">
          Cómo seguir la conversación
        </h3>
        <ul className="service-contact-modal__contact-list">
          {SOCIAL_LINKS.map(({ channel, label, href, display }) => (
            <li key={channel}>
              <a
                href={href}
                className="service-contact-modal__contact-link"
                target={channel === "email" ? undefined : "_blank"}
                rel={channel === "email" ? undefined : "noreferrer"}
              >
                <span className="service-contact-modal__contact-icon">
                  <ContactIcon channel={channel} />
                </span>
                <span className="service-contact-modal__contact-text">
                  <span className="service-contact-modal__contact-label">
                    {label}
                  </span>
                  <span className="service-contact-modal__contact-display">
                    {display}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
