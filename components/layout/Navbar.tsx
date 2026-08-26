import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="InnovaTech Solutions"
            width={120}
            height={120}
            priority
          />
        </Link>

        <nav className="flex gap-8 text-[#0F172A] font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#2563EB] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
