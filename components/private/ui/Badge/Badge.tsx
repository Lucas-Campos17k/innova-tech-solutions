import { cn } from "@/lib/cn";

interface BadgeProps {
  readonly label: string;
  readonly variant: "success" | "warning" | "danger" | "default";
}

export default function Badge({
  label,
  variant,
}: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium";

  const variants = {
    success: "bg-green-500/10 text-green-400",
    warning: "bg-yellow-500/10 text-yellow-400",
    danger: "bg-red-500/10 text-red-400",
    default: "bg-[var(--dashboard-sidebar)] text-[var(--dashboard-text-muted)]",
  };

  return (
    <span className={cn(base, variants[variant])}>
      {label}
    </span>
  );
}