import React from 'react'

type eduType = {
    edu:{
        courseName:string,
        university:string,
        form:string,
        to:string,
        duration:string
    }
}

const EducationCard:React.FC<eduType> = ({edu}) => {
  return (
    <div className='max-w-2xl mx-auto flex flex-row gap-3 mb-3 sm:mb-2'>
        <div className="text-neutral-400 text-xs w-[135px] hidden sm:flex sm:flex-col items-end mt-[2px]">
            <div className="">{edu.form} - {edu.to}</div>
            <div className="">{edu.duration}</div>
        </div>
        <div className="flex flex-col items-center gap-3">
            <div className="w-[11px] h-[11px] shrink-0 rounded-full bg-lime-500 mt-1"></div>
            <div className="h-full w-[2px] bg-white"></div>
        </div>
        <div className="flex flex-col gap-1">
            <div className="text-neutral-400 text-xs w-[135px] flex flex-col sm:hidden items-start mt-[2px]">
                <div className="">{edu.form} - {edu.to}</div>
                <div className="">{edu.duration}</div>
            </div>
            <h2 className="text-lime-500 font-medium">{edu.courseName}</h2>
            <h2 className="text-white text-xs sm:text-sm">{edu.university}</h2>
        </div>
    </div>
  )
}

export default EducationCard