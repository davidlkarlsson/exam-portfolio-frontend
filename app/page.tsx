'use client'; // Makes the component a Client Component (interactive with useState e.g)

import { Header } from "./_components/header/header.component";
import { Navbar } from "./_components/navbar/navbar.component";


export default function Home() {
  return (

    <>

    <Navbar />
    <Header />
    
    </>
    
  );
}
