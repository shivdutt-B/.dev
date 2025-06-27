import React, { useState } from "react";
// import local logos for tech
import Numpy from "../assets/techLogos/numpy.png";
import Pandas from "../assets/techLogos/pandas.png";

function TechStack() {
  // Tech logos which we are imported from third party
  const [techStack, setTechStack] = useState([
    "html",
    "css",
    "js",
    "react",
    "nodejs",
    "express",
    "mongodb",
    "mysql",
    "postgres",
    "prisma",
    "bootstrap",
    "ts",
    "tailwind",
    "python",
    "cpp",
    "git",
    "github",
    "postman",
    "aws",
    "docker",
    "kubernetes",
    "jenkins",
    "ansible",
    "kafka",
    "redis",
  ]);

  // Tech logos which are locally present (didn't get these logo in the third party)
  // const [localTechStack, setLocalTechStack] = useState({
  //   Numpy: Numpy,
  //   Pandas: Pandas,
  // });

  // Number of techs imported + locals.
  const [techCount, setTechCount] = useState(
    techStack.length
  );

  // For tool tip
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="my-20 mx-5 md:my-40 flex justify-center ">
      <a className="max-w-[350px] w-[100%] text-center tech-stack-icon-conainer">
        {
          <div className={`grid grid-cols-5 grid-row-[${techCount / 5}]`}>
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="relative inline-block m-[10px] max-w-[55px]"
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <img
                  className="hover:cursor-pointer w-[100%]"
                  src={`https://skillicons.dev/icons?i=${tech}`}
                  alt={`${tech} icon`}
                />
                {/* Tooltip */}
                {hoveredTech === tech && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gray-800 text-white text-xs rounded py-1 px-2">
                    {tech}
                  </div>
                )}
              </div>
            ))}

{/* {
            Object.entries(localTechStack).map(([name, tech], index) => (
              <div
                key={index} // Ensure each item has a unique key
                className="relative inline-block m-[10px] max-w-[55px]"
                onMouseEnter={() => setHoveredTech(name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <img
                  className="hover:cursor-pointer w-full" // Changed w-[100%] to w-full for consistent Tailwind styling
                  src={tech}
                  alt={`${name} icon`} // Updated alt text for accessibility
                />
                {hoveredTech === name && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gray-800 text-white text-xs rounded py-1 px-2">
                    {name}
                  </div>
                )}
              </div>
            ))
            } */}            
            
          </div>
        }
      </a>
    </div>
  );
}

export default TechStack;
