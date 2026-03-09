'use client'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import * as motion from 'motion/react-client'
import { easeIn } from 'framer-motion'

type HeroProps = {
  name: string;
  role: string;
  photo?: string;
  typewriterStrings: string[];
  resume?: string;
}

const Hero = ({ role, photo, typewriterStrings, resume }: HeroProps) => {
    const [text] = useTypewriter({
        words: typewriterStrings,
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <motion.img
        initial={{
          opacity : 0
        }}
        animate={{opacity : 1}}
        transition={{duration : 0.5, ease : easeIn}}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={photo || "./Me.jpg"} alt="" />
        <div className='z-20'>
          <h2 className='text-sm md:text-md uppercase text-gray-500 pb-2 tracking-[8px]'>{role}</h2>
          <h1 className='text-xl sm:text-4xl  font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      <div className='pt-5'>
        <Link href={'#about'}>
        <button className='herobutton'>About</button>
        </Link>
        <Link href={'#skills'}>
        <button className='herobutton'>Skills</button>
        </Link>
        <Link  href={'#projects'}>
        <button className='herobutton'>Projects</button>
        </Link>
        {resume && (
          <Link download href={resume}>
          <button className='herobutton'>Resume</button>
          </Link>
        )}
      </div>
        </div>

    </div>
  )
}

export default Hero
