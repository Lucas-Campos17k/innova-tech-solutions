export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-900 py-24 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contáctanos
        </h2>

        <p className="text-center text-slate-300 mb-12">
          ¿Tenés un proyecto en mente? Completá el formulario y nos pondremos en contacto con vos.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Nombre"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Apellido"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Empresa"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
          />

          <select
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 md:col-span-2"
          >
            <option>Seleccione un servicio</option>
            <option>Desarrollo Web</option>
            <option>Inteligencia Artificial</option>
            <option>Infraestructura</option>
            <option>Bases de Datos</option>
            <option>Ciberseguridad</option>
          </select>

          <textarea
            rows={6}
            placeholder="Contanos sobre tu proyecto..."
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 md:col-span-2"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 transition rounded-lg py-4 font-semibold md:col-span-2"
          >
            Enviar Consulta
          </button>

        </form>

      </div>
    </section>
  );
}