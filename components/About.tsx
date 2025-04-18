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
      src='https://media.licdn.com/dms/image/v2/D4D03AQEWTjw6R3fYrw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722681565735?e=1750291200&v=beta&t=sAyE34D0ghH6XzFgEycu7b_y5mlSjP5pFm2Q8cjioNc' />

    <div className='space-y-5 md:space-y-10 px-0 md:px-10'>
        <h4 className='md:text-3xl lg:text-4xl text-2xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-sm md:text-base'>I am a Full Stack Developer specializing in MERN Stack (MongoDB, Express, React, Node.js) and Next.js, currently pursuing a BSc in IT from the University of Mumbai. I’ve worked on various projects, including a platform for anonymous feedback with OTP verification and NextAuth authentication. I am also building a Patreon clone for crowdfunding using Razorpay to enable users to raise funds. I am passionate about creating scalable, user-focused web applications and continuously learning new technologies to enhance my skills.</p>
    </div>

    </motion.div>
  )
}

export default About
