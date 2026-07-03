"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Table from "@/components/private/ui/Table/Table";
import Button from "@/components/private/ui/Button/Button";

import { getProjects, Project } from "@/lib/projects/store/projects.store";
import { ProjectStatus } from "@/lib/projects/types/project.status.type";
import { TableColumn } from "@/types/table.type";

import Badge from "@/components/private/ui/Badge/Badge";
import {
  PROJECT_STATUS_LABEL,
  PROJECT_STATUS_VARIANT,
} from "@/constants/project.status.constant";

export default function ProjectsPage() {
  const router = useRouter();

  const [filter, setFilter] = useState<ProjectStatus | "all">("all");

  const [projects, setProjects] = useState<ReadonlyArray<Project>>([]);

  const filteredProjects =
  filter === "all"
    ? projects
    : projects.filter((p) => p.status === filter);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const columns: ReadonlyArray<TableColumn<Project>> = [
    {
      key: "name",
      header: "Proyecto",
    },
    {
      key: "client",
      header: "Cliente",
    },
    {
  key: "status",
  header: "Estado",
  render: (row) => (
    <Badge
      label={PROJECT_STATUS_LABEL[row.status]}
      variant={PROJECT_STATUS_VARIANT[row.status]}
    />
  ),
}
  ];

  const actions = [
  {
    label: "Ver",
    onClick: (row: Project) => {
      console.log("view", row.id);
    },
  },
  {
    label: "Finalizar",
    variant: "primary",
    onClick: (row: Project) => {
      console.log("finish", row.id);
    },
  },
  {
    label: "Eliminar",
    variant: "danger",
    onClick: (row: Project) => {
      console.log("delete", row.id);
    },
  },
];

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold text-[var(--dashboard-text)]">
          Proyectos
        </h1>

        <Button
          label="Nuevo proyecto"
          onClick={() => router.push("/admin/projects/new")}
        />
      </div>

      <Table columns={columns} data={filteredProjects} />
      <div className="flex gap-2">
          <Button label="Todos" onClick={() => setFilter("all")} />
          <Button label="Activos" onClick={() => setFilter("active")} />
          <Button label="En progreso" onClick={() => setFilter("in_progress")} />
          <Button label="Pausados" onClick={() => setFilter("paused")} />
      </div>
    </div>
  );
}