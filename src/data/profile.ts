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
} from "@icons-pack/react-simple-icons";
import {
  ArrowBigUpDash,
  BookOpenCheck,
  BrainCog,
  FastForward,
  HeartHandshake,
  MessageCircleCheck,
  NotebookPen,
  RefreshCcwDot,
  Smile,
  UsersRound,
} from "lucide-react";

export const HERO = {
  name: "Franco Heredia",
  tagline:
    "Desarrollador Full Stack | Especialista en Frontend | Líder de equipo | Técnico en Programación | Licenciado en Teatro",
  titleLine1: "DESARROLLADOR",
  titleLine2: "FREELANCE",
  description:
    "Técnico en programación y Licenciado en Teatro. Mi experiencia como actor y director me brinda sólidas herramientas de comunicación y trabajo en equipo, que aplico en el ámbito laboral. Puedo aportar robustez, mantenibilidad y escalabilidad al código, y construir activamente un ambiente de trabajo eficiente y disfrutable a través del liderazgo y la gestión de equipos.",
  imageSrc: "./profile.png",
  imageAlt: "Foto de perfil de Fran Heredia",
} as const;

export const STATS = [
  { value: 8, label: "Años de experiencia" },
  { value: 12, label: "Proyectos completados" },
  { value: 10, label: "Clientes satisfechos" },
] as const;


export const HERO_TYPING_ROLES = [
  "DESARROLLADOR",
  "LÍDER DE EQUIPO",
  "ESPECIALISTA FRONT",
  "FULL STACK DEV",
] as const;

export const HERO_TYPING_GHOST = "ESPECIALISTA FRONT";

type Skill = { name: string; Icon: typeof SiReact; color: string };

export const SOFT_SKILLS: Skill[] = [
  { name: "Autodidacta", Icon: ArrowBigUpDash, color: "#3178C6" },
  { name: "Carisma", Icon: Smile, color: "#e85a2b" },
  { name: "Conocimientos pedagogicos", Icon: BookOpenCheck, color: "#7B68EE" },
  { name: "Excelente comunicación", Icon: MessageCircleCheck, color: "#44B78B" },
  { name: "Gestión de equipos", Icon: NotebookPen, color: "#06B6D4" },
  { name: "Liderazgo", Icon: UsersRound, color: "#61DAFB" },
  { name: "Soluciones ágiles", Icon: FastForward, color: "#7952B3" },
  { name: "Trabajo en equipo", Icon: HeartHandshake, color: "#1BB2A9" },
];

export const TECHNICAL_SKILLS: Skill[] = [
  { name: "AngularJS", Icon: SiAngular, color: "#FFFFFF" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "ChakraUI", Icon: SiChakraui, color: "#1BB2A9" },
  { name: "Clickup", Icon: SiClickup, color: "#7B68EE" },
  { name: "Cursor AI", Icon: SiCursor, color: "#FFFFFF" },
  { name: "Django REST", Icon: SiDjango, color: "#44B78B" },
  { name: "Django", Icon: SiDjango, color: "#44B78B" },
  { name: "GIT", Icon: SiGit, color: "#F03C2E" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "Inteligencia Artificial", Icon: BrainCog, color: "#7B68EE" },
  { name: "Javascript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
  { name: "JQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "ReactJs", Icon: SiReact, color: "#61DAFB" },
  { name: "Scrum", Icon: RefreshCcwDot, color: "#e85a2b" },
  { name: "SCSS", Icon: SiSass, color: "#CC6699" },
  { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
  { name: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
  { name: "SvelteKit", Icon: SiSvelte, color: "#FF3E00" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Typescript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Wordpress", Icon: SiWordpress, color: "#21759B" },
];
