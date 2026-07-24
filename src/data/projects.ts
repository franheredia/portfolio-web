const projectBase = `${import.meta.env.BASE_URL}projects/`;

export type Project = {
  id: string;
  title: string;
  description?: string[];
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
    description: [
      "- Desarrollo frontend del actual catálogo web de Toyota Argentina.",
      "- Utilización de las tecnologías Sveltekit, TypeScript, y Tailwind CSS.",
      "- Aplicación de la metodología Scrum.",
      "- Trabajo basado en los diseños de un especialista en UX, replicando su proyecto desde Figma.",
      "- Participación en llamadas con el cliente, y en decisiones sobre la factibilidad de los pedidos",
    ],
    featured: true,
  },
  {
    id: "fusion",
    title: "Página oficial de marketing - Distribuidora Fusion",
    year: "2026",
    tags: ["ReactJS", "SCSS", "Vercel", "React Router"],
    imageSrc: `${projectBase}fusion.png`,
    href: "https://www.distribuidorafusion.com.ar/",
    description: [
      "- ⁠Diseño y programación de plugins WordPress.",
      "- Configuraciones y mantenimiento de Clouflare.",
      "- Programación de nueva página con React, hosteado con Vercel y Render.",
      "- ⁠Mailing a través de Resend.",
    ],
    featured: false,
  },
  {
    id: "cresciente",
    title: "Mantenimiento y desarrollo - Cresciente Teoría Musical",
    year: "2024",
    tags: ["Wordpress", "PHP", "MySQL", "WooCommerce"],
    imageSrc: `${projectBase}cresciente.png`,
    href: "https://www.cresciente.net/",
    description: [
      "- Mantenimiento y limpieza de bases de datos.",
      "- Programación de código a medida.",
      "- Integración de sistemas de facturación.",
    ],
    featured: false,
  },
  {
    id: "panichelli",
    title: "Ecommerce con Tienda Nube - Corralón Panichelli",
    year: "2026",
    tags: ["Tienda Nube", "Asesoría"],
    imageSrc: `${projectBase}panichelli.png`,
    href: "https://www.tiendapanichelli.com.ar/",
    description: [
      "- Alta de cuenta.",
      "- Configuración de la tienda.",
      "- Gestión de dominio.",
      "- Guía de uso.",
    ],
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
    description: [
      "- Trabajo en coordinación con un Product Manager para las tareas de producto y responder a los objetivos marcados por el CTO o VP de Tecnología.",
      "- Adoptar y expandir la cultura de la empresa, fuertemente basada en la metodología 'Aquí no hay reglas' difundida por Netflix.",
      "- Liderar, organizar y motivar a los colaboradores del equipo de Delivery, identificando y superarando los desafíos que origina el crecimiento rápido.",
      "- Contribuir a las decisiones de Producto encontrando, junto con el Software Arquitect, la manera de trabajar con enfoque y lograr los mejores resultados.",
    ],
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
