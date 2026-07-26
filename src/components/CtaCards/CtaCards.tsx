import { ArrowRight } from "lucide-react";
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
          aria-label={`${service.title}. ${service.summary}. Abrir detalle del servicio.`}
          onClick={() => onServiceOpen(service.id)}
        >
          <span className="cta-cards__item-body">
            <span className="cta-cards__item-title">{service.title}</span>
            <span className="cta-cards__item-description">{service.summary}</span>
          </span>
          <span className="cta-cards__item-icon" aria-hidden>
            <ArrowRight size={18} />
          </span>
        </button>
      ))}
    </div>
  );
}
