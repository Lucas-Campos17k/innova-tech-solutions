export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas desarrolladas con tecnologías de última generación.",
    icon: "globe",
  },
  {
    id: 2,
    title: "Aplicaciones Móviles",
    description:
      "Desarrollo de aplicaciones móviles intuitivas y de alto rendimiento.",
    icon: "mobile",
  },
  {
    id: 3,
    title: "Inteligencia Artificial",
    description:
      "Automatización y asistentes inteligentes para empresas.",
    icon: "robot",
  },
  {
    id: 4,
    title: "ERP y CRM",
    description:
      "Sistemas empresariales para optimizar la gestión del negocio.",
    icon: "database",
  },
  {
    id: 5,
    title: "Análisis de Datos",
    description:
      "Transformamos datos en información útil para la toma de decisiones.",
    icon: "chart",
  },
  {
    id: 6,
    title: "Cloud",
    description:
      "Migración e integración de soluciones en la nube.",
    icon: "cloud",
  },
];