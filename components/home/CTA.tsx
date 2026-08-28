import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section className="bg-[#2563EB]">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-blue-100">
            En InnovaTech Solutions convertimos ideas en soluciones
            tecnológicas que generan valor para tu negocio.
          </p>
          <div className="mt-10">
            <Button href="/Contacto" variant="secondary">
              Solicitar una consulta
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
