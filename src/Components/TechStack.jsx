import React, { useState } from 'react'

function TechStack() {
    const [techStack, setTechStack] = useState(['html', 'css', 'js', 'react', 'nodejs', 'express', 'mongodb', 'mysql', 'bootstrap', 'ts', 'tailwind', 'python', 'cpp', 'git', 'github', 'postman'])
    return (
        <div className="my-20 md:my-40 flex  justify-center" >
            <a className="max-w-[300px] w-[100%] text-center tech-stack-icon-conainer">
                {
                    techStack.map((tech, index) => {
                        return (
                            <>
                                {
                                    index == 3 || index == 7 || index == 11 ?
                                        <>
                                            <div className="inline">
                                                <span></span>
                                                <img className="hover:cursor-pointer inline m-[10px] max-w-[55px] w-[100%]" src={`https://skillicons.dev/icons?i=${tech}`} />
                                            </div>
                                            <div></div>
                                        </>
                                        :
                                        <div className="inline">
                                            <span></span>
                                            <img className="hover:cursor-pointer inline m-[10px] max-w-[55px] w-[100%]" src={`https://skillicons.dev/icons?i=${tech}`} />
                                        </div>
                                }
                            </>
                        )
                    })
                }

            </a>
        </div>
    )
}

export default TechStack