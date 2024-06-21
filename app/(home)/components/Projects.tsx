import { Background } from '@tsparticles/engine'
import React from 'react'
import { SiCss3, SiGooglegemini, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiSass, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si'
import Title from './Title'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const projects = [
        {
            title: "Callback to Promise Function npm package",
            tech: [SiReact,SiJavascript],
            link: "https://www.npmjs.com/package/callback-to-promise-function",
            background: "bg-blue-500 ",
            cover: "/image.png",
        },
        {
            title: "Google Gemini Clone App",
            tech: [SiReact,SiJavascript,SiCss3,SiHtml5,SiTailwindcss,SiGooglegemini],
            link: "https://googlegeminiclonee.netlify.app",
            background: "bg-pink-500 ",
            cover: "/GoogleGemini.png",
        },
        {
            title: "CryptoCoins Real Time Tracker App(CryptoNex)",
            tech: [SiReact,SiJavascript,SiTailwindcss,SiVite,SiNodedotjs],
            link: "https://cryptonexx.netlify.app",
            background: "bg-purple-500 ",
            cover: "/CryptoNex.png",
        },
        {
            title: "A Real Estate App (KeyFineders)",
            tech: [SiReact,SiJavascript,SiSass,SiTypescript,SiTailwindcss,SiNodedotjs],
            link: "https://keyfinders.netlify.app",
            background: "bg-red-500 ",
            cover: "/KeyFinder.png",
        },
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
       <Title text="Projects🗂️" className="flex flex-col items-center justify-center" />
       <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
          {projects.map((projects,index)=>{
            return <Link href={projects.link} key={index}>
                <div className={cn("p-5 rounded-md",projects.background)}>
                    <DirectionAwareHover imageUrl={projects.cover} className='w-full space-y-5 cursor-pointer'>
                        <div className='space-y-5'>
                        <h1 className='text-2xl font-bold'>{projects.title}</h1>
                        <div className='flex items-center gap-5'>
                            {projects.tech.map((Icon, index)=>{
                                return <Icon key={index} className='w-10 h-10' />
                            })}
                        </div>
                        </div>
                    </DirectionAwareHover>
                </div>
            </Link>
          })}
       </div>
    </div>
  )
}
