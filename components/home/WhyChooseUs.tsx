import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";

const reasons = [
  {
    title: "Innovación",
    description: "Aplicamos tecnologías modernas para desarrollar soluciones eficientes.",
  },
  {
    title: "Calidad",
    description: "Cada proyecto pasa por procesos de revisión y pruebas para garantizar su funcionamiento.",
  },
  {
    title: "Seguridad",
    description: "Implementamos buenas prácticas para proteger la información y los sistemas.",
  },
  {
    title: "Soporte",
    description: "Acompañamos al cliente incluso después de finalizar el proyecto.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-slate-900 text-white">
      <Container>
        <SectionTitle title="¿Por qué elegir InnovaTech?" dark />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <FeatureCard key={reason.title} {...reason} dark />
          ))}
        </div>
      </Container>
    </Section>
  );
}
