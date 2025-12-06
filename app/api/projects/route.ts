import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://exam-portfolio-backend.onrender.com/api/v1/public/projects"
  );

  const data = await res.json();
  
  return NextResponse.json(data);
}
