import { SERVICES } from "@/data/services";
import "./CtaCards.scss";

type CtaCardsProps = {
  onServiceOpen: (serviceId: string) => void;
};

export function CtaCards({ onServiceOpen }: CtaCardsProps) {
  return (
    <div className="cta-cards">
      {SERVICES.map((service) => (
        <div
          key={service.id}
          role="button"
          tabIndex={0}
          className="cta-cards__item"
          onClick={() => onServiceOpen(service.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onServiceOpen(service.id);
            }
          }}
        >
          <h3 className="cta-cards__item-title">{service.title}</h3>
          <p className="cta-cards__item-description">{service.summary}</p>
        </div>
      ))}
    </div>
  );
}
