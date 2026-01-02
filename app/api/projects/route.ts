import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log("Backend URL:", baseUrl);

  if (!baseUrl) {
    return NextResponse.json(
      { error: "Backend URL is not defined" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`${baseUrl}/projects`, { cache: "no-store" });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Failed to fetch projects" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Projects API error:", error);
    
    return NextResponse.json(
      {
        message:
          "Server error while fetching projects",
      },
      { status: 502 }
    );
  }
}
