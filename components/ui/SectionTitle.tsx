type SectionTitleProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  dark = false,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-lg max-w-3xl mx-auto ${dark ? "text-slate-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}