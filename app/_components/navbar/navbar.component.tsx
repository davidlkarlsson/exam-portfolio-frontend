import { assets } from "@/assets/assets";
import Image from "next/image";
import { NavButton } from "@/app/_components/buttons/nav-button.component";
import { SmNavButton } from "../buttons/sm-nav-button.component";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"> {/* z-50 puts it above everything else*/}
    
	    {/* Logo */}
    
        <a href="#top">
          <h1 className="text-2xl font-bold py-3 cursor-pointer mr-14">
            David Karlsson
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-10">
          <li>
            <a className="font-['Gowun_Dodum']" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-['Gowun_Dodum']" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-['Gowun_Dodum']" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-['Gowun_Dodum']" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="font-['Gowun_Dodum']" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <SmNavButton
            src={assets.moon_icon}
            alt="switch_theme_icon"
            className="w-6 cursor-pointer"
          />
          <NavButton
            text={"Contact"}
            href={"#contact"}
            src={assets.arrow_icon}
            alt={"arrow_icon"}
          />
          <NavButton
            text={"Login"}
            href={"/login"}
            src={assets.right_arrow_bold}
            alt={"right_arrow_bold_icon"}
          />
          <SmNavButton
            src={assets.menu_black}
            alt={"hamburger_icon_black"}
            className="block md:hidden ml-3 w-6 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 
			fixed top-0 bottom-0 w-64 z-50 h-screen 
            bg-lightNavBar transition duration-500
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

		  {/* Menu Links */}

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
        </ul>
      </nav>
    </>
  );
}
