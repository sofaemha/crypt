"use client"
import { useEffect, useState } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import LoginForm from "@/components/container/ui/form";
import Privileges from "@/components/container/ui/privileges";

export default function Admin({ session, cookie }: { session: Record<string, any> | null; cookie: RequestCookie | undefined }) {
  const [isSgined, setIsSgined] = useState(false);

  useEffect(() => {
    return session ? setIsSgined(true) : setIsSgined(false);
  }, [session]);

  return isSgined ? <Privileges session={session} cookie={cookie} /> : <LoginForm />;
}
