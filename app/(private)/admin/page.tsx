import {
  FolderKanban,
  Users,
  UsersRound,
  ClipboardList,
} from "lucide-react";

import DashboardGrid from "@/components/sections/DashboardGrid/DashboardGrid";
import StatCard from "@/components/widgets/StatCard/StatCard";

export default function AdminPage() {
  return (
    <DashboardGrid>
      <StatCard
        title="Proyectos activos"
        value="18"
        description="+3 este mes"
        icon={FolderKanban}
      />

      <StatCard
        title="Clientes activos"
        value="32"
        description="+5 este mes"
        icon={Users}
      />

      <StatCard
        title="Equipo"
        value="14"
        description="sin cambios"
        icon={UsersRound}
      />

      <StatCard
        title="Cotizaciones"
        value="6"
        description="pendientes"
        icon={ClipboardList}
      />
    </DashboardGrid>
  );
}