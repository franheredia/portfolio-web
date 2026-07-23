import type { SiReact } from "@icons-pack/react-simple-icons";
import "./SkillBadge.scss";

type SkillBadgeProps = {
  name: string;
  Icon: typeof SiReact;
};

export function SkillBadge({ name, Icon }: SkillBadgeProps) {
  return (
    <li className="skill-badge">
      <Icon size={40} color="currentColor" aria-hidden />
      <span className="skill-badge__label">{name}</span>
    </li>
  );
}
