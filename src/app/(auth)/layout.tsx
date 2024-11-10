import { Card } from "@/components/ui/card";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex w-full items-center justify-center py-24">
        {children}
      </div>
    </main>
  );
}
