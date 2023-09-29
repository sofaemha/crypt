import { NextResponse } from "next/server";
import { ironSessionWrapper } from "@/script/utility/session";

export async function POST(request: Request) {
  const session = ironSessionWrapper(async (request) => {
    await request.session.destroy();
    return NextResponse.json({ success: true });
  });

  try {
    return await session(request, { params: undefined });
  } catch (error: any) {
    return NextResponse.json({ error: true, text: error?.message });
  }
}
