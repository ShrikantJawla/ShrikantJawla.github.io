import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectsData from '../data/projects.json'

interface Project {
  updateIsOpen: () => void
}

const Projects = ({ updateIsOpen }: Project) => {
  return (
    <div
      id="project__part"
      className="w-full min-h-[3250px] md:min-h-[1900px] xl:h-[280vh] bg-[#0f1216] pt-[80px] lg:pt-[80px] "
    >
      {/* Title */}
      <div className="w-[95%] lg:w-[60%] m-[auto] flex justify-start items-center gap-[10px] mb-[65px]">
        <p className="text-white text-[20px] md:text-[30px] font-bold font-mono">
          Some things I built.
        </p>
        <div className="h-[1px] w-[270px] md:w-[340px] bg-gray-800" />
      </div>
      {/* Project Cards */}
      <div className=" sm:w-[90%] md:w-[98%] lg:w-[90%] m-[auto] grid-cols-1 grid md:grid-cols-2 justify-center items-center gap-y-12">
        {ProjectsData.map((ele, i) => (
          <ProjectCard
            {...ele}
            updateIsOpen={updateIsOpen}
            key={`${ele.links.github}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
