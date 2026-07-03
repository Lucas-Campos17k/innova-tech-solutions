import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionTitle
          title="Lo que dicen nuestros clientes"
          subtitle="Empresas que confiaron en nuestras soluciones tecnológicas."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <p className="text-gray-600 leading-7 mb-6">
                “{testimonial.message}”
              </p>

              <h3 className="font-bold text-slate-900">
                {testimonial.name}
              </h3>

              <p className="text-blue-600 text-sm">
                {testimonial.company}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}