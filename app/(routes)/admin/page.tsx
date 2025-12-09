import { cookies } from "next/headers";
import { decodeJwt } from "@/app/_utility/jwt";
import AdminPageClient from "./admin-page-client";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    
  const cookieStore = await cookies();
  
  const token = cookieStore.get("authToken")?.value;

  if (!token) {
    redirect("/login");
  }

  const user = decodeJwt(token);

  return <AdminPageClient user={user} />;
}
