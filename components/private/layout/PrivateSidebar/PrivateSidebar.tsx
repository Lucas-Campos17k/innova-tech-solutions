import { APPLICATION } from "@/constants/application.constant";

import SidebarFooter from "../SidebarFooter/SidebarFooter";
import SidebarLogo from "../SidebarLogo/SidebarLogo";
import SidebarNavigation from "../../navigation/SidebarNavigation";

export default function PrivateSidebar() {
  return (
    <aside
      className="flex h-screen flex-col border-r border-[var(--dashboard-border)] bg-[var(--dashboard-sidebar)]"
      style={{ width: APPLICATION.SIDEBAR_WIDTH }}
    >
      <SidebarLogo />

      <div className="flex-1 overflow-y-auto">
        <SidebarNavigation />
      </div>

      <SidebarFooter />
    </aside>
  );
}