import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { GoDeviceMobile } from 'react-icons/go'
import { GiDatabase } from 'react-icons/gi'
import { SiNodered } from 'react-icons/si'
import { MdDevicesOther } from 'react-icons/md'
import Skill from './SkillButton'
import { skillInterface } from '@/interface/skillInterface'
import { IconType } from 'react-icons/lib'
import { connectToDatabase } from '@/lib/db'

const icons: { [key: string]: IconType } = {
  CgWebsite,
  SiNodered,
  GiDatabase,
  GoDeviceMobile,
  MdDevicesOther
}

const getSkills = async () => {
  try {
    const db = await connectToDatabase();
    const skillsCollection = db.db.collection('skills');

    const skills = await skillsCollection.find().toArray();

    await db.client.close();

    return skills.map((skill)=>{
      return {
        name:skill.name,
        skills:skill.skills,
        icon:skill.icon
      }
    });
  } catch (error) {
    return [];
  }
}

const Skills:React.FC<{}> = async () => {
  const skills:skillInterface[] = await getSkills();

  return (
    <div className='max-w-7xl mx-auto py-10 md:py-16'>
      <div className="flex flex-row justify-center gap-3">
        <span className="text-3xl md:text-5xl font-bold text-lime-500">My </span>
        <span className="text-3xl md:text-5xl font-bold text-white">Skills</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12 md:gap-16 pt-14">
        {
          skills.map((skill,index)=>{
            const SkillIcon:IconType = icons[skill.icon];
            return (
              <div className="flex flex-col items-center gap-5 p-2 md:p-5" key={index}>
                <SkillIcon className='text-4xl text-lime-500'/>
                <h3 className="text-xl font-medium text-white capitalize">{skill.name}</h3>
                <div className="flex flex-row flex-wrap gap-3">
                  {
                    skill.skills.map((s,index)=>{
                      return <Skill skill={s} key={index}/>
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills