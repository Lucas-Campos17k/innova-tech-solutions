import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <Section id="nosotros" className="bg-white">
      <Container>
        <SectionTitle
          title="¿Quiénes Somos?"
          subtitle="En InnovaTech Solutions desarrollamos soluciones tecnológicas para empresas de distintos sectores. Nos enfocamos en crear software moderno, seguro y escalable, acompañando a nuestros clientes durante todo el proceso de transformación digital."
        />
      </Container>
    </Section>
  );
}
