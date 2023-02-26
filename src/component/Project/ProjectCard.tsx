import React from 'react'
import SkillButton from '../Skills/SkillButton'
import { GoLinkExternal } from 'react-icons/go'
import Link from 'next/link'
import { projectInterface } from '../../interface/projectInterface'

type projectType  = {
    project : projectInterface
}

const ProjectCard:React.FC<projectType> = ({project}) => {
  return (
    <div className='flex flex-col items-center gap-7'>
      <div className="w-[75%] max-w-[280px] bg-lime-500 aspect-[3/4] -translate-x-4 md:-translate-x-6 -translate-y-4 md:-translate-y-6 rounded-tr-lg rounded-bl-lg">
        <img src={project.image.url} alt="" className="w-full aspect-[3/4] object-cover object-top translate-y-4 md:translate-x-6 translate-x-4 md:translate-y-6 rounded-tr-lg rounded-bl-lg" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <h2 className="text-lime-500 text-xl font-medium ">
            {project.name}
          </h2>
          <Link href={project.liveLink} target='_blank'><GoLinkExternal className='text-lime-500 text-2xl'/></Link>
        </div>
        <p className="text-neutral-400 break-all">
          {project.desc}
        </p>
        <div className="flex flex-row items-center flex-wrap gap-3">
          {
            project.skills.map((skill,index)=>(
              <SkillButton skill={skill} key={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard