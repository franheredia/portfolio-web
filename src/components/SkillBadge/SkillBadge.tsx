import type { SiReact } from "@icons-pack/react-simple-icons";
import "./SkillBadge.scss";

type SkillBadgeProps = {
  name: string;
  Icon: typeof SiReact;
  color: string;
};

export function SkillBadge({ name, Icon, color }: SkillBadgeProps) {
  return (
    <li className="skill-badge" style={{ "--skill-color": color } as React.CSSProperties}>
      <Icon
        className="skill-badge__icon"
        size={40}
        color="currentColor"
        aria-hidden
      />
      <span className="skill-badge__label">{name}</span>
    </li>
  );
}
