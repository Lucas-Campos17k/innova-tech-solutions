export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-sky-500 text-white"
    >
      <div className="text-center">

        <h1 className="text-6xl font-bold mb-6">
          InnovaTech Solutions
        </h1>

        <p className="text-xl max-w-2xl mx-auto mb-10">
          Transformamos ideas en soluciones tecnológicas innovadoras para impulsar el crecimiento de tu empresa.
        </p>

        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Solicitar Presupuesto
        </button>

      </div>
    </section>
  );
}