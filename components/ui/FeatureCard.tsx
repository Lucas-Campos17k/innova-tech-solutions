type FeatureCardProps = {
  title: string;
  description: string;
  dark?: boolean;
};

export default function FeatureCard({ title, description, dark = false }: FeatureCardProps) {
  return (
    <div className={`rounded-2xl p-8 shadow-xl ${dark ? "bg-slate-800 text-white" : "bg-white text-[#0F172A]"}`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className={dark ? "text-slate-300" : "text-[#64748B]"}>{description}</p>
    </div>
  );
}
