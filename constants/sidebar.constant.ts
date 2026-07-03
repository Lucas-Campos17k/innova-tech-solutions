import {
  ChartColumn,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
  UsersRound,
} from "lucide-react";

import { ROUTES } from "@/constants/routes.constant";
import {
  SidebarNavigationItem,
  SidebarNavigationSection,
} from "@/types/sidebar-navigation.type";

const GENERAL_ITEMS: ReadonlyArray<SidebarNavigationItem> = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: ROUTES.PRIVATE.ADMIN,
    icon: LayoutDashboard,
  },
];

const MANAGEMENT_ITEMS: ReadonlyArray<SidebarNavigationItem> = [
  {
    id: "projects",
    label: "Proyectos",
    href: ROUTES.PRIVATE.PROJECTS,
    icon: FolderKanban,
  },
  {
    id: "clients",
    label: "Clientes",
    href: ROUTES.PRIVATE.CLIENTS,
    icon: Users,
  },
  {
    id: "employees",
    label: "Equipo",
    href: ROUTES.PRIVATE.EMPLOYEES,
    icon: UsersRound,
  },
  {
    id: "services",
    label: "Servicios",
    href: ROUTES.PRIVATE.SERVICES,
    icon: ClipboardList,
  },
];

const ADMINISTRATION_ITEMS: ReadonlyArray<SidebarNavigationItem> = [
  {
    id: "reports",
    label: "Reportes",
    href: ROUTES.PRIVATE.REPORTS,
    icon: ChartColumn,
  },
  {
    id: "settings",
    label: "Administración",
    href: ROUTES.PRIVATE.SETTINGS,
    icon: Settings,
  },
];

export const SIDEBAR_NAVIGATION_SECTIONS: ReadonlyArray<SidebarNavigationSection> =
  [
    {
      id: "general",
      label: "General",
      items: GENERAL_ITEMS,
    },
    {
      id: "management",
      label: "Gestión",
      items: MANAGEMENT_ITEMS,
    },
    {
      id: "administration",
      label: "Administración",
      items: ADMINISTRATION_ITEMS,
    },
  ];