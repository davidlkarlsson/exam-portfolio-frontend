"use client";

import { useState } from "react";
import { Navbar } from "../navbar/navbar.component";
import { Header } from "../header/header.component";
import { About } from "../about/about.component";
import { Services } from "../services/services.component";
import { Projects } from "../projects/projects.component";
import { Contact } from "../contact/contact.component";
import { Footer } from "../footer/footer.component";
import AdminPageClient from "../admin/admin-page-client";

export function HomeClient({ user }: { user: any }) {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <>
      <Navbar
        user={user}
        onOpenAdmin={() => setShowAdmin(true)}
      />

      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      {user?.authorities === "ROLE_ADMIN" && showAdmin && (
        <AdminPageClient
          user={user}
          onCloseAdmin={() => setShowAdmin(false)}
        />
      )}
    </>
  );
}
