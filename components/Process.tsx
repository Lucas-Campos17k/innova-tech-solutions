const steps = [
  "Reunión con el cliente",
  "Análisis de requerimientos",
  "Diseño de la solución",
  "Desarrollo",
  "Pruebas",
  "Implementación",
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          Nuestro proceso
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white rounded-xl shadow p-8"
            >
              <span className="text-5xl font-bold text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}