import { ProjectStatus } from "./project-status.type";

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly client: string;
  readonly status: ProjectStatus;
}

const projects: Array<Project> = [
  {
    id: "1",
    name: "E-commerce React",
    client: "InnovaTech S.A",
    status: "active",
  },
  {
    id: "2",
    name: "App Mobile",
    client: "Globex",
    status: "in_progress",
  },
];

export function getProjects(): ReadonlyArray<Project> {
  return projects;
}

export function addProject(project: Project): void {
  projects.push(project);
}