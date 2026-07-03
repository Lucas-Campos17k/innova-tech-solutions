import PrivateSidebar from "@/components/private/layout/PrivateSidebar/PrivateSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-[var(--dashboard-background)]">
      <PrivateSidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}