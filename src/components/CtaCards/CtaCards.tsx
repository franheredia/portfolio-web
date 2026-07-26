import { SERVICES } from "@/data/services";
import "./CtaCards.scss";

type CtaCardsProps = {
  onServiceOpen: (serviceId: string) => void;
};

export function CtaCards({ onServiceOpen }: CtaCardsProps) {
  return (
    <div className="cta-cards">
      {SERVICES.map((service) => (
        <button
          key={service.id}
          type="button"
          className="cta-cards__item"
          aria-label={`${service.title}. ${service.summary}`}
          onClick={() => onServiceOpen(service.id)}
        >
          <span className="cta-cards__item-title">{service.title}</span>
          <span className="cta-cards__item-description">{service.summary}</span>
        </button>
      ))}
    </div>
  );
}
