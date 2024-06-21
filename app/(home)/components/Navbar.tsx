
import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
export default function Navbar({className}: {className?:string}) {

    const socials = [
        {
            link:"https://www.linkedin.com/in/mayur-gavale-9ab231311/",
            label:"LinkedIn",
            icon:SiLinkedin,
        },
        {
            link:"https://github.com/MayurGavale",
            label:"Github",
            icon:SiGithub,
        },
        {
            link:"https://www.instagram.com/mayyyuuurrr_/",
            label:"Instagram",
            icon:SiInstagram,
        },
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-600 -rotate-2'>MayurCodes 🧑🏻‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social,index) => {
                const Icon = social.icon;
                return (
                    <Link href={social.link} key={index} aria-label={social.label} >
                        <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                    </Link>
                )
            })}
        </div>
    </nav>
  )
}
