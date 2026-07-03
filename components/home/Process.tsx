import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import IconCard from "@/components/ui/IconCard";

const steps = [
  "Reunión con el cliente",
  "Análisis de requerimientos",
  "Diseño de la solución",
  "Desarrollo",
  "Pruebas",
  "Implementación",
];

export default function Process() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <SectionTitle title="Nuestro proceso" />
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <IconCard
              key={step}
              icon={String(index + 1).padStart(2, "0")}
              title={step}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
