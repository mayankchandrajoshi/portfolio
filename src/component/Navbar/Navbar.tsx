import React, { useEffect, useState,Dispatch,SetStateAction, useRef } from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'

type NavBarType = {
  activeSection:string,
  setActiveSection: Dispatch<SetStateAction<string>>
}

const Navbar:React.FC<NavBarType> = ({activeSection,setActiveSection}) => {
  const [ isNavFixed,setIsNavFixed ] = useState(false);
  const [ showNavBar,setShowNavBar ] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const openRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY>0){
        setIsNavFixed(true);
      }
      else setIsNavFixed(false);
    }
    document.addEventListener("scroll",handleScroll,{ passive:true })
    return () => {
      document.removeEventListener("scroll",handleScroll)
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
      if (navRef.current && (!navRef.current.contains(event.target as Node)||closeRef.current?.contains(event.target as Node))&&!openRef.current?.contains(event.target as Node)) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
    }
    
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  },[navRef])
  
  return (
    <nav className={`sticky top-0 left-0 z-40 transition-all px-5 duration-500 ${isNavFixed?"py-1 backdrop-blur-md":"py-2"}`}>
      <div className={`max-w-7xl mx-auto py-3 flex flex-row items-center justify-between`}>
        <Link className="flex flex-row items-center gap-3" href="">
          <span className="p-[2px] px-2 bg-lime-500 rounded-sm text-2xl font-bold">M</span>
          <span className="text-lime-500 text-xl font-bold hidden md:inline">Mayank Joshi</span>
        </Link>
        <div className={`flex flex-col justify-center bg-lime-500 fixed top-0 left-0 h-screen w-[80vw] min-w-[200px] md:h-auto md:w-auto md:relative md:bg-transparent md:flex-row md:items-center gap-10 p-10 md:p-0 ${!showNavBar?"animate-[bounceOUT_.8s_forwards] md:animate-none":"animate-[bounceIN_.8s_forwards] md:animate-none shadow-[0_0_0_100000px_rgba(0,0,0,0.2)] md:shadow-none"}`} ref={navRef}>
          <a href='#home' className="flex flex-row md:flex-col gap-3 md:gap-1 items-center cursor-pointer" onClick={()=>setActiveSection("home")}>
            <span className={`text-2xl md:text-sm font-semibold transition-colors duration-500 ${activeSection==="home"?"text-black md:text-lime-500":"text-white"}`}>Home</span>
            <p className={`w-2 md:w-[6px] h-2 md:h-[6px] rounded-full transition-colors duration-500 ${activeSection==="home"?"bg-black md:bg-lime-500":"bg-transparent"}`}></p>
          </a>
          <a href='#about' className="flex flex-row md:flex-col gap-3 md:gap-1 items-center cursor-pointer" onClick={()=>setActiveSection("about")}>
            <span className={`text-2xl md:text-sm font-semibold transition-colors duration-500 ${activeSection==="about"?"text-black md:text-lime-500":"text-white"}`}>About</span>
            <p className={`w-2 md:w-[6px] h-2 md:h-[6px] rounded-full transition-colors duration-500 ${activeSection==="about"?"bg-black md:bg-lime-500":"bg-transparent"}`}></p>
          </a>
          <a href='#skills' className="flex flex-row md:flex-col gap-3 md:gap-1 items-center cursor-pointer" onClick={()=>setActiveSection("skills")}>
            <span className={`text-2xl md:text-sm font-semibold transition-colors duration-500 ${activeSection==="skills"?"text-black md:text-lime-500":"text-white"}`}>Skills</span>
            <p className={`w-2 md:w-[6px] h-2 md:h-[6px] rounded-full transition-colors duration-500 ${activeSection==="skills"?"bg-black md:bg-lime-500":"bg-transparent"}`}></p>
          </a>
          <a href='#projects' className="flex flex-row md:flex-col gap-3 md:gap-1 items-center cursor-pointer" onClick={()=>setActiveSection("projects")}>
            <span className={`text-2xl md:text-sm font-semibold transition-colors duration-500 ${activeSection==="projects"?"text-black md:text-lime-500":"text-white"}`}>Projects</span>
            <p className={`w-2 md:w-[6px] h-2 md:h-[6px] rounded-full transition-colors duration-500 ${activeSection==="projects"?"bg-black md:bg-lime-500":"bg-transparent"}`}></p>
          </a>
          <a href='#education' className="flex flex-row md:flex-col gap-3 md:gap-1 items-center cursor-pointer" onClick={()=>setActiveSection("education")}>
            <span className={`text-2xl md:text-sm font-semibold transition-colors duration-500 ${activeSection==="education"?"text-black md:text-lime-500":"text-white"}`}>Education</span>
            <p className={`w-2 md:w-[6px] h-2 md:h-[6px] rounded-full transition-colors duration-500 ${activeSection==="education"?"bg-black md:bg-lime-500":"bg-transparent"}`}></p>
          </a>
          <a href='#contact' className="flex flex-row md:flex-col gap-3 md:gap-1 items-center cursor-pointer" onClick={()=>setActiveSection("contact")}>
            <span className={`text-2xl md:text-sm font-semibold transition-colors duration-500 ${activeSection==="contact"?"text-black md:text-lime-500":"text-white"}`}>Contact</span>
            <p className={`w-2 md:w-[6px] h-2 md:h-[6px] rounded-full transition-colors duration-500 ${activeSection==="contact"?"bg-black md:bg-lime-500":"bg-transparent"}`}></p>
          </a>
          <div className="absolute right-10 top-10" onClick={()=>setShowNavBar(false)} ref={closeRef}>
            <MdOutlineClose className={`text-4xl transition-colors duration-500 text-white hover:text-black md:hidden`}/>
          </div>
        </div>
        <div className="md:hidden" ref={openRef}>
          <RiMenu3Line className={`text-3xl transition-colors duration-500 ${showNavBar?"text-lime-500":"text-white"}`} onClick={()=>setShowNavBar(true)}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar