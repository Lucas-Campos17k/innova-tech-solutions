type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

export default function Input({
  label,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}