import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projectInterface } from '../../interface/projectInterface'


const Projects:React.FC<{ projects:projectInterface[] }> = ({projects}) => {
    
  return (
    <div className='max-w-7xl mx-auto py-10 md:py-16'>
        <div className="flex flex-row justify-center gap-3">
            <span className="text-3xl md:text-5xl font-bold text-lime-500">My </span>
            <span className="text-3xl md:text-5xl font-bold text-white">Projects</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16 md:gap-16 mt-14 md:mt-20">
            {
                projects.map((project,index)=>(
                    <ProjectCard project={project} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Projects