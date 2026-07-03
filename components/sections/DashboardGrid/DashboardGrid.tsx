import { ReactNode } from "react";

interface DashboardGridProps {
  readonly children: ReactNode;
}

export default function DashboardGrid({
  children,
}: DashboardGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {children}
    </section>
  );
}