import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

export function Services() {
  return (
    <>
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-25">
        <h4 className="text-center mb-2 text-lg">What I offer</h4>
        
        <h2 className="text-center text-5xl">My services</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          I'm still early in my journey as a developer, but I love solving
          problems, learning new technologies and turning ideas into small,
          functional projects.
        </p>

        <div className="grid grid-cols-auto gap-6 my-10">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
			  cursor-pointer hover:bg-mobileMenu hover:-translate-y-1 duration-300"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700">{title}</h3>
              <p className="text-sm text-gray-600 leading-5">{description}</p>
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                Read more{" "}
                <Image
                  src={assets.right_arrow}
                  alt="right_arrow"
                  className="w-4"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
