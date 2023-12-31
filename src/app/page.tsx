import { getSession } from "@/script/utility/session";
import Footer from "@/components/content/global/footer";
import Header from "@/components/content/global/header";
import Tab from "@/components/content/client/tabs";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="grid gap-4 w-full max-w-screen-sm my-0 mx-auto pt-0 sm:pt-9 sm:pb-6">
      <Header />
      <Tab />
      <Footer session={session} />
    </main>
  );
}
