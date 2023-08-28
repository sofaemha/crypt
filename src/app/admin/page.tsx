import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { unsealData } from "iron-session/edge";
import { cookies } from "next/headers";
import Footer from "@/components/content/footer";
import Header from "@/components/content/header";
import LoginForm from "@/components/container/form";

export default async function Admin() {
  const cookieStore = cookies();
  const encryptedSession = cookieStore.get("name-of-your-cookie")?.value;
  const session = encryptedSession ? await unsealData(encryptedSession, { password: "your-password" }) : null;

  return (
    <main className="grid gap-4 w-full max-w-screen-sm my-0 mx-auto pt-0 sm:pt-9 sm:pb-6">
      <Header />
      {session ? (session.some_value as string) : <LoginForm />}
      <Footer />
    </main>
  );
}
