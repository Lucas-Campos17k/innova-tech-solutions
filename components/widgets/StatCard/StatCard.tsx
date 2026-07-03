import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

interface StatCardProps {
  readonly title: string;
  readonly value: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <article className="rounded-xl border border-[var(--dashboard-border)] bg-[var(--dashboard-surface)] p-5">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[var(--dashboard-text-muted)]">
            {title}
          </span>

          <span className="text-2xl font-semibold text-[var(--dashboard-text)]">
            {value}
          </span>

          <span className="text-xs text-[var(--dashboard-text-muted)]">
            {description}
          </span>
        </div>

        <div className="rounded-lg bg-[var(--dashboard-sidebar)] p-2 text-[var(--dashboard-primary)]">
          <Icon size={20} />
        </div>
      </div>
    </article>
  );
}