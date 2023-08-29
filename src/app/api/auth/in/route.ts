import { NextResponse } from "next/server";
import { ironSessionWrapper } from "@/script/utility/session";

declare module "iron-session" {
  interface IronSessionData {
    account?: {
      username: string;
      password: string;
    };
  }
}

export async function POST(request: Request) {
  const { username, password }: { username: string; password: string } = await request.json();
  const isUsername: boolean = username === process.env.NEXT_PUBLIC_ADMINISTRATOR_USERNAME;
  const isPassword: boolean = password === process.env.NEXT_PUBLIC_ADMINISTRATOR_PASSWORD;

  const session = ironSessionWrapper(async (request) => {
    if (isUsername && isPassword) {
      request.session.account = { username, password };
      await request.session.save();
      return NextResponse.json({ success: true });
    } else {
      throw new Error("FatalError: Invalid credentials.");
    }
  });

  try {
    return await session(request, { params: undefined });
  } catch (error: any) {
    return NextResponse.json({ error: true, text: error?.message });
  }
}
