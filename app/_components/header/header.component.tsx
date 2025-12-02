import { assets } from "@/assets/assets";
import Image from "next/image";

export function Header() {
  return (
    <>
      <div
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
      items-center justify-center gap-4"
      >
        <div className="mt-25">
          <Image
            src={assets.profile_img}
            alt="profile_img"
            className="rounded-full w-32"
          />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
          Hi! I'm David Karlsson
          <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
          junior software developer based in Stockholm.
        </h1>
        <p className="max-w-2xl mx-auto">
          I am a junior software developer from Stockholm, Sweden studying Java
          development at STI, Stockholms Tekniska Institut.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black
          text-white flex items-center gap-2"
          >
            contact me
            <Image
              src={assets.right_arrow_white}
              alt="hand_icon"
              className="w-4"
            />
          </a>

          <a
            href="/cv_david_karlsson.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume
            <Image src={assets.download_icon} alt="hand_icon" className="w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
