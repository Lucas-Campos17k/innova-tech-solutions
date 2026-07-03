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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          Tecnologías
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          {tecnologias.map((tech) => (
            <div
              key={tech}
              className="px-6 py-4 rounded-xl bg-blue-100 text-blue-700 font-semibold"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}