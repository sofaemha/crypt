import { cookies } from "next/headers";
import { getSession } from "@/script/utility/session";
import Footer from "@/components/content/footer";
import Header from "@/components/content/header";
import LoginForm from "@/components/container/form";
import Privileges from "@/components/container/admin";

export default async function Administrator() {
  const session = await getSession();
  const cookieStore = cookies().get(process.env.NEXT_PUBLIC_ADMINISTRATOR_SESSION_COOKIE as string);

  return (
    <main className="grid gap-4 w-full max-w-screen-sm my-0 mx-auto pt-0 sm:pt-9 sm:pb-6">
      <Header />
      {session ? <Privileges session={session} cookie={cookieStore} /> : <LoginForm />}
      <Footer session={session} />
    </main>
  );
}
