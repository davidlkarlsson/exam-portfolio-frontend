import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log("Backend URL:", baseUrl);

  if (!baseUrl) {
    return NextResponse.json(
      { error: "Backend URL is not defined" },
      { status: 500 }
    );
  }

  try {
    // Read form data from user frontend
    const body = await request.json();

    // Forward the form data to the backend API
    const backendRes = await fetch(`${baseUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await backendRes.json();

    return NextResponse.json(data, { status: backendRes.status });

  } catch (error) {
    console.error("Contact API error:", error);
    
    return NextResponse.json(
      { error: "The service is temporarily unavailable. Please try again later." },
      { status: 502 }
    );
  }
}
