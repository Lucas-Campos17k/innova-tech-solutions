import { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface CardProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <section
      className={cn(
        "rounded-xl border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] shadow-sm",
        className,
      )}
    >
      {children}
    </section>
  );
}