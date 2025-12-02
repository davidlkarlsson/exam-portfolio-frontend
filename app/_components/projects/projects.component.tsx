import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export function Projects() {
  return (
    <>
      <div id="projects" className="w-full px-[12%] py-10 scroll-mt-25">
        <h4 className="text-center mb-2 text-lg">My portfolio</h4>

        <h2 className="text-center text-5xl">My latest work</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Welcome to my web development portfolio! Explore some of my projects
          showcasing what I've learned so far.
        </p>

        <div className="grid grid-cols-auto my-10 gap-5">
          {workData.map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div
                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
			  py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7"
              >
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>

                <div className="border rounded-full border-black w-9 aspect-square flex items-center 
				justify-center group-hover:bg-activeLink">
                  <Image
                    src={assets.send_icon}
                    alt="send_icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
		border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-mobileMenu"
        >
          Show more
          <Image
            src={assets.right_arrow_bold}
            alt="right_arrow_bold"
            className="w-4"
          />
        </a>
      </div>
    </>
  );
}
