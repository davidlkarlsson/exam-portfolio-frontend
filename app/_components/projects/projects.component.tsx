import { assets } from "@/assets/assets";
import Image from "next/image";
import ProjectInterface from "@/app/_types/project.interface";

export async function Projects() {
  const res = await fetch("http://localhost:3000/api/projects");

  const projectData: ProjectInterface[] = await res.json();

  return (
    <>
      <div id="projects" className="w-full px-[12%] py-10 scroll-mt-25">
        <h4 className="text-center mb-2 text-lg">My portfolio</h4>

        <h2 className="text-center text-5xl">My latest projects</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Welcome to my web development portfolio! Explore some of my projects
          showcasing what I've learned so far.
        </p>

        <div className="grid justify-center grid-cols-projects my-10 gap-5">
          {projectData.map((project: ProjectInterface) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg transition-transform 
              duration-300 hover:scale-[1.02] relative group"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
              {/* OVERLAY */}
              <div
                className="absolute inset-0 group-hover:bg-black/50 
               flex items-center justify-center rounded-lg
               transition-colors duration-300"
              >
                <span
                  className="opacity-0 group-hover:opacity-100 text-white text-xl font-semibold 
                 transition-opacity duration-300"
                >
                  View on GitHub
                </span>
              </div>

              {/* White info box */}

              <div
                className="bg-white min-w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
			          py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7"
              >
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>

                <div
                  className="border rounded-full border-black w-15 aspect-square flex items-center 
				          justify-center group-hover:bg-activeLink"
                >
                  <Image
                    src={assets.send_icon}
                    alt="send_icon"
                    className="w-4"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          href=""
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
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
