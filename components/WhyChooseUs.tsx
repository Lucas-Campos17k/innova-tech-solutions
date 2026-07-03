const reasons = [
  {
    title: "Innovación",
    description:
      "Aplicamos tecnologías modernas para desarrollar soluciones eficientes.",
  },
  {
    title: "Calidad",
    description:
      "Cada proyecto pasa por procesos de revisión y pruebas para garantizar su funcionamiento.",
  },
  {
    title: "Seguridad",
    description:
      "Implementamos buenas prácticas para proteger la información y los sistemas.",
  },
  {
    title: "Soporte",
    description:
      "Acompañamos al cliente incluso después de finalizar el proyecto.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          ¿Por qué elegir InnovaTech?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4">
                {reason.title}
              </h3>

              <p className="text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}