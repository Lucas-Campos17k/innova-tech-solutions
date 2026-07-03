import Card from "@/components/ui/Card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <Card>
      <div className="mb-6 text-blue-600">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </Card>
  );
}