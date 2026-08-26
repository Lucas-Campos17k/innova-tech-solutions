import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-40 pb-32">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}

          <div>

            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full mb-6">
              Innovación • Software • IA
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">

              Soluciones tecnológicas

              <span className="block text-blue-400">
                para empresas
              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-8">
              Ayudamos a empresas y organizaciones a crecer mediante
              software a medida, inteligencia artificial,
              automatización y soluciones digitales innovadoras.
            </p>

            <div className="flex gap-4 mt-10">

              <Button href="/contacto">
                Solicitar una consulta
              </Button>

              <Button
                href="/servicios"
                variant="secondary"
              >
                Ver servicios
              </Button>

            </div>

          </div>

          {/* Dashboard */}

          <div className="relative">

            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <div className="flex justify-between mb-8">

                <div>
                  <h3 className="text-slate-900 text-2xl font-bold">
                    Dashboard
                  </h3>

                  <p className="text-gray-500">
                    InnovaTech Solutions
                  </p>

                </div>

                <div className="w-4 h-4 rounded-full bg-green-500" />

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-blue-100 rounded-xl p-6">
                  <p className="text-gray-500">
                    Clientes
                  </p>

                  <h2 className="text-4xl font-bold text-blue-700">
                    128
                  </h2>
                </div>

                <div className="bg-green-100 rounded-xl p-6">
                  <p className="text-gray-500">
                    Proyectos
                  </p>

                  <h2 className="text-4xl font-bold text-green-700">
                    54
                  </h2>
                </div>

                <div className="bg-purple-100 rounded-xl p-6">
                  <p className="text-gray-500">
                    IA
                  </p>

                  <h2 className="text-4xl font-bold text-purple-700">
                    12
                  </h2>
                </div>

                <div className="bg-orange-100 rounded-xl p-6">
                  <p className="text-gray-500">
                    Soporte
                  </p>

                  <h2 className="text-4xl font-bold text-orange-700">
                    99%
                  </h2>
                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}