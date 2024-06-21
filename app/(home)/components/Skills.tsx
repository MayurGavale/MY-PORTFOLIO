"use client"
import React from 'react'
import Title from './Title'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Icon } from 'lucide-react'
import { SiFigma, SiFramer, SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from 'react-icons/si'

const skills = [
  {
    text:"React",
    Icon: SiReact,
  },
  {
    text:"Next.js",
    Icon: SiNextdotjs,
  },
  {
    text:"Tailwind ",
    Icon: SiTailwindcss,
  },
  {
    text:"JavaScript",
    Icon: SiJavascript,
  },
  {
    text:"Node.js",
    Icon: SiNodedotjs,
  },
  {
    text:"Framer",
    Icon: SiFramer,
  },
  {
    text:"PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    text:"Figma",
    Icon: SiFigma,
  },
  {
    text:"Git",
    Icon: SiGit,
  },
]
export default function Skills() {
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills🛠️" className="flex flex-col items-center justify-center" />
      <HoverEffect items={skills}/>
    </div>
  )
}
