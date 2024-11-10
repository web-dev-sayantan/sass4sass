import { auth } from "@/lib/auth";
import { Link } from "lucide-react";
import { headers } from "next/headers";
import { Suspense } from "react";

export default async function SecurePagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return (
      <p>
        You are authorized to view this page. Please{" "}
        <Link href="/sign-in">Sign In</Link>
      </p>
    );
  }
  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>;
}
