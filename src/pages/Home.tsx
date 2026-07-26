import { useEffect, useState } from "react";
import { ConfirmDialog } from "@/components/ConfirmDialog/ConfirmDialog";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { CtaCards } from "@/components/CtaCards/CtaCards";
import { DevStats } from "@/components/DevStats/DevStats";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ServiceContactModal } from "@/components/ServiceContactModal/ServiceContactModal";
import { SkillBadge } from "@/components/SkillBadge/SkillBadge";
import { openContactLink, type ContactChannel } from "@/data/contact";
import { HERO, HERO_TYPING_ROLES, HERO_TYPING_GHOST, SOFT_SKILLS, TECHNICAL_SKILLS } from "@/data/profile";
import { getProjectFormat, PROJECTS } from "@/data/projects";
import { getServiceById } from "@/data/services";
import { useHomeBreakpoint } from "@/hooks/useHomeBreakpoint";
import "./Home.scss";

const HERO_TYPEWRITER_SPEED = 0.65;

function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(HERO_TYPING_ROLES[0]);
      return;
    }

    const word = HERO_TYPING_ROLES[wordIndex];
    const typeDelay = Math.round(55 / HERO_TYPEWRITER_SPEED);
    const deleteDelay = Math.round(20 / HERO_TYPEWRITER_SPEED);
    const pauseFull = Math.round(2000 / HERO_TYPEWRITER_SPEED);
    const pauseEmpty = Math.round(320 / HERO_TYPEWRITER_SPEED);

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pauseFull);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % HERO_TYPING_ROLES.length);
      }, pauseEmpty);
    } else if (deleting) {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length - 1)),
        deleteDelay,
      );
    } else if (text.length < word.length) {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + 1)),
        typeDelay,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, reducedMotion]);

  return (
    <span
      className="home-hero__title-line home-hero__title-line--primary home-hero__typewriter"
      aria-live="polite"
    >
      <span className="home-hero__typewriter-ghost" aria-hidden="true">
        {HERO_TYPING_GHOST}
      </span>
      <span className="home-hero__typewriter-live">
        {text}
        {!reducedMotion ? (
          <span className="home-hero__typewriter-cursor" aria-hidden="true">
            |
          </span>
        ) : null}
      </span>
    </span>
  );
}

function Home() {
  const { isLg } = useHomeBreakpoint();
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const [pendingContact, setPendingContact] = useState<ContactChannel | null>(
    null,
  );

  const openService = openServiceId ? getServiceById(openServiceId) : undefined;

  return (
    <main className="home-container">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__layout">
          <ProfileCard onContactClick={setPendingContact} />
          <div className="home-hero__content">
            <header>
              <h1 id="home-hero-title" className="home-hero__title">
                <HeroTypewriter />
                <span className="home-hero__title-line home-hero__title-line--muted">
                  {HERO.titleLine2}
                </span>
              </h1>
              <p className="home-hero__description">{HERO.description}</p>
            </header>
            <DevStats />
            <CtaCards onServiceOpen={setOpenServiceId} />
          </div>
        </div>
      </section>

      <section className="home-projects" aria-labelledby="home-projects-title">
        <h2 id="home-projects-title" className="home-projects__title">
          Algunos de los proyectos donde trabajé
        </h2>
        <ul className="home-projects__grid">
          {PROJECTS.map((project) => (
            <li
              key={project.id}
              className={
                project.featured
                  ? "home-projects__item home-projects__item--featured"
                  : "home-projects__item"
              }
            >
              <ProjectCard
                project={project}
                format={getProjectFormat(project, isLg)}
              />
            </li>
          ))}
        </ul>
      </section>


      <section className="home-skills" aria-labelledby="home-skills-title">
        <div className="home-skills__sweep" aria-hidden="true" />
        <div className="home-skills__inner">
          <h2 id="home-skills-title" className="home-skills__title">
            Mis Habilidades
          </h2>
          <h3 className="home-skills__subtitle">
            Herramientas Socioculturales
          </h3>
          <ul className="home-skills__grid">
            {SOFT_SKILLS.map(({ name, Icon, color }) => (
              <SkillBadge key={name} name={name} Icon={Icon} color={color} />
            ))}
          </ul>
          <h3
            id="home-skills-title-technical"
            className="home-skills__subtitle"
          >
            Herramientas Técnicas
          </h3>
          <ul
            className="home-skills__grid"
            aria-labelledby="home-skills-title-technical"
          >
            {TECHNICAL_SKILLS.map(({ name, Icon, color }) => (
              <SkillBadge key={name} name={name} Icon={Icon} color={color} />
            ))}
          </ul>
        </div>
      </section>

      <ContactSection onContactClick={setPendingContact} />

      {openService ? (
        <ServiceContactModal
          service={openService}
          rowMode={isLg}
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
    </main>
  );
}

export default Home;
