import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const contactOptions = [
	{
		label: "contacto@innovatech.com",
		href: "mailto:contacto@innovatech.com",
		icon: FaEnvelope,
	},
	{
		label: "3815249895",
		href: "https://wa.me/5493815249895",
		icon: FaWhatsapp,
	},
	{
		label: "@Innotech.digital.ar",
		href: "https://instagram.com/ecosfera.digital.ar",
		icon: FaInstagram,
	},
];

export default function ContactPage() {
	return (
		<main className="pt-20">
			<section className="bg-blue-600 px-6 py-20 text-center text-white">
				<div className="mx-auto max-w-4xl">
					<h1 className="text-4xl font-bold leading-tight md:text-5xl">
						¿Tenés un proyecto en mente?
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
						Nuestro equipo está preparado para ayudarte a convertir tus ideas en
						soluciones tecnológicas innovadoras.
					</p>
				</div>
			</section>

			<section id="medios-de-contacto" className="bg-slate-50 px-6 py-24 text-center">
				<div className="mx-auto max-w-4xl">
					<h2 className="text-4xl font-bold text-slate-900">
						Hablemos de tu proyecto
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-600">
						Elegí el medio que prefieras y nos pondremos en contacto con vos.
					</p>

					<div className="mx-auto mt-12 grid max-w-3xl gap-5">
					{contactOptions.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target={href.startsWith("http") ? "_blank" : undefined}
							rel={href.startsWith("http") ? "noreferrer" : undefined}
							className="flex min-h-[72px] items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 text-lg font-semibold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
						>
							<Icon aria-hidden="true" className="shrink-0 text-xl text-blue-600" />
							<span>{label}</span>
						</a>
					))}
					</div>
				</div>
			</section>
		</main>
	);
}
