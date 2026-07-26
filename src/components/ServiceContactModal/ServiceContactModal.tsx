import { SOCIAL_LINKS } from "@/data/contact";
import type { Service } from "@/data/services";
import { Modal } from "@/components/Modal/Modal";
import "./ServiceContactModal.scss";

type ServiceContactModalProps = {
  service: Service;
  rowMode?: boolean;
  onClose: () => void;
};

const TITLE_ID = "service-contact-modal-title";

export function ServiceContactModal({
  service,
  rowMode,
  onClose,
}: ServiceContactModalProps) {
  return (
    <Modal titleId={TITLE_ID} onClose={onClose} wide>
      <div className="service-contact-modal">
        <h2 id={TITLE_ID} className="service-contact-modal__title">
          {service.title}
        </h2>

        <h3 className="service-contact-modal__section-title">Cómo suelo trabajar</h3>
        <div className="service-contact-modal__steps-container">
          <ol className="service-contact-modal__steps">
            {service.processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <h3 className="service-contact-modal__contact-title">
          ¡Coordinemos para comenzar!
        </h3>
        <ul
          className={`service-contact-modal__contact-list ${rowMode && "service-contact-modal__contact-list--rowmode"}`}
        >
          {SOCIAL_LINKS.map(({ channel, label, href, display }) => (
            <li key={channel}>
              <a
                href={href}
                className="service-contact-modal__contact-link"
                target={channel === "email" ? undefined : "_blank"}
                rel={channel === "email" ? undefined : "noreferrer"}
              >
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
