import React from "react";
import BlurFade from "./magicui/blur-fade";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../data/Projects";

function Projects() {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <BlurFade>
    <div>
      <div className="ont-calistoga text-gray-900 text-2xl mt-2 mb-2 flex flex-col gap-0 xxs:flex-row xxs:items-center xxs:justify-between">
        <div className="font-calistoga text-gray-900 text-md">Projects</div>
        <div>
          <div className="flex items-end gap-1 text-blue-600 group cursor-pointer">
            <p className="text-gray-800">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-calistoga font-[100] text-sm underline transition-colors duration-300 group-hover:text-blue-700"
                href="https://github.com/shivdutt-B"
              >
                View all
              </a>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right size-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-5">
        {PROJECTS.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.liveUrl}
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              image={project.image}
              screenshots={project.screenshots}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
    </BlurFade>
  );
}

export default Projects;
