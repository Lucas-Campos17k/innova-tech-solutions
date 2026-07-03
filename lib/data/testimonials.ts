export type Testimonial = {
  id: number;
  name: string;
  company: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    company: "Grupo Comercial Norte",
    message:
      "InnovaTech Solutions nos ayudó a digitalizar procesos que antes hacíamos manualmente.",
  },
  {
    id: 2,
    name: "Carlos Medina",
    company: "Logística Integral",
    message:
      "El sistema desarrollado mejoró nuestra organización y redujo tiempos de trabajo.",
  },
  {
    id: 3,
    name: "Lucía Herrera",
    company: "Centro Médico San Rafael",
    message:
      "Recibimos una solución moderna, segura y adaptada a nuestras necesidades.",
  },
];