import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Project, ProjectCardFormat } from "@/data/projects";
import "./ProjectCard.scss";

type ProjectCardProps = {
  project: Project;
  format: ProjectCardFormat;
};

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="project-card__tags">
      {tags.map((tag) => (
        <li key={tag} className="project-card__tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectCardLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      className="project-card__link"
      aria-label={`Ver proyecto: ${title}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
    >
      <ArrowRight size={20} aria-hidden />
    </a>
  );
}

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="project-card__image project-card__image--fallback"
        role="img"
        aria-label={title}
      />
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className="project-card__image"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

function focusProjectCard(element: HTMLElement) {
  element.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "center",
    inline: "nearest",
  });
}

export function ProjectCard({ project, format }: ProjectCardProps) {
  const modifier =
    format === "horizontal"
      ? "project-card--horizontal"
      : "project-card--vertical";

  return (
    <article
      className={`project-card ${modifier}`}
      tabIndex={0}
      aria-label={`Enfocar proyecto: ${project.title}`}
      onClick={(event) => {
        focusProjectCard(event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          focusProjectCard(event.currentTarget);
        }
      }}
    >
      <ProjectImage src={project.imageSrc} title={project.title} />
      <div className="project-card__body">
        <h3 className="project-card__name">{project.title}</h3>
        <ProjectTags tags={project.tags} />
        <div className="project-card__description">
          {project.description?.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
        <footer className="project-card__footer">
          <span className="project-card__year">{project.year}</span>
          <ProjectCardLink href={project.href} title={project.title} />
        </footer>
      </div>
    </article>
  );
}
