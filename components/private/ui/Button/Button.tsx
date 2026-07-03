import { cn } from "@/lib/cn";

interface ButtonProps {
  readonly label: string;
  readonly onClick: () => void;
  readonly variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary: "bg-[var(--dashboard-primary)] text-white",
    secondary: "bg-[var(--dashboard-sidebar)] text-[var(--dashboard-text)]",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-90",
        styles[variant]
      )}
    >
      {label}
    </button>
  );
}