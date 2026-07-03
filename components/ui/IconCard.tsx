type IconCardProps = {
  icon: string;
  title: string;
  description?: string;
};

export default function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <span className="text-5xl font-bold text-[#2563EB]">{icon}</span>
      <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">{title}</h3>
      {description && <p className="mt-3 text-[#64748B]">{description}</p>}
    </div>
  );
}
