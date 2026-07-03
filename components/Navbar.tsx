export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <h1 className="text-2xl font-bold text-blue-700">
          InnovaTech
        </h1>

        <nav className="flex gap-8 text-gray-700 font-medium">

          <a href="#inicio" className="hover:text-blue-600">
            Inicio
          </a>

          <a href="#nosotros" className="hover:text-blue-600">
            Nosotros
          </a>

          <a href="#servicios" className="hover:text-blue-600">
            Servicios
          </a>

          <a href="#contacto" className="hover:text-blue-600">
            Contacto
          </a>

        </nav>

      </div>
    </header>
  );
}