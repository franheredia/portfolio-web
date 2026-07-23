import { useState } from "react";
import {
  SiAngular,
  SiBootstrap,
  SiChakraui,
  SiClickup,
  SiCursor,
  SiDjango,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJquery,
  SiPython,
  SiReact,
  SiSass,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import linkedInSvg from "@/assets/linkedIn.svg?raw";
import "./Home.scss";
import {
  ArrowBigUpDash,
  ArrowRight,
  BookOpenCheck,
  BrainCog,
  FastForward,
  HeartHandshake,
  Mail,
  MessageCircleCheck,
  NotebookPen,
  RefreshCcwDot,
  Smile,
  UsersRound,
} from "lucide-react";
import { ConfirmDialog } from "@/components/ConfirmDialog/ConfirmDialog";
import { ServiceContactModal } from "@/components/ServiceContactModal/ServiceContactModal";
import {
  openContactLink,
  SOCIAL_LINKS,
  type ContactChannel,
} from "@/data/contact";
import { HERO, STATS } from "@/data/hero";
import { getServiceById, SERVICES } from "@/data/services";

const projectBase = `${import.meta.env.BASE_URL}projects/`;

type Project = {
  title: string;
  description?: string;
  year: string;
  tags: string[];
  imageSrc: string;
  href: string;
};

const FEATURED_PROJECTS: Project[] = [
  {
    title: "Liderazgo de equipo de desarrollo - Kilimo",
    year: "2022 - 2024",
    tags: [
      "Liderazgo de equipo",
      "Lider de delivery de software",
      "AngularJS",
      "Cursor AI",
      "SCSS",
    ],
    imageSrc: `${projectBase}kilimo.png`,
    href: "https://www.kilimo.com/",
  },
  {
    title: "Página oficial - Toyota Argentina",
    year: "2021",
    tags: [
      "Svelte",
      "SvelteKit",
      "Vercel",
      "Vite",
      "TailwindCSS",
      "Google Tag Manager",
    ],
    imageSrc: `${projectBase}toyota.png`,
    href: "https://e.toyota.com.ar/inventory",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Página oficial de marketing - Distribuidora Fusion",
    year: "2026",
    tags: ["ReactJS", "SCSS", "Vercel", "React Router"],
    imageSrc: `${projectBase}fusion.png`,
    href: "https://www.distribuidorafusion.com.ar/",
  },
  {
    title: "Mantenimiento y desarrollo - Cresciente Teoría Musical",
    year: "2024",
    tags: ["Wordpress", "PHP", "MySQL", "WooCommerce"],
    imageSrc: `${projectBase}cresciente.png`,
    href: "https://www.cresciente.net/",
  },
  {
    title: "Eccomerce con Tienda Nube - Corralón Panichelli",
    year: "2026",
    tags: ["Tienda Nube", "Asesoría"],
    imageSrc: `${projectBase}panichelli.png`,
    href: "https://www.tiendapanichelli.com.ar/",
  },
];

type SocialIconId = "email" | "linkedin" | "whatsapp";

const SOCIAL_ICON_MAP = {
  email: Mail,
  whatsapp: SiWhatsapp,
} as const;

const SOFT_SKILLS: { name: string; Icon: typeof SiReact }[] = [
  { name: "Autodidacta", Icon: ArrowBigUpDash },
  { name: "Carisma", Icon: Smile },
  { name: "Conocimientos pedagogicos", Icon: BookOpenCheck },
  { name: "Excelente comunicación", Icon: MessageCircleCheck },
  { name: "Gestión de equipos", Icon: NotebookPen },
  { name: "Liderazgo", Icon: UsersRound },
  { name: "Rápida solución de problemas", Icon: FastForward },
  { name: "Trabajo en equipo", Icon: HeartHandshake },
];
const TECHNICAL_SKILLS: { name: string; Icon: typeof SiReact }[] = [
  { name: "AngularJS", Icon: SiAngular },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "ChakraUI", Icon: SiChakraui },
  { name: "Clickup", Icon: SiClickup },
  { name: "Cursor AI", Icon: SiCursor },
  { name: "Django REST", Icon: SiDjango },
  { name: "Django", Icon: SiDjango },
  { name: "GIT", Icon: SiGit },
  { name: "HTML", Icon: SiHtml5 },
  { name: "Inteligencia Artificial", Icon: BrainCog },
  { name: "Javascript", Icon: SiJavascript },
  { name: "Jira", Icon: SiJira },
  { name: "JQuery", Icon: SiJquery },
  { name: "Python", Icon: SiPython },
  { name: "React Native", Icon: SiReact },
  { name: "ReactJs", Icon: SiReact },
  { name: "Scrum", Icon: RefreshCcwDot },
  { name: "SCSS", Icon: SiSass },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Svelte", Icon: SiSvelte },
  { name: "SvelteKit", Icon: SiSvelte },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Typescript", Icon: SiTypescript },
  { name: "Wordpress", Icon: SiWordpress },
];

function LinkedInIcon() {
  return (
    <span
      className="home-hero__social-icon-svg"
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

function SocialLinks({
  onContactClick,
}: {
  onContactClick: (channel: ContactChannel) => void;
}) {
  return (
    <ul className="home-hero__social" aria-label="Redes sociales">
      {SOCIAL_LINKS.map(({ channel, label }) => (
        <li key={channel}>
          <button
            type="button"
            className="home-hero__social-link"
            aria-label={label}
            onClick={() => onContactClick(channel)}
          >
            {renderSocialIcon(channel)}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="home-hero__photo home-hero__photo--fallback"
        role="img"
        aria-label={HERO.imageAlt}
      />
    );
  }

  return (
    <img
      src={HERO.imageSrc}
      alt={HERO.imageAlt}
      className="home-hero__photo"
      onError={() => setFailed(true)}
    />
  );
}

function ProfileCard({
  onContactClick,
}: {
  onContactClick: (channel: ContactChannel) => void;
}) {
  return (
    <div className="home-hero__card">
      <figure className="home-hero__figure">
        <ProfilePhoto />
      </figure>
      <h2 className="home-hero__name">{HERO.name}</h2>
      <p className="home-hero__tagline">{HERO.tagline}</p>
      <SocialLinks onContactClick={onContactClick} />
    </div>
  );
}

function HeroHeadline() {
  return (
    <header className="home-hero__headline">
      <h1 className="home-hero__title" id="home-hero-title">
        <span className="home-hero__title-line home-hero__title-line--primary">
          {HERO.titleLine1}
        </span>
        <span className="home-hero__title-line home-hero__title-line--muted">
          {HERO.titleLine2}
        </span>
      </h1>
      <p className="home-hero__description">{HERO.description}</p>
    </header>
  );
}

function HeroStats() {
  return (
    <dl className="home-hero__stats">
      {STATS.map(({ value, label }) => (
        <div key={label} className="home-hero__stat">
          <dt className="home-hero__stat-value">+{value}</dt>
          <dd className="home-hero__stat-label">{label}</dd>
        </div>
      ))}
    </dl>
  );
}

function HeroCTA({
  title,
  summary,
  onOpen,
}: {
  title: string;
  summary: string;
  onOpen: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="home-hero__cta"
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <h3 className="home-hero__cta-title">{title}</h3>
      <p className="home-hero__cta-description">{summary}</p>
    </div>
  );
}

function SkillCard({ name, Icon }: { name: string; Icon: typeof SiReact }) {
  return (
    <li className="home-skills__item">
      <Icon size={40} color="currentColor" aria-hidden />
      <span className="home-skills__label">{name}</span>
    </li>
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="home-projects__tags">
      {tags.map((tag) => (
        <li key={tag} className="home-projects__tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectCardLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="home-projects__link"
      aria-label="Ver proyecto"
      target="_blank"
      rel="noreferrer"
    >
      <ArrowRight size={20} aria-hidden />
    </a>
  );
}

function ProjectImage({
  src,
  title,
  variant,
}: {
  src: string;
  title: string;
  variant: "featured" | "compact";
}) {
  const [failed, setFailed] = useState(false);
  const className =
    variant === "featured"
      ? "home-projects__image home-projects__image--featured"
      : "home-projects__image home-projects__image--compact";

  if (failed) {
    return (
      <div
        className={`${className} home-projects__image-fallback`}
        role="img"
        aria-label={title}
      />
    );
  }

  return (
    <img
      src={src}
      alt=""
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function ProjectCard({
  project,
  variant,
}: {
  project: Project;
  variant: "featured" | "compact";
}) {
  const cardClass =
    variant === "featured"
      ? "home-projects__card home-projects__card--featured"
      : "home-projects__card home-projects__card--compact";

  return (
    <article className={cardClass}>
      <ProjectImage
        src={project.imageSrc}
        title={project.title}
        variant={variant}
      />
      <div className="home-projects__body">
        <h3 className="home-projects__name">{project.title}</h3>
        {project.description ? (
          <p className="home-projects__description">{project.description}</p>
        ) : null}
        <ProjectTags tags={project.tags} />
        <footer className="home-projects__footer">
          <span className="home-projects__year">{project.year}</span>
          <ProjectCardLink href={project.href} />
        </footer>
      </div>
    </article>
  );
}

function Home() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const [pendingContact, setPendingContact] = useState<ContactChannel | null>(
    null,
  );

  const openService = openServiceId ? getServiceById(openServiceId) : undefined;

  return (
    <>
      <div className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__layout">
          <ProfileCard onContactClick={setPendingContact} />
          <div className="home-hero__content">
            <HeroHeadline />
            <HeroStats />
            <div className="home-hero__cta-cards">
              {SERVICES.map((service) => (
                <HeroCTA
                  key={service.id}
                  title={service.title}
                  summary={service.summary}
                  onOpen={() => setOpenServiceId(service.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="home-projects" aria-labelledby="home-projects-title">
        <h2 id="home-projects-title" className="home-projects__title">
          Algunos de los proyectos donde trabajé
        </h2>
        <div className="home-projects__layout">
          <ProjectCard
            key={FEATURED_PROJECTS[1].title}
            project={FEATURED_PROJECTS[1]}
            variant="featured"
          />
          <ul className="home-projects__grid">
            {PROJECTS.map((project) => (
              <li key={project.title} className="home-projects__item">
                <ProjectCard project={project} variant="compact" />
              </li>
            ))}
          </ul>
          <ProjectCard
            key={FEATURED_PROJECTS[0].title}
            project={FEATURED_PROJECTS[0]}
            variant="featured"
          />
        </div>
      </div>
      <div className="home-skills" aria-labelledby="home-skills-title">
        <h2 id="home-skills-title" className="home-skills__title">
          Habilidades blandas
        </h2>
        <ul className="home-skills__grid">
          {SOFT_SKILLS.map(({ name, Icon }) => (
            <SkillCard key={name} name={name} Icon={Icon} />
          ))}
        </ul>
        <h2 id="home-skills-title-technical" className="home-skills__title">
          Habilidades técnicas
        </h2>
        <ul
          className="home-skills__grid"
          aria-labelledby="home-skills-title-technical"
        >
          {TECHNICAL_SKILLS.map(({ name, Icon }) => (
            <SkillCard key={name} name={name} Icon={Icon} />
          ))}
        </ul>
      </div>

      {openService ? (
        <ServiceContactModal
          service={openService}
          onClose={() => setOpenServiceId(null)}
        />
      ) : null}

      {pendingContact ? (
        <ConfirmDialog
          channel={pendingContact}
          onConfirm={() => {
            openContactLink(pendingContact);
            setPendingContact(null);
          }}
          onCancel={() => setPendingContact(null)}
        />
      ) : null}
    </>
  );
}

export default Home;
