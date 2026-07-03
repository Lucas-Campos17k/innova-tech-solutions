import PrivateLayout from "@/components/private/layout/PrivateLayout/PrivateLayout";

export default function AdminLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <PrivateLayout>{children}</PrivateLayout>;
}