'use client'; // Makes the component a Client Component (interactive with useState e.g)

import { assets } from "@/assets/assets";
import Image from "next/image";
import { LogIn, ArrowUpRight, SunMoon, Menu } from 'lucide-react';
import { NavButton } from "@/app/_components/buttons/nav-button.component";
import { SmNavButton } from "../buttons/sm-nav-button.component";
import { useEffect, useState } from "react";


export function Navbar() {
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScrolled(true)
      } else{
        setIsScrolled(false)
      }
    })
  },[])
  
  return (
    <>
      {/* Background */}
      
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="navlinks_bg"
          className="w-full"
        />
      </div>

	  {/* Main Navigation */}
      
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}> {/* z-50 puts it above everything else*/}
    
	    {/* Logo */}
    
        <a href="#top">
          <Image src={assets.logo} alt={"logo_david_karlsson"} className="w-25 cursor-pointer mr-14"></Image>
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
          <li>
            <a className={`font-['Gowun_Dodum'] ${activeLink === "home" ? "text-activeLink underline font-extrabold" : ""}`}
                href="#top"
                onClick={() => setActiveLink("home")}
                >
              Home
            </a>
          </li>
          <li>
            <a className={`font-['Gowun_Dodum'] ${activeLink === "about" ? "text-activeLink underline font-extrabold" : ""}`}
                href="#about"
                onClick={() => setActiveLink("about")}
                >
              About
            </a>
          </li>
          <li>
            <a className={`font-['Gowun_Dodum'] ${activeLink === "services" ? "text-activeLink underline font-extrabold" : ""}`}
                href="#services"
                onClick={() => setActiveLink("services")}
                >
              Services
            </a>
          </li>
          <li>
            <a className={`font-['Gowun_Dodum'] ${activeLink === "projects" ? "text-activeLink underline font-extrabold" : ""}`}
                href="#projects"
                onClick={() => setActiveLink("projects")}
                >
              Projects
            </a>
          </li>
          <li>
            <a className={`font-['Gowun_Dodum'] ${activeLink === "contact" ? "text-activeLink underline font-extrabold" : ""}`}
                href="#contact"
                onClick={() => setActiveLink("contact")}
                >
              Contact
            </a>
          </li>
        </ul>
        
        
        {/* Buttons */}
        <div className="flex items-center gap-4">

          {/* Theme Button */}
          <SmNavButton
            icon={SunMoon}
            iconProps={{ 
            size: 35, 
            color: "black",
            strokeWidth: 1
          }}
            className="cursor-pointer"
          />
          
          
          {/* Login Button */}
          <NavButton
            text={"Login"}
            href={"/login"}
            icon={LogIn}
            iconProps={{ 
            size: 18, 
            color: "black", 
            strokeWidth: 1 
          }} 
          />
          
          {/* Hamburger Button */}
          <SmNavButton
            icon={Menu}
            iconProps={{ 
            size: 35, 
            color: "black",
            strokeWidth: 2
          }}
            className="block md:hidden ml-3 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        
        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 
			      fixed top-0 bottom-0 w-64 z-50 h-screen 
            bg-mobileMenu transition duration-500
            ${isMenuOpen ? "right-0" : "-right-64"}
          `}
		  >

          {/* Close Button */}
          <div className="absolute right-6 top-8">
            <Image
              src={assets.close_black}
              alt="close_navbar_icon"
              className="w-5 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

		      {/* Mobile Menu Links */}
          <li>
            <a
              className="font-['Gowun_Dodum']"
              onClick={() => setIsMenuOpen(false)}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-['Gowun_Dodum']"
              onClick={() => setIsMenuOpen(false)}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="font-['Gowun_Dodum']"
              onClick={() => setIsMenuOpen(false)}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-['Gowun_Dodum']"
              onClick={() => setIsMenuOpen(false)}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="font-['Gowun_Dodum']"
              onClick={() => setIsMenuOpen(false)}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="font-['Gowun_Dodum']"
              onClick={() => setIsMenuOpen(false)}
              href="/login"
            >
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
