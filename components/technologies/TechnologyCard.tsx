import Image from "next/image";
import Card from "@/components/ui/Card";
import type { Technology } from "@/lib/data/technologies";

type TechnologyCardProps = {
  technology: Technology;
};

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <Card>
      <div className="flex flex-col items-center text-center">
        <Image
          src={technology.image}
          alt={technology.name}
          width={70}
          height={70}
          className="mb-6"
        />

        <h3 className="text-xl font-bold text-slate-900">
          {technology.name}
        </h3>
      </div>
    </Card>
  );
}