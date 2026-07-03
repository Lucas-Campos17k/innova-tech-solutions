import { ReactNode } from "react";

import PrivateSidebar from "../PrivateSidebar/PrivateSidebar";
import PrivateHeader from "../PrivateHeader/PrivateHeader";

interface PrivateLayoutProps {
  readonly children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div className="flex h-screen bg-[var(--dashboard-background)]">
      <PrivateSidebar />

      <div className="flex flex-1 flex-col">
        <PrivateHeader />

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}