import { ReactNode } from "react";

interface CardContentProps {
  readonly children: ReactNode;
}

export default function CardContent({
  children,
}: CardContentProps) {
  return (
    <div className="p-6">
      {children}
    </div>
  );
}