import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Proyectos() {
  return (
    <main className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            dark
            title="Nuestros Proyectos"
            subtitle="Desarrollamos soluciones tecnológicas adaptadas a las necesidades de cada cliente."
          />
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}