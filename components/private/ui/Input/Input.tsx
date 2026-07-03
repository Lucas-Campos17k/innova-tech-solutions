import { cn } from "@/lib/cn";

interface InputProps {
  readonly label: string;
  readonly placeholder?: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly type?: "text" | "email" | "password";
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-[var(--dashboard-text-muted)]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "rounded-lg border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] px-3 py-2 text-sm text-[var(--dashboard-text)] outline-none",
          "focus:border-[var(--dashboard-primary)]"
        )}
      />
    </div>
  );
}