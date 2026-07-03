import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const tecnologias = [
  "Next.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "GitLab",
  "Microsoft Copilot",
];

export default function Technologies() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle title="Tecnologías" />
        <div className="flex flex-wrap justify-center gap-6">
          {tecnologias.map((tech) => (
            <div
              key={tech}
              className="px-6 py-4 rounded-2xl bg-blue-100 text-[#2563EB] font-semibold shadow-xl"
            >
              {tech}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
