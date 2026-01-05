import { assets } from "@/assets/assets";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

          <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={assets.mail_icon} alt="mail_icon" className="w-6" />
            davidfkarlsson@proton.me
          </div>
        </div>

        <div
          className="text-center sm:flex items-center justify-between border-t 
		border-gray-400 mx-[10%] mt-12 py-6"
        >
          <p>
            &copy; {new Date().getFullYear()} David Karlsson. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a
                target="_blank"
				rel="noopener noreferrer"
                href="https://github.com/davidlkarlsson"
                className="hover:scale-110 hover:text-activeLink transition duration-200 inline-block"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
				rel="noopener noreferrer"
                href="https://www.linkedin.com/in/david-f-karlsson/"
                className="hover:scale-110 hover:text-activeLink transition duration-200 inline-block"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
