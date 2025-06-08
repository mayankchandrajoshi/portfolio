"use client"

import { Rubik } from 'next/font/google'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

const HomeLayout:React.FC<{ children:React.ReactNode }>  = ({children})=>{
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if ( scrollPosition>= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      })
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-neutral-900 ${rubik.className}`}>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
        {children}
    </div>
  )
}

export default HomeLayout