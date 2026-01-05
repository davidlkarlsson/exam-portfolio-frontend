import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

export function About() {
  return (
    <>
      <div id="about" className="w-full px-[12%] py-10 scroll-mt-25">
        <h4 className="text-center mb-2 text-lg">Introduction</h4>

        <h2 className="text-center text-5xl">About me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 max-w-5xl mx-auto">
          <div className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image
              src={assets.user_image}
              alt="user_image"
              className="w-full rounded-3xl"
            />
          </div>

          <div>
            <p className="mb-10 max-w-2xl">
              I'm David Karlsson, a junior software developer based in Stockholm
              with a strong interest in modern web and backend development. I
              study Java development at STI and enjoy building clean,
              user-focused applications with technologies like React, TypeScript
              and Java. I'm curious, driven, and always eager to learn new
              things — especially within tech, design and problem-solving.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({ icon, title, description }, index) => (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 hover:shadow-lg hover:border-gray-500"
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))}
            </ul>

            <h4 className="my-6 text-gray-700">Technologies & Tools I use:</h4>

            <ul className="flex flex-wrap items-center gap-3 sm:gap-5 max-w-full">
              {toolsData.map((tool, index) => (
                <li key={index}>
                  <a
                    title={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${tool.name} website`}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square
                   border border-gray-400 rounded-lg
                   hover:-translate-y-1 hover:shadow-lg
                   transition duration-300"
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      className="w-5 sm:w-7"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
