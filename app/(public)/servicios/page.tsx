import {
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaChartBar,
  FaBoxes,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe size={40} className="text-blue-600" />,
    title: "Desarrollo Web",
    description:
      "Creamos aplicaciones web modernas, rápidas y seguras adaptadas a las necesidades de cada empresa.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-blue-600" />,
    title: "Aplicaciones Móviles",
    description:
      "Desarrollamos aplicaciones móviles intuitivas para Android e iOS.",
  },
  {
    icon: <FaRobot size={40} className="text-blue-600" />,
    title: "Inteligencia Artificial",
    description:
      "Implementamos soluciones con IA para automatizar procesos y mejorar la toma de decisiones.",
  },
  {
    icon: <FaCogs size={40} className="text-blue-600" />,
    title: "Automatización",
    description:
      "Optimizamos tareas repetitivas mediante procesos automatizados.",
  },
  {
    icon: <FaDatabase size={40} className="text-blue-600" />,
    title: "Sistemas ERP y CRM",
    description:
      "Desarrollamos plataformas para gestionar clientes, ventas, inventario y recursos.",
  },
  {
    icon: <FaChartBar size={40} className="text-blue-600" />,
    title: "Análisis de Datos",
    description:
      "Convertimos datos en información útil para mejorar la estrategia del negocio.",
  },
  {
    icon: <FaBoxes size={40} className="text-blue-600" />,
    title: "Sistemas de Inventario",
    description:
      "Control inteligente de stock, productos y movimientos en tiempo real.",
  },
  {
    icon: <FaCloud size={40} className="text-blue-600" />,
    title: "Integración Cloud",
    description:
      "Implementamos soluciones en la nube para mejorar disponibilidad y escalabilidad.",
  },
];

export default function Servicios() {
  return (
    <main className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Nuestros Servicios
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas diseñadas para impulsar la
            transformación digital de empresas y organizaciones.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="mb-6">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}