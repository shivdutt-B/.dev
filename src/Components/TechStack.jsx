import React, { useState } from 'react'
// import local logos for tech
import MatPlotLib from "../assets/techLogos/matplotlib.jpeg"
import Numpy from "../assets/techLogos/numpy.png"
import Pandas from "../assets/techLogos/pandas.png"
import Seaborn from "../assets/techLogos/seaborn.svg"

function TechStack() {
    // Tech logos which we are importing from third party
    const [techStack, setTechStack] = useState(['html', 'css', 'js', 'react', 'nodejs', 'express', 'mongodb', 'mysql', 'bootstrap', 'ts', 'tailwind', 'python', 'cpp', 'git', 'github', 'postman'])

    // Tech logos which are locally present (didn't get these logo in the third party)
    const [localTechStack, setLocalTechStack] = useState([Numpy, Pandas, MatPlotLib, Seaborn])

    // Number of techs imported + locals.
    const [techCount, setTechCount] = useState(techStack.length + localTechStack.length)


    const [hoveredTech, setHoveredTech] = useState(null);


    return (
        <div className="my-20 md:my-40 flex  justify-center" >
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

                        {localTechStack.map((tech, index) => (
                            <div
                                key={index}
                                className="relative inline-block m-[10px] max-w-[55px]"
                                onMouseEnter={() => setHoveredTech(tech)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <img
                                    className="hover:cursor-pointer w-[100%]"
                                    src={tech}
                                    alt="Tech icon"
                                />
                                {/* Tooltip */}
                                {hoveredTech === tech && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gray-800 text-white text-xs rounded py-1 px-2">
                                        {tech.split('/').pop().split('.')[0]}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                }

            </a>
        </div>
    )
}

export default TechStack