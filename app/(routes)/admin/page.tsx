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

  if (!user || user.authorities !== "ROLE_ADMIN") {
    redirect("/login");
  }
  
  return <AdminPageClient user={user} />;
}
