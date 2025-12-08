import { cookies } from "next/headers";
import { decodeJwt } from "@/app/_utility/jwt";

import { About } from "./_components/about/about.component";
import { Contact } from "./_components/contact/contact.component";
import { Header } from "./_components/header/header.component";
import { Navbar } from "./_components/navbar/navbar.component";
import { Projects } from "./_components/projects/projects.component";
import { Services } from "./_components/services/services.component";
import { Footer } from "./_components/footer/footer.component";

export default async function Home() {

  
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;
  const user = token ? decodeJwt(token) : null;

  return (
    <>
      <Navbar user={user} />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
