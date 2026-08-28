const values = [
  {
    title: "Innovación",
    description:
      "Aplicamos tecnologías modernas para desarrollar soluciones eficientes y adaptadas a cada cliente.",
  },
  {
    title: "Calidad",
    description:
      "Creamos software confiable, escalable y fácil de mantener.",
  },
  {
    title: "Compromiso",
    description:
      "Acompañamos al cliente durante todo el proceso de transformación digital.",
  },
  {
    title: "Seguridad",
    description:
      "Trabajamos con buenas prácticas para proteger la información y los sistemas.",
  },
];

export default function Nosotros() {
  return (
    <main className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Sobre Nosotros</h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            En InnovaTech Solutions desarrollamos soluciones tecnológicas
            innovadoras para empresas y organizaciones.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              ¿Quiénes somos?
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              InnovaTech Solutions es una empresa dedicada al desarrollo de
              software a medida. Su enfoque está en la innovación, la calidad y
              la adaptación a las necesidades de cada cliente, utilizando
              tecnologías modernas y metodologías ágiles.
            </p>
          </div>

          <div className="bg-blue-100 rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Soluciones a medida
            </h3>

            <p className="text-gray-700 leading-7">
              Desarrollamos aplicaciones web, sistemas de gestión, soluciones
              con inteligencia artificial, automatización de procesos e
              integraciones digitales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Nuestra esencia
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Lo que nos guía
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Construimos relaciones duraderas y soluciones que generan un
            impacto real en cada negocio.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="group rounded-3xl border border-white/20 border-t-4 border-t-blue-300 bg-white p-10 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              01
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Nuestra misión
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Desarrollar soluciones de software innovadoras y eficientes que
              ayuden a las empresas a optimizar sus procesos, mejorar su
              productividad y adaptarse a los desafíos del entorno digital.
            </p>
          </div>

          <div className="group rounded-3xl border border-white/20 border-t-4 border-t-blue-300 bg-white p-10 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              02
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Nuestra visión
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Ser una empresa referente en el desarrollo de soluciones
              tecnológicas innovadoras, reconocida por su calidad, capacidad de
              adaptación y compromiso con el éxito de sus clientes.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Nuestros valores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-slate-50 rounded-2xl p-8 shadow hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}