import React from 'react'
import Image from 'next/image'
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'

const Home:React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 min-[360px]:py-16 flex flex-col md:flex-row justify-between gap-16 min-[320px]:gap-20 md:gap-16">
          <div className="flex flex-col gap-5 min-[260px]:gap-10">
            <div className="flex flex-col gap-2 min-[260px]:gap-7 min-[320px]:gap-9 md:gap-10 text-[33px] min-[260px]:text-5xl min-[400px]:text-6xl text-white font-bold">
              <span className="">Hi,I am</span>
              <span className="text-[40px] min-[260px]:text-6xl min-[400px]:text-7xl text-lime-500">Mayank,</span>
              <span className="">Full Stack developer</span>
            </div>
            <div className="flex flex-row flex-wrap gap-7">
              <Link href='https://drive.google.com/file/d/1a5XnbFRl8Bm8LYlzuUzsLkUXnmdN2ud2/view?usp=drivesdk' target='_blank' className="px-6 py-2 bg-lime-500 text-white cursor-pointer">
                Download CV
              </Link>
              <Link className="flex flex-row items-center gap-2 px-6 py-2 border-2 border-lime-500 cursor-pointer" href='https://www.linkedin.com/in/mayank-chandra-joshi-b4ab41237/' target='_blank'>
                <BsLinkedin className='text-xl text-lime-500'/>
                <span className="text-white font-medium">Connect</span>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="bg-lime-500 mx-auto w-[75%] min-[360px]:w-72 aspect-[5/7] -translate-x-5 md:-translate-x-16">
              <Image src="/images/profile_pic.jpg" alt='profile_pic' width={220} height={340} className="w-full aspect-[5/7] object-cover object-top translate-x-5 -translate-y-5 md:translate-x-8 md:-translate-y-8"/>
            </div>
          </div>
    </div>
  )
}

export default Home
