import { SIDEBAR_NAVIGATION_ITEMS } from "@/constants/sidebar.constant";

import SidebarNavigationItem from "./SidebarNavigationItem";

export default function SidebarNavigation() {
  return (
    <nav className="flex flex-col gap-2 px-3 py-4">
      {SIDEBAR_NAVIGATION_ITEMS.map((navigationItem) => (
        <SidebarNavigationItem
          key={navigationItem.href}
          item={navigationItem}
        />
      ))}
    </nav>
  );
}