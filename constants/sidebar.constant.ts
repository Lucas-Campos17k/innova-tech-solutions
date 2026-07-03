import {
  ChartColumn,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
  UsersRound,
} from "lucide-react";

import { SidebarNavigationItem } from "@/types/sidebar-navigation.type";

export const SIDEBAR_NAVIGATION_ITEMS: ReadonlyArray<SidebarNavigationItem> = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Proyectos",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Clientes",
    href: "/clients",
    icon: Users,
  },
  {
    label: "Equipo",
    href: "/employees",
    icon: UsersRound,
  },
  {
    label: "Servicios",
    href: "/services",
    icon: ClipboardList,
  },
  {
    label: "Reportes",
    href: "/reports",
    icon: ChartColumn,
  },
  {
    label: "Administración",
    href: "/settings",
    icon: Settings,
  },
];