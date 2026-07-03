import { LucideIcon } from "lucide-react";

export interface SidebarNavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
}

export interface SidebarNavigationSection {
  readonly id: string;
  readonly label: string;
  readonly items: ReadonlyArray<SidebarNavigationItem>;
}