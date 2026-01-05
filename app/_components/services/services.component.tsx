"use client";

import { useState } from "react";
import { serviceData } from "@/assets/assets";
import Image from "next/image";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="w-full px-[12%] py-10 scroll-mt-25">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <h4 className="mb-2 text-lg">What I offer</h4>
        <h2 className="text-5xl">My services</h2>

        <p className="max-w-2xl mt-5 mb-12">
          I'm still early in my journey as a developer, but I love solving
          problems, learning new technologies and turning ideas into small,
          functional projects.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-auto items-start gap-8 my-10">
        {serviceData.map(({ icon, title, description, more }, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                border border-gray-400 rounded-lg px-8 py-12 flex flex-col
                transition duration-300 hover:-translate-y-1 min-h-[300px]
              "
            >
              {/* Icon */}
              <Image src={icon} alt="" className="w-10" />
              
              {/* Title */}
              <h3 className="text-lg my-4 text-gray-700">{title}</h3>

              {/* Content area */}
              <div className="grow">
                <p className="text-sm text-gray-600">{description}</p>

                {isOpen && <p className="text-sm text-gray-600 mt-8">{more}</p>}
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="text-sm underline cursor-pointer mt-6"
              >
                {isOpen ? "Show less" : "Read more"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
