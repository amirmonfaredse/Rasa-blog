import { auth } from "@/app/_data/auth";

export default async function Page() {
  const session = await auth();
  console.log(session);

  return <div>Main Dashboard</div>;
}
