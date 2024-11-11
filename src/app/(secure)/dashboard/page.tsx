import { headers } from "next/headers";
import Link from "next/link";

import { auth } from "@/lib/auth";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        Public Dashboard
        <Link href="/sign-in">Sign In</Link>
      </div>
    );
  }
  return <div>Dashboard for {session.user.name}</div>;
}
