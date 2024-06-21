"use client"
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


export default function page() {
  return (
   
    <div className='bg-black min-h-[400vh] overflow-hidden'>
      <div className=' dark:bg-black bg-white relative'>
      <div className='max-w-7xl mx-auto'>
       <Navbar />
       <HeroSection  />
      </div>
      <div>
        <Skills />
        <Projects />
        <Footer />
      </div>
      <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'>

      </div>
      </div>
    </div>
    
  )
}

/* bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] */