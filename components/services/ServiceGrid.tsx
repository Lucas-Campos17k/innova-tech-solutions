"use client";

import {
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaChartBar,
  FaDatabase,
} from "react-icons/fa";

import { services } from "@/lib/data/services";
import ServiceCard from "./ServiceCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const icons = {
  globe: <FaGlobe size={40} />,
  mobile: <FaMobileAlt size={40} />,
  robot: <FaRobot size={40} />,
  cloud: <FaCloud size={40} />,
  chart: <FaChartBar size={40} />,
  database: <FaDatabase size={40} />,
};

export default function ServiceGrid() {
  return (
    <Container className="py-24">

      <SectionTitle
        title="Nuestros Servicios"
        subtitle="Desarrollamos soluciones tecnológicas para impulsar el crecimiento de nuestros clientes."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={icons[service.icon as keyof typeof icons]}
          />
        ))}

      </div>

    </Container>
  );
}