import PageHeader from "@/components/ui/PageHeader";

type PageLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <main className="pt-20">
      <PageHeader title={title} description={description} />
      {children}
    </main>
  );
}
