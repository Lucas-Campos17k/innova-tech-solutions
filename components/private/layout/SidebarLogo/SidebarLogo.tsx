import Link from "next/link";

import { APPLICATION } from "@/constants/application.constant";
import { ROUTES } from "@/constants/routes.constant";

export default function SidebarLogo() {
  return (
    <Link
      href={ROUTES.ADMIN}
      className="flex items-center gap-3 border-b border-[var(--dashboard-border)] px-6 py-5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--dashboard-primary)] font-bold text-[var(--dashboard-text)]">
        IT
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-[var(--dashboard-text)]">
          {APPLICATION.NAME}
        </span>

        <span className="text-xs text-[var(--dashboard-text-muted)]">
          Panel de gestión
        </span>
      </div>
    </Link>
  );
}