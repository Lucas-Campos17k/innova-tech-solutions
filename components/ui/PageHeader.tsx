import Container from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-slate-900 text-white py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold">{title}</h1>
          {description && (
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
