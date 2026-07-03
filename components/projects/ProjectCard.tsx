import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { Project } from "@/lib/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="rounded-xl mb-6 w-full h-60 object-cover"
      />

      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

      <p className="text-gray-600 leading-7 mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      <Button href="/contacto">Solicitar una solución similar</Button>
    </Card>
  );
}