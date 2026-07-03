import { LucideIcon } from "lucide-react";

export interface SidebarNavigationItem {
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
}