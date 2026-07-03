const projects = [
  {
    title: "Sistema de Gestión Empresarial",
    category: "Software Empresarial",
    description:
      "Plataforma para administrar clientes, ventas e inventario.",
  },
  {
    title: "Portal Educativo",
    category: "Educación",
    description:
      "Sistema web para instituciones educativas con aulas virtuales.",
  },
  {
    title: "Gestión Hospitalaria",
    category: "Salud",
    description:
      "Aplicación para administrar turnos, pacientes e historiales médicos.",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Casos de éxito
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Algunos ejemplos de soluciones que desarrollamos para nuestros clientes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500" />

              <div className="p-6">

                <span className="text-sm text-blue-600 font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {project.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}