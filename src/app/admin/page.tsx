import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "@/components/container/auth";
import Footer from "@/components/content/footer";
import Header from "@/components/content/header";

export default function Home() {
  return (
    <main className="grid gap-4 w-full max-w-screen-sm my-0 mx-auto pt-0 sm:pt-9 sm:pb-6">
      <Header />
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
      <Footer />
    </main>
  );
}
