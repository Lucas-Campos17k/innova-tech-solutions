import { technologies } from "@/lib/data/technologies";
import TechnologyCard from "./TechnologyCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TechnologyGrid() {
  return (
    <Container className="py-24">
      <SectionTitle
        title="Tecnologías"
        subtitle="Utilizamos herramientas modernas para desarrollar soluciones seguras, escalables y eficientes."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.name}
            technology={technology}
          />
        ))}
      </div>
    </Container>
  );
}