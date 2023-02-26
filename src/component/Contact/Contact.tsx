import React, { useRef, useState } from 'react'
import {IoMail} from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BsInstagram,BsLinkedin } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import Link from 'next/link';
import { ImGithub } from 'react-icons/im'

const Contact = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const emailMessageRef  = useRef<HTMLTextAreaElement>(null);

    const [ isSendingEmail,setIsSendingEmail ] = useState(false);

    const handleEmailSubmit = async(e:React.FormEvent<EventTarget>) =>{
        e.preventDefault();
        setIsSendingEmail(true);
        try {
            if(emailRef.current?.value==""||emailMessageRef.current?.value==""){
                throw "Please Enter email and message";
            }
            await axios.post(
                "https://formsubmit.co/ajax/6729e37e664fd19bf896a3c34a01607a ",
                {name: emailRef.current?.value,message: emailMessageRef.current?.value},
                { headers: { "Content-Type": "application/json" } }
            )
            toast.success("Email sent successfully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error:any) {
            toast.error(error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } finally {
            setIsSendingEmail(false);
        }
    }
  return (
    <>
    <div className='max-w-7xl mx-auto py-10 md:py-16'>
        <div className="flex flex-row justify-center gap-3">
            <span className="text-3xl md:text-5xl font-bold text-white">Contact </span>
            <span className="text-3xl md:text-5xl font-bold text-lime-500">Me</span>
        </div>
        <div className="mt-10">
            <form action="" className="mt-7" onSubmit={handleEmailSubmit}>
                <div className="border-solid border-lime-500 border p-3 md:p-5 mb-5 flex gap-2 md:gap-5 items-center bg-transparent">
                    <IoMail className='text-2xl text-lime-500'/>
                    <input ref={emailRef} type="email" name="email" id="" className="overflow-hidden text-sm md:text-lg flex-1 outline-none border-none text-white bg-black" placeholder='Your Email Address' />
                </div>
                <div className="">
                    <textarea  ref={emailMessageRef} name="message" id="" cols={30} rows={8} placeholder='How can I help?' className="resize-none w-full border-solid border-lime-500 border p-5 outline-none bg-black text-white"></textarea>
                </div>
                <div className="flex flex-row justify-end">
                    <button className="w-fit self-end border-none font-normal text-white bg-lime-500 text-sm p-2 px-6 cursor-pointer transition-all duration-500  shadow-[0px_2px_5px_rgba(0,0,0,0.219)] bg-Purple hover:bg-text-Grey mt-2" type='submit' disabled={isSendingEmail}>{isSendingEmail?<img className="mx-auto w-5 h-5" src="/images/Loader.gif"/>:<>SUBMIT</>}</button>
                </div>
            </form> 
        </div>
        <div className="flex flex-row flex-wrap gap-5 md:gap-10 items-center mt-5">
            <div className="flex flex-col gap-2">
                <h3 className="text-xs text-neutral-400">Social Media</h3>
                <div className="text-lime-500 flex flex-row items-center gap-2">
                    <Link href="https://www.instagram.com" target="_blank">
                        <BsInstagram className='text-xl cursor-pointer'/>
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank">
                        <FaTwitterSquare className='text-[23px] cursor-pointer'/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mayank-chandra-joshi-b4ab41237/" target="_blank">
                        <BsLinkedin className='text-xl cursor-pointer'/>
                    </Link>
                    <Link href="https://github.com/mayankchandrajoshi/" target="_blank">
                        <ImGithub className='text-2xl cursor-pointer'/>
                    </Link>
                    
                </div>
            </div>
            <div className="flex flex-col gap-2 break-all">
                <h3 className="text-xs text-neutral-400">Contact me via mail</h3>
                <h3 className="text-sm font-semibold text-lime-500">mayankchandrajoshi9871@gmail.com</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact