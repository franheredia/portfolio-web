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
    "Desarrollador Full Stack | Especialista en Frontend | Líder de equipos | Técnico en Programación | Licenciado en Teatro",
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

export const SOFT_SKILLS: { name: string; Icon: typeof SiReact }[] = [
  { name: "Autodidacta", Icon: ArrowBigUpDash },
  { name: "Carisma", Icon: Smile },
  { name: "Conocimientos pedagogicos", Icon: BookOpenCheck },
  { name: "Excelente comunicación", Icon: MessageCircleCheck },
  { name: "Gestión de equipos", Icon: NotebookPen },
  { name: "Liderazgo", Icon: UsersRound },
  { name: "Rápida solución de problemas", Icon: FastForward },
  { name: "Trabajo en equipo", Icon: HeartHandshake },
];

export const TECHNICAL_SKILLS: { name: string; Icon: typeof SiReact }[] = [
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
