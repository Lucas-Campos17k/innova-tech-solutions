type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-blue-400">{value}</h2>
      <p className="text-slate-300 mt-4">{label}</p>
    </div>
  );
}
