"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {

  const cookieStore = await cookies();

  cookieStore.set("authToken", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  
  redirect("/");
}
