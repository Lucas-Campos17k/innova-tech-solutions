import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ServiceGrid from "@/components/services/ServiceGrid";
import TechnologyGrid from "@/components/technologies/TechnologyGrid";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero />

      <About />

      <ServiceGrid />

     <TechnologyGrid />
    
    <Testimonials />
    
    <Stats />
    
    <CTA />
    </main>
  );
}