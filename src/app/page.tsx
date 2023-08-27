import Footer from "@/components/content/footer";
import Header from "@/components/content/header";
import Tab from "@/components/content/tabs";

export default function Home() {
  return (
    <main className="grid gap-4 w-full max-w-screen-sm my-0 mx-auto pt-0 sm:pt-9 sm:pb-6">
      <Header />
      <Tab />
      <Footer />
    </main>
  );
}
