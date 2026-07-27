import { useState } from "react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import linkedInSvg from "@/assets/linkedIn.svg?raw";
import { FileDown, Mail } from "lucide-react";
import { SOCIAL_LINKS, type ContactChannel } from "@/data/contact";
import { CV_DOWNLOAD, HERO } from "@/data/profile";
import "./ProfileCard.scss";

type SocialIconId = "email" | "linkedin" | "whatsapp";

const SOCIAL_ICON_MAP = {
  email: Mail,
  whatsapp: SiWhatsapp,
} as const;

type ProfileCardProps = {
  onContactClick: (channel: ContactChannel) => void;
};

function LinkedInIcon() {
  return (
    <span
      className="profile-card__social-icon-svg"
      aria-hidden
      dangerouslySetInnerHTML={{ __html: linkedInSvg }}
    />
  );
}

function renderSocialIcon(channel: SocialIconId) {
  if (channel === "linkedin") {
    return <LinkedInIcon />;
  }
  const Icon = SOCIAL_ICON_MAP[channel];
  return <Icon size={20} color="currentColor" aria-hidden />;
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="profile-card__photo profile-card__photo--fallback"
        role="img"
        aria-label={HERO.imageAlt}
      />
    );
  }

  return (
    <img
      src={HERO.imageSrc}
      alt={HERO.imageAlt}
      className="profile-card__photo"
      onError={() => setFailed(true)}
    />
  );
}

export function ProfileCard({ onContactClick }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="profile-card__container">
        <figure className="profile-card__figure">
          <ProfilePhoto />
        </figure>
        <h2 className="profile-card__name">{HERO.name}</h2>
        <p className="profile-card__tagline">{HERO.tagline}</p>
        <ul className="profile-card__social" aria-label="Redes sociales">
          {SOCIAL_LINKS.map(({ channel, label }) => (
            <li key={channel}>
              <button
                type="button"
                className="profile-card__social-link"
                aria-label={label}
                onClick={() => onContactClick(channel)}
              >
                {renderSocialIcon(channel)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <a
        className="profile-card__cv-download"
        href={CV_DOWNLOAD.href}
        download={CV_DOWNLOAD.fileName}
      >
        <FileDown aria-hidden="true" />
        {CV_DOWNLOAD.label}
      </a>
    </div>
  );
}
