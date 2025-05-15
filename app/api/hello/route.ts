import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from NextJS API",
    body: {
      text1: "Text 1",
      text2: "Text 2",
    },
  });
}

export async function POST(req: Request) {
  const data = await req.json();
  const { name } = data;

  return NextResponse.json({
    message: `Hello ${name} from NextJS API!`,
  });
}
