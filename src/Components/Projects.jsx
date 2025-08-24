import React from "react";
import BlurFade from "../components/magicui/blur-fade";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../data/Projects";

function Projects() {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div>
      <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-5">
        Projects
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {PROJECTS.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              image={project.image}
              screenshots={project.screenshots} // added
              // video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default Projects;
