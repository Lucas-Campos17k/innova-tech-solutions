export const ROUTES = {
  PUBLIC: {
    HOME: "/",
  },

  PRIVATE: {
    ADMIN: "/admin",
    PROJECTS: "/admin/projects",
    CLIENTS: "/admin/clients",
    EMPLOYEES: "/admin/employees",
    SERVICES: "/admin/services",
    REPORTS: "/admin/reports",
    SETTINGS: "/admin/settings",
  },
} as const;