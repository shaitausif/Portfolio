import React from 'react'
import * as motion from "motion/react-client"
const About = () => {
  return (
    <motion.div
    initial={{opacity : 0}}
    whileInView={{opacity : 1}}
    transition={{duration : 1.5}}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-6xl px-9 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 md:top-20 justify-center uppercase tracking-[18px] text-gray-500 text-xl'>About</h3>
      <motion.img
      initial={{
        x:-200,
        opacity : 0
      }}
      whileInView={{
        x:0,
        opacity : 1
      }}
      viewport={{once : true}}
      transition={{
        duration: 1,
      }}

      className='-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-52 md:h-72 xl:w-[300px] xl:h-[400px]'
      src='./Me.jpg' />

    <div className='space-y-5 md:space-y-10 px-0 md:px-10'>
        <h4 className='md:text-3xl lg:text-4xl text-2xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-sm md:text-base'>Information Technology undergraduate with practical experience in designing and delivering full-stack and AI-powered applications. Skilled in JavaScript, TypeScript, and Python, with expertise in React, Next.js, Node.js, and Express for scalable web and mobile solutions. Experienced in applying Agile practices to manage development workflows and using DevOps-oriented tools such as Git, GitHub, and CI/CD pipelines for efficient collaboration and deployment. Built projects including a real-time social media platform and an AI-driven ticketing system that automates support workflows. Strong foundation in databases like MongoDB and PostgreSQL, with a focus on building maintainable, high-performance applications that enhance user experience.</p>
    </div>

    </motion.div>
  )
}

export default About
