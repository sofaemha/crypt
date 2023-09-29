import { env } from "process";
import { cookies } from "next/headers";
import { getSession } from "@/script/utility/session";
import Footer from "@/components/content/global/footer";
import Header from "@/components/content/global/header";
import Admin from "@/components/content/admin/admin";

export default async function Administrator() {
  const session = await getSession();
  const cookieStore = cookies().get(env.NEXT_PUBLIC_ADMIN_SC as string);

  return (
    <main className="grid gap-4 w-full max-w-screen-sm my-0 mx-auto pt-0 sm:pt-9 sm:pb-6">
      <Header />
      <Admin session={session} cookie={cookieStore} />
      <Footer session={session} />
    </main>
  );
}
