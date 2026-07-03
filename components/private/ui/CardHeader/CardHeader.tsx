import { ReactNode } from "react";

interface CardHeaderProps {
  readonly children: ReactNode;
}

export default function CardHeader({
  children,
}: CardHeaderProps) {
  return (
    <header className="border-b border-[var(--dashboard-border)] px-6 py-4">
      <h2 className="text-lg font-semibold text-[var(--dashboard-text)]">
        {children}
      </h2>
    </header>
  );
}