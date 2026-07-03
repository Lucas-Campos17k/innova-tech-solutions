import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: "50+", label: "Proyectos desarrollados" },
  { value: "20+", label: "Clientes satisfechos" },
  { value: "8", label: "Especialistas" },
  { value: "98%", label: "Satisfacción de clientes" },
];

export default function Stats() {
  return (
    <Section className="bg-slate-900">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
