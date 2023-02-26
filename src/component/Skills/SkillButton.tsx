import React from 'react'

type skillType = {
    skill:string
}

const Skill:React.FC<skillType> = ({skill}) => {
  return (
    <span className="p-[6px] px-4 border border-lime-500 text-lime-500 rounded-md text-sm whitespace-nowrap capitalize">
        {skill}
    </span>
  )
}

export default Skill