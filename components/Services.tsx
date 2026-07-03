const services = [
  {
    titulo: "Desarrollo Web",
    descripcion: "Aplicaciones modernas utilizando Next.js y tecnologías actuales.",
  },
  {
    titulo: "Inteligencia Artificial",
    descripcion: "Integración de IA para automatizar procesos y mejorar la productividad.",
  },
  {
    titulo: "Infraestructura",
    descripcion: "Implementación de servidores, redes y soluciones en la nube.",
  },
  {
    titulo: "Bases de Datos",
    descripcion: "Diseño y administración de bases de datos seguras y escalables.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.titulo}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold mb-4">
                {service.titulo}
              </h3>

              <p className="text-gray-600">
                {service.descripcion}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}