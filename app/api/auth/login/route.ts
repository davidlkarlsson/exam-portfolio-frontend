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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // Always read raw text first
  const text = await backendRes.text();
  console.log("RAW BACKEND RESPONSE:", text);

  // Try parse JSON ONLY if body is not empty
  let data: any = null;
  if (text && text.trim() !== "") {
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("JSON PARSE ERROR:", e);
      return NextResponse.json(
        { error: "Backend sent invalid JSON" },
        { status: 500 }
      );
    }
  }

  if (!backendRes.ok) {
    // If backend sent JSON with an error message
    if (data && data.error) {
      return NextResponse.json({ error: data.error }, { status: 401 });
    }

    // If backend sent empty body → use default message
    return NextResponse.json({ error: "Invalid login" }, { status: 401 });
  }

  return NextResponse.json({
    message: data.message,
    username: data.username,
  });
}
