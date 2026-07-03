import { ProjectStatus } from "@/lib/projects/types/project.status.type";

export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  active: "Activo",
  in_progress: "En progreso",
  paused: "Pausado",
  finished: "Finalizado",
};

export const PROJECT_STATUS_VARIANT: Record<
  ProjectStatus,
  "success" | "warning" | "danger" | "default"
> = {
  active: "success",
  in_progress: "warning",
  paused: "danger",
  finished: "default",
};