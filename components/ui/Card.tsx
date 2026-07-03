type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 transition ${className}`}>
      {children}
    </div>
  );
}
