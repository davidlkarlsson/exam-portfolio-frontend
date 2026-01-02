"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import ProjectInterface from "@/app/_types/project.interface";
import { useEffect, useState } from "react";
import { formatDate } from "@/app/_utility/date";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IconTextButton } from "../buttons/icon-text-button.component";

export function Projects() {
  const [projectData, setProjectData] = useState<ProjectInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const INITIAL_VISIBLE_PROJECTS = 4;
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_VISIBLE_PROJECTS
  );
  const allVisible = visibleProjects === projectData.length;

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");

        if (!res.ok) {
          const data = await res.json();
          setErrorMsg(data.message || "Failed to fetch projects.");
          return;
        }

        const data = await res.json();
        setProjectData(data);
      } catch (error) {
        setErrorMsg("An error occurred while fetching projects.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <>
      {/* Projects section */}
      <section id="projects" className="w-full px-[12%] py-10 scroll-mt-25">
        <h4 className="text-center mb-2 text-lg">My portfolio</h4>
        <h2 className="text-center text-5xl">My latest projects</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Welcome to my web development portfolio! Explore some of my projects
          showcasing what I've learned so far.
        </p>

        {loading && (
          <p className="text-center text-gray-500">Loading projects...</p>
        )}

        {errorMsg && <p className="text-center text-red-600">{errorMsg}</p>}

        {!loading && !errorMsg && (
          <div className="grid justify-center grid-cols-projects my-10 gap-5">
            {projectData
              .slice(0, visibleProjects)
              .map((project: ProjectInterface) => (
                <article
                  key={project.id}
                  className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
                         transition-transform duration-300 hover:scale-[1.02] 
                         relative group"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                >
                  {/* Clickable Overlay */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="absolute inset-0 z-10"
                  />

                  {/* Desktop Overlay */}
                  <div
                    className="hidden sm:flex absolute inset-0 group-hover:bg-black/50 
                           items-center justify-center rounded-lg
                           transition-colors duration-300"
                  >
                    <span
                      className="absolute top-20 opacity-0 
                             group-hover:opacity-100 
                             text-white text-xl font-semibold 
                             transition-opacity duration-300"
                    >
                      View on GitHub
                    </span>
                  </div>

                  {/* Mobile Badge */}
                  <div
                    className="flex sm:hidden absolute top-3 right-3 
                           bg-black text-white text-[10px] 
                           font-semibold px-2 py-0.5 
                           rounded-full opacity-80"
                  >
                    GitHub
                  </div>

                  {/* White Info box */}
                  <div
                    className="bg-white min-w-11/12 rounded-md absolute 
                           bottom-5 left-1/2 -translate-x-1/2 
                           py-3 px-4 flex items-center 
                           justify-between duration-300 
                           group-hover:bottom-7"
                  >
                    <div>
                      <h3 className="font-semibold">{project.title}</h3>
                      
                      <p className="text-s text-gray-700">
                        {project.description}
                      </p>

                      {/* Inline metadata */}
                      <div className="flex flex-col sm:flex-row sm:gap-4 mt-1 text-xs text-gray-500 min-w-0">
                        <span className="whitespace-nowrap">Created: {formatDate(project.createdDate)}</span>
                        
                        {project.lastModifiedDate !== project.createdDate && (
                          <span className="whitespace-nowrap">
                            Updated: {formatDate(project.lastModifiedDate)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div
                      className="border rounded-full border-black 
                             w-7 aspect-square flex 
                             items-center justify-center 
                             group-hover:bg-activeLink shrink-0"
                    >
                      <Image
                        src={assets.send_icon}
                        alt="send_icon"
                        className="w-4"
                      />
                    </div>
                  </div>
                </article>
              ))}
          </div>
        )}

        {projectData.length > INITIAL_VISIBLE_PROJECTS && (
          <div className="flex justify-center my-20">
            <IconTextButton
              icon={allVisible ? ChevronUp : ChevronDown}
              text={allVisible ? "Show less" : "Show more"}
              onClick={() => {
                if (allVisible) {
                  setVisibleProjects(INITIAL_VISIBLE_PROJECTS);
                } else {
                  setVisibleProjects((prev) =>
                    Math.min(
                      prev + INITIAL_VISIBLE_PROJECTS,
                      projectData.length
                    )
                  );
                }
              }}
              iconProps={{
                size: 18,
                strokeWidth: 2,
              }}
              className="flex items-center rounded-full border border-gray-700 p-3 gap-1 hover:bg-mobileMenu hover:cursor-pointer"
            />
          </div>
        )}
      </section>
    </>
  );
}
