import Container from "./Container";

type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-slate-900 text-white py-28">
      <Container>

        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold">
            {title}
          </h1>

          <p className="mt-6 text-xl text-slate-300 leading-8">
            {description}
          </p>

        </div>

      </Container>
    </section>
  );
}