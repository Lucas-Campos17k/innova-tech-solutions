export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ERP Empresarial",
    description:
      "Sistema para administrar ventas, clientes e inventario.",
    image: "/images/projects/erp.jpg",
    technologies: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    title: "Portal Educativo",
    description:
      "Plataforma para instituciones educativas con aulas virtuales.",
    image: "/images/projects/education.jpg",
    technologies: ["Next.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Sistema Hospitalario",
    description:
      "Gestión de pacientes, turnos e historias clínicas.",
    image: "/images/projects/hospital.jpg",
    technologies: ["Next.js", "PostgreSQL"],
  },
];