import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-block px-6 py-4 rounded-2xl font-semibold transition";

  const styles = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1E40AF]",
    secondary:
      "border border-[#2563EB] text-[#2563EB] hover:bg-blue-50",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}