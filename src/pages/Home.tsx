import { useState } from "react";
import {
  SiAngular,
  SiBootstrap,
  SiChakraui,
  SiDjango,
  SiGit,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiJira,
  SiJquery,
  SiCursor,
  SiPython,
  SiReact,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiClickup,
  SiX,
} from "@icons-pack/react-simple-icons";
import linkedInSvg from "@/assets/linkedIn.svg?raw";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import {
  BookOpenCheck,
  NotebookPen,
  MessageCircleCheck,
  ArrowBigUpDash,
  FastForward,
  HeartHandshake,
  BrainCog,
  Smile,
  RefreshCcwDot,
  UsersRound,
  ArrowRight,
} from "lucide-react";

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
      "SCSS"
    ],
    imageSrc: `${projectBase}kilimo.png`,
    href: "#",
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
    href: "#",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Página oficial de marketing - Distribuidora Fusion",
    year: "2026",
    tags: ["ReactJS", "SCSS", "Vercel", "React Router"],
    imageSrc: `${projectBase}fusion.png`,
    href: "#",
  },
  {
    title: "Mantenimiento y desarrollo - Cresciente Teoría Musical",
    year: "2024",
    tags: ["Wordpress", "PHP", "MySQL", "Elementor", "WooCommerce"],
    imageSrc: `${projectBase}cresciente.png`,
    href: "#",
  },
  {
    title: "Eccomerce con Tienda Nube - Panichelli",
    year: "2026",
    tags: ["Tienda Nube", "Asesoría"],
    imageSrc: `${projectBase}panichelli.png`,
    href: "#",
  },
];
const HERO = {
  name: "Franco Heredia",
  tagline:
    "Desarrollador Frontend, líder de equipos. Técnico en Programación y Licenciado en Teatro",
  titleLine1: "DESARROLLADOR",
  titleLine2: "FREELANCE",
  description:
    "Apasionado por crear experiencias intuitivas y útiles. Especializado en transformar ideas en productos bien hechos, desde tiendas online hasta software a medida.",
  imageSrc: "./profile.png",
  imageAlt: "Foto de perfil de Fran Heredia",
} as const;

const STATS = [
  { value: 8, label: "Años de experiencia" },
  { value: 40, label: "Proyectos completados" },
  { value: 15, label: "Clientes" },
] as const;

type SocialIconId = "instagram" | "x" | "linkedin";

const SOCIAL_ICON_MAP = {
  instagram: SiInstagram,
  x: SiX,
} as const;

const SOCIAL_LINKS: {
  href: string;
  label: string;
  icon: SocialIconId;
}[] = [
  { href: "#", label: "X", icon: "x" },
  { href: "#", label: "Instagram", icon: "instagram" },
  { href: "#", label: "LinkedIn", icon: "linkedin" },
];

const SOFT_SKILLS: { name: string; Icon: typeof SiReact }[] = [
  { name: "Conocimientos pedagogicos", Icon: BookOpenCheck },
  { name: "Gestión de equipos", Icon: NotebookPen },
  { name: "Excelente comunicación", Icon: MessageCircleCheck },
  { name: "Autodidacta", Icon: ArrowBigUpDash },
  { name: "Rápida solución de problemas", Icon: FastForward },
  { name: "Carisma", Icon: Smile },
  { name: "Liderazgo", Icon: UsersRound },
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
  { name: "Svelte", Icon: SiSvelte },
  { name: "SvelteKit", Icon: SiSvelte },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Typescript", Icon: SiTypescript },
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

function renderSocialIcon(icon: SocialIconId) {
  if (icon === "linkedin") {
    return <LinkedInIcon />;
  }
  const Icon = SOCIAL_ICON_MAP[icon];
  return <Icon size={20} color="currentColor" aria-hidden />;
}

function SocialLinks() {
  return (
    <ul className="home-hero__social" aria-label="Redes sociales">
      {SOCIAL_LINKS.map(({ href, label, icon }) => (
        <li key={icon}>
          <a
            href={href}
            className="home-hero__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label={label}
          >
            {renderSocialIcon(icon)}
          </a>
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

function ProfileCard() {
  return (
    <aside className="home-hero__profile" aria-label="Perfil">
      <div className="home-hero__card">
        <figure className="home-hero__figure">
          <ProfilePhoto />
        </figure>
        <h2 className="home-hero__name">{HERO.name}</h2>
        <p className="home-hero__tagline">{HERO.tagline}</p>
        <SocialLinks />
      </div>
    </aside>
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

function HeroCTA({ wording, link }: { wording: string; link: string }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(link)} className="home-hero__cta">
      {wording}
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
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__layout">
          <ProfileCard />
          <div className="home-hero__content">
            <HeroHeadline />
            <HeroStats />
            <div className="home-hero__cta-cards">
              <HeroCTA
                wording="Quiero crear una tienda online para mi negocio"
                link="/contact"
              />
              <HeroCTA
                wording="Quiero crear mi software a medida"
                link="/contact"
              />
              <HeroCTA
                wording="Quiero que trabajes en mi proyecto"
                link="/contact"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-services">
        <h2>Mis servicios</h2>
        <h3 className="home-services__subtitle">
          Creación de tiendas onlines para tu negocio
        </h3>
        <p className="home-services__description">
          Llevo adelante la creación de tu tienda online. Acompañandote en la
          elección de la plataforma correcta para tus necesidades y la
          adquisición de tu dominio. Llevo adelante la puesta en marcha del
          eccommerce y te explico cómo mantenerlo.
        </p>
        <h3 className="home-services__subtitle">
          Construcción de software a medida
        </h3>
        <p className="home-services__description">
          Construyo software a medida para concretar tus ideas, desde la
          creación del software hasta la puesta en marcha y mantenimiento. Te
          asesoro en la elección del mejor stack tecnológico y la planificación
          a mediano plazo.
        </p>
        <h3 className="home-services__subtitle">
          Trabajo por proyectos como dev o líder de equipo
        </h3>
        <p className="home-services__description">
          Me sumo a tu equipo de trabajo como dev, especialista técnico, o como
          líder de equipo para llevar adelante los desafíos que tengas.
        </p>
      </section>
      <section className="home-skills" aria-labelledby="home-skills-title">
        <h2 id="home-skills-title" className="home-skills__title">
          Habilidades blandas
        </h2>
        <ul className="home-skills__grid">
          {SOFT_SKILLS.map(({ name, Icon }) => (
            <SkillCard key={name} name={name} Icon={Icon} />
          ))}
        </ul>
        <h2 id="home-skills-title" className="home-skills__title">
          Habilidades técnicas
        </h2>
        <ul className="home-skills__grid">
          {TECHNICAL_SKILLS.map(({ name, Icon }) => (
            <SkillCard key={name} name={name} Icon={Icon} />
          ))}
        </ul>
      </section>
      <section className="home-projects" aria-labelledby="home-projects-title">
        <h2 id="home-projects-title" className="home-projects__title">
          Algunos de los proyectos donde trabajé
        </h2>
        <div className="home-projects__layout">
          <ProjectCard
            key={FEATURED_PROJECTS[0].title}
            project={FEATURED_PROJECTS[0]}
            variant="featured"
          />
          <ul className="home-projects__grid">
            {PROJECTS.map((project) => (
              <li key={project.title}>
                <ProjectCard project={project} variant="compact" />
              </li>
            ))}
          </ul>
          <ProjectCard
            key={FEATURED_PROJECTS[1].title}
            project={FEATURED_PROJECTS[1]}
            variant="featured"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
