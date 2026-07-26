export type Service = {
  id: string;
  title: string;
  summary: string;
  processSteps: string[];
};

export const SERVICES: Service[] = [
  {
    id: "tiendas-online",
    title: "Creemos juntos la tienda web de tu negocio",
    summary:
      "Si buscás abrirte a la venta online de manera ágil.",
    processSteps: [
      "Charla inicial para entender tu negocio, sus productos y tus objetivos.",
      "Te ayudo a elegir la plataforma adecuada y a registrar tu dominio.",
      "Armo y configuro el e-commerce (catálogo, pagos, gestión de stock, etc.).",
      "Charla de capacitación para que puedas mantener y actualizar la tienda por tu cuenta.",
      "Lanzamiento y acompañamiento en tus primeros pasos.",
    ],
  },
  {
    id: "software-a-medida",
    title: "Construyamos software a medida de tu necesidad",
    summary:
      "Si querés una solución tecnológica específica para tu proyecto.",
    processSteps: [
      "Relevamiento de la idea que tenés. Reconocemos usuarios y restricciones del proyecto.",
      "Propuesta técnica con alcance, stack tecnológico y estimación de tiempo.",
      "Desarrollo por iteraciones con feedback continuo para ir ajustando la solución a tus necesidades.",
      "Lanzamiento, pruebas y puesta en producción del software.",
      "Documentación del software para que tengas autonomía en el mantenimiento y evolución.",
      "Soporte durante la primera etapa del proyecto, y coordinación de posibles planes a futuro.",
    ],
  },
  {
    id: "dev-o-lider",
    title: "Sumame a tu equipo",
    summary:
      "Si querés agregar un profesional como especialista, dev o líder de equipo para llevar adelante los desafíos que tengas.",
    processSteps: [
      "Charla para conocernos y entender el contexto del equipo, el proyecto y los objetivos.",
      "Definimos el rol desde el que puedo aportar valor, el esquema de trabajo y los entregables para llevar adelante el proyecto.",
      "Me integro con contexto al flujo existente (reuniones, herramientas, ritmo de entrega) para que el equipo pueda continuar trabajando sin interrupciones.",
      "Llevamos adelante el proyecto según lo acordado, con feedback continuo para ir ajustando la solución a tus necesidades.",
      "Al cierre del proyecto, nos juntamos para evaluar el éxito del mismo y definir posibles planes a futuro.",
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id);
}
