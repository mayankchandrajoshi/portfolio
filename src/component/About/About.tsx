import Image from 'next/image'
import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { GoDeviceMobile } from 'react-icons/go'
import { GiDatabase } from 'react-icons/gi'
import { SiNodered } from 'react-icons/si'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-14 py-10 md:py-16">
        <div className="hidden md:block col-span-1">
            <Image src="/images/profilePic.jpg" alt='profile_pic' width={220} height={340} className="w-full aspect-[5/7] object-cover object-top"/>
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col gap-3 md:gap-5">
            <h2 className="text-xs uppercase font-bold text-lime-500 tracking-[.3em]">My Intro</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-white">About Me</h3>
            <p className="text-lime-500 text-base md:text-lg">
                I am a MERN stack developer with experience in creating web applications using HTML, CSS, JavaScript, React, Next.js, React Native, Node.js, Express.js, and MongoDB. I have a passion for developing user-friendly web applications and am committed to continuously improving my skills. I strive to deliver high-quality solutions that meet the needs of users and businesses alike.
            </p>
            <ul className="flex flex-col gap-3 mt-5 font-medium">
                <li className="flex flex-row flex-wrap gap-2 md:gap-5 text-sm md:text-base">
                    <h3 className="text-white min-w-[110px]">Name :</h3>
                    <h3 className="text-lime-500">Mayank Chandra Joshi</h3>
                </li>
                <li className="flex flex-row flex-wrap gap-2 md:gap-5 text-sm md:text-base">
                    <h3 className="text-white min-w-[110px]">Date of birth :</h3>
                    <h3 className="text-lime-500">14 July 2002</h3>
                </li>
                <li className="flex flex-row flex-wrap gap-2 md:gap-5 text-sm md:text-base">
                    <h3 className="text-white min-w-[110px]">Address :</h3>
                    <h3 className="text-lime-500">New Delhi,India</h3>
                </li>
                <li className="flex flex-row flex-wrap gap-2 md:gap-5 text-sm md:text-base">
                    <h3 className="text-white min-w-[110px]">Email :</h3>
                    <h3 className="text-lime-500 break-all">mayankchandrajoshi9871@gmail.com</h3>
                </li>
            </ul>
            <div className="flex flex-row flex-wrap gap-8 md:gap-10 items-center mt-10">
                <div className="flex flex-row items-center gap-2 border-l-2 border-solid border-lime-500 px-2">
                    <CgWebsite className='bg-lime-500 rounded-full text-black text-3xl p-1'/>
                    <div className="text-white font-medium text-sm">Web</div>
                </div>
                <div className="flex flex-row items-center gap-2 border-l-2 border-solid border-lime-500 px-2">
                    <GoDeviceMobile className='bg-lime-500 rounded-full text-black text-3xl p-1'/>
                    <div className="text-white font-medium text-sm">Mobile</div>
                </div>
                <div className="flex flex-row items-center gap-2 border-l-2 border-solid border-lime-500 px-2">
                    <GiDatabase className='bg-lime-500 rounded-full text-black text-3xl p-1'/>
                    <div className="text-white font-medium text-sm">Backend</div>
                </div>
                <div className="flex flex-row items-center gap-2 border-l-2 border-solid border-lime-500 px-2">
                    <SiNodered className='bg-lime-500 rounded-full text-black text-3xl p-1'/>
                    <div className="text-white font-medium text-sm">Database</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About