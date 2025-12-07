import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const baseUrl = process.env.BACKEND_ADMIN_URL;
  console.log("Backend URL:", baseUrl);

  if (!baseUrl) {
    return NextResponse.json(
      { error: "Backend URL is not defined" },
      { status: 500 }
    );
  }

  const { email, password } = await req.json();

  const backendRes = await fetch(`${baseUrl}/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const text = await backendRes.text();
  console.log("RAW BACKEND RESPONSE:", text);

  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    console.error("JSON PARSE ERROR:", e);
    return NextResponse.json(
      { error: "Backend sent invalid JSON" },
      { status: 500 }
    );
  }

  if (!backendRes.ok) {
    return NextResponse.json(
      { error: data.error || "Invalid login" },
      { status: 401 }
    );
  }
  return NextResponse.json({ message: "Logged in" });
}
