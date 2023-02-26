import React, { useState,useEffect } from 'react'
import { Rubik } from '@next/font/google'
import Navbar from '../component/Navbar/Navbar'
import Home from '../component/Home/Home'
import About from '@/component/About/About'
import Skills from '@/component/Skills/Skills'
import Projects from '@/component/Project/Projects'
import Education from '@/component/Education/Education'
import Contact from '@/component/Contact/Contact'
import axios from 'axios'
import { projectInterface } from '@/interface/projectInterface'
import { skillInterface } from '@/interface/skillInterface'
import { MongoClient } from 'mongodb'

const rubik = Rubik({ subsets: ['latin'] })

const Index:React.FC<{ projects:projectInterface[],skills:skillInterface[] }>  = ({projects,skills})=>{
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
      <section className={`bg-neutral-900 p-2 min-[400px]:p-5`} id="home">
        <Home/>
      </section>
      <section className={`bg-black p-2 min-[400px]:p-5`} id="about">
        <About/>
      </section>
      <section className={`bg-neutral-900 p-2 min-[400px]:p-5`} id="skills">
        <Skills skills={skills}/>
      </section>
      <section className={`bg-black p-2 min-[400px]:p-5`} id="projects">
        <Projects projects={projects}/>
      </section>
      <section className={`bg-neutral-900 p-2 min-[400px]:p-5`} id="education">
        <Education/>
      </section>
      <section className={`bg-black p-2 min-[400px]:p-5`} id="contact">
        <Contact/>
      </section>
    </div>
  )
}

async function connectToDatabase() {

  if(!process.env.MONGO_DB_URL) return Promise.reject("MongoB url not found");

  const client = await MongoClient.connect(process.env.MONGO_DB_URL);
  return client;
}

export async function getStaticProps() {

  try {
    const db = await connectToDatabase();
    const projectsCollection = db.db().collection('project')
    const skillsCollection = db.db().collection('skills');

    const skills = await skillsCollection.find().toArray();

    const projects = await projectsCollection.find().toArray();

    await db.close();

    return {
      props: {
        projects:projects.map((project)=>{
          return {
            name:project.name,
            image: {
              url: project.image.url
            },
            skills: project.skills,
            desc: project.desc,
            liveLink: project.liveLink,
          }
        }),
        skills:skills.map((skill)=>{
          return {
            name:skill.name,
            skills:skill.skills,
            icon:skill.icon
          }
        })
      },
      revalidate: 60*60*24*15, // revalidate every 15 days
    };

  } catch (error) {
    console.log(error);
    
    return {
      props: {
        projects : [],
        skills : []
      },
      revalidate: 60*60*24*15, // revalidate every 15 days
    };
  }
}

export default Index;