import { NextResponse } from 'next/server'
import { sealData } from 'iron-session/edge';

export async function POST(request: Request) {
  const res = await request.json()
  return NextResponse.json({ res })
}