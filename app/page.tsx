import { cookies } from "next/headers";
import { decodeJwt } from "@/app/_utility/jwt";

import { HomeClient } from "./_components/home/HomeClient";

export default async function Home() {

  
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;
  const user = token ? decodeJwt(token) : null;
  console.log("Decoded user:", user);

  return (
    <>
      <HomeClient user={user} />
    </>
  );
}
