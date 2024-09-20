import React from 'react'
import EducationCard from './EducationCard'

const education = [
  {
    courseName:"BSc. Computer Science",
    university:"Delhi University",
    form:"Nov 2020",
    to:"July 2023",
    duration:"3 years"
  },
  {
    courseName:"11-12th Science",
    university:"Government Co- Education Senior Secondary School",
    form:"Mar 2018 ",
    to:"Apr 2020",
    duration:"2 years"
  },
]

const Education = () => {
  return (
    <div className='max-w-7xl mx-auto py-10'>
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Education</h2>
      <div className="pt-10">
        {
          education.map((edu,index)=>(
            <EducationCard edu={edu} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Education