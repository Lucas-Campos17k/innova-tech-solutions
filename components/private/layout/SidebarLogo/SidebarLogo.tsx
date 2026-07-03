import Link from "next/link";

import { APPLICATION } from "@/constants/application.constant";
import { ROUTES } from "@/constants/routes.constant";

export default function SidebarLogo() {
  return (
    <Link
      href={ROUTES.PRIVATE.ADMIN}
      className="flex items-center gap-4 border-b border-[var(--dashboard-border)] px-6 py-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--dashboard-primary)] text-lg font-bold text-[var(--dashboard-text)]">
        IT
      </div>

      <div className="flex flex-col">
        <span className="text-base font-semibold text-[var(--dashboard-text)]">
          {APPLICATION.NAME}
        </span>

        <span className="text-sm text-[var(--dashboard-text-muted)]">
          Panel de gestión
        </span>
      </div>
    </Link>
  );
}