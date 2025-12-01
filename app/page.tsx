'use client'; // Makes the component a Client Component (interactive with useState e.g)


import { About } from "./_components/about/about.component";
import { Header } from "./_components/header/header.component";
import { Navbar } from "./_components/navbar/navbar.component";
import { Services } from "./_components/services/services.component";


export default function Home() {
  return (

    <>
    
    <Navbar />
    <Header />
    <About />
    <Services />
    </>
    
  );
}
