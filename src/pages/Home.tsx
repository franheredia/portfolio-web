import { useState } from "react";
import { ConfirmDialog } from "@/components/ConfirmDialog/ConfirmDialog";
import { CtaCards } from "@/components/CtaCards/CtaCards";
import { DevStats } from "@/components/DevStats/DevStats";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { ServiceContactModal } from "@/components/ServiceContactModal/ServiceContactModal";
import { SkillBadge } from "@/components/SkillBadge/SkillBadge";
import { openContactLink, type ContactChannel } from "@/data/contact";
import { HERO, SOFT_SKILLS, TECHNICAL_SKILLS } from "@/data/profile";
import { getProjectFormat, PROJECTS } from "@/data/projects";
import { getServiceById } from "@/data/services";
import { useHomeBreakpoint } from "@/hooks/useHomeBreakpoint";
import "./Home.scss";

function Home() {
  const { isLg } = useHomeBreakpoint();
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const [pendingContact, setPendingContact] = useState<ContactChannel | null>(
    null,
  );

  const openService = openServiceId ? getServiceById(openServiceId) : undefined;

  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__layout">
          <ProfileCard onContactClick={setPendingContact} />
          <div className="home-hero__content">
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
        <h2 id="home-skills-title" className="home-skills__title">
          Habilidades blandas
        </h2>
        <ul className="home-skills__grid">
          {SOFT_SKILLS.map(({ name, Icon }) => (
            <SkillBadge key={name} name={name} Icon={Icon} />
          ))}
        </ul>
        <h2
          id="home-skills-title-technical"
          className="home-skills__title"
        >
          Habilidades técnicas
        </h2>
        <ul
          className="home-skills__grid"
          aria-labelledby="home-skills-title-technical"
        >
          {TECHNICAL_SKILLS.map(({ name, Icon }) => (
            <SkillBadge key={name} name={name} Icon={Icon} />
          ))}
        </ul>
      </section>

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
