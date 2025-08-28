import { auth } from "@/lib/next-auth/auth";

export default async function AppPage() {
  const session = await auth();

  return (
    <div>
      <h1>App page</h1>
      <section>you have signed in as: {session?.user?.name}</section>
    </div>
  );
}
