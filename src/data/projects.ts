const projectBase = `${import.meta.env.BASE_URL}projects/`;

export type Project = {
  id: string;
  title: string;
  description?: string;
  year: string;
  tags: string[];
  imageSrc: string;
  href: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "toyota",
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
    featured: true,
  },
  {
    id: "fusion",
    title: "Página oficial de marketing - Distribuidora Fusion",
    year: "2026",
    tags: ["ReactJS", "SCSS", "Vercel", "React Router"],
    imageSrc: `${projectBase}fusion.png`,
    href: "https://www.distribuidorafusion.com.ar/",
    featured: false,
  },
  {
    id: "cresciente",
    title: "Mantenimiento y desarrollo - Cresciente Teoría Musical",
    year: "2024",
    tags: ["Wordpress", "PHP", "MySQL", "WooCommerce"],
    imageSrc: `${projectBase}cresciente.png`,
    href: "https://www.cresciente.net/",
    featured: false,
  },
  {
    id: "panichelli",
    title: "Eccomerce con Tienda Nube - Corralón Panichelli",
    year: "2026",
    tags: ["Tienda Nube", "Asesoría"],
    imageSrc: `${projectBase}panichelli.png`,
    href: "https://www.tiendapanichelli.com.ar/",
    featured: false,
  },
  {
    id: "kilimo",
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
    featured: true,
  },
];

export type ProjectCardFormat = "horizontal" | "vertical";

export function getProjectFormat(
  project: Project,
  isLg: boolean,
): ProjectCardFormat {
  return project.featured && isLg ? "horizontal" : "vertical";
}
