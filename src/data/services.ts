export type Service = {
  id: string;
  title: string;
  summary: string;
  processSteps: string[];
  nextSteps: string;
};

export const SERVICES: Service[] = [
  {
    id: "tiendas-online",
    title: "Creación de tiendas onlines para tu negocio",
    summary:
      "Llevo adelante la creación de tu tienda online. Acompañándote en la elección de la plataforma correcta para tus necesidades y la adquisición de tu dominio. Llevo adelante la puesta en marcha del e-commerce y te explico cómo mantenerlo.",
    processSteps: [
      "Charla inicial para entender tu negocio, productos y objetivos.",
      "Elección de la plataforma adecuada y registro del dominio.",
      "Armado y configuración del e-commerce (catálogo, pagos y envíos).",
      "Capacitación para que puedas mantener y actualizar tu tienda.",
      "Lanzamiento y acompañamiento en los primeros pasos.",
    ],
    nextSteps:
      "Escribime por WhatsApp, email o LinkedIn contándome qué vendés y en qué etapa está tu negocio.",
  },
  {
    id: "software-a-medida",
    title: "Construcción de software a medida",
    summary:
      "Construyo software a medida para concretar tus ideas, desde la creación del software hasta la puesta en marcha y mantenimiento. Te asesoro en la elección del mejor stack tecnológico y la planificación a mediano plazo.",
    processSteps: [
      "Relevamiento de la idea, usuarios y restricciones del proyecto.",
      "Propuesta técnica con alcance, stack y planificación.",
      "Desarrollo por iteraciones con feedback continuo.",
      "Deploy, pruebas y puesta en producción.",
      "Soporte, mantenimiento y evolución del producto.",
    ],
    nextSteps:
      "Escribime tu idea, plazos y restricciones para coordinar una charla sin compromiso.",
  },
  {
    id: "dev-o-lider",
    title: "Trabajo por proyectos como dev o líder de equipo",
    summary:
      "Me sumo a tu equipo de trabajo como dev, especialista técnico, o como líder de equipo para llevar adelante los desafíos que tengas.",
    processSteps: [
      "Entender el contexto del equipo, el producto y los objetivos.",
      "Definir rol, entregables y forma de trabajo.",
      "Integración al flujo existente (reuniones, herramientas, ritmo de entrega).",
      "Acompañamiento técnico o de liderazgo según lo acordado.",
      "Cierre del proyecto o continuidad en el equipo.",
    ],
    nextSteps:
      "Contame el proyecto, el stack y si buscás un dev o liderazgo de equipo.",
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id);
}
