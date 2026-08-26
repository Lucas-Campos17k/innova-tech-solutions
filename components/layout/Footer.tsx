export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h3 className="text-white text-xl font-bold">
            InnovaTech Solutions
          </h3>

          <p className="mt-2">
            Transformando ideas en soluciones tecnológicas.
          </p>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-right">

          <p>San Miguel de Tucumán, Tucumán, Argentina</p>

          <p> contacto@innovatech.com</p>

          <p>3815249895 - 3816282421</p>

        </div>

      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © 2026 InnovaTech Solutions. Todos los derechos reservados.
      </div>
    </footer>
  );
}