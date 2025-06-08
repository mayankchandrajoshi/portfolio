
import React from "react";
import HomeLayout from "@/component/Layout/HomeLayout";
import Home from "../component/Home/Home";
import About from "@/component/About/About";
import Skills from "@/component/Skills/Skills";
import Projects from "@/component/Project/Projects";
import Education from "@/component/Education/Education";
import Contact from "@/component/Contact/Contact";

function page() {
  return (
    <HomeLayout>
      <>
        <section className={`bg-neutral-900 p-2 min-[400px]:p-5`} id="home">
          <Home />
        </section>
        <section className={`bg-black p-2 min-[400px]:p-5`} id="about">
          <About />
        </section>
        <section className={`bg-neutral-900 p-2 min-[400px]:p-5`} id="skills">
          <Skills/>
        </section>
        <section className={`bg-black p-2 min-[400px]:p-5`} id="projects">
          <Projects/>
        </section>
        <section className={`bg-neutral-900 p-2 min-[400px]:p-5`} id="education">
        <Education/>
      </section>
      <section className={`bg-black p-2 min-[400px]:p-5`} id="contact">
        <Contact/>
      </section>
      </>
    </HomeLayout>
  );
}

export default page;
