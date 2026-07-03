import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Technologies />
      <Projects />
      <Contact />
      <Contact />
      <Footer />
    </>
  );
}
