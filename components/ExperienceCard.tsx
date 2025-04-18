import React from 'react'
import * as motion from 'motion/react-client'

const ExperienceCard = () => {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg items-center space-y-4 w-[90%] max-w-sm md:max-w-lg xl:max-w-xl snap-center bg-[#292929] px-6 md:px-10 py-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-16 h-16 xl:w-[130px] xl:h-[130px] object-cover rounded-full object-center"
        src="./Amazon.png"
        alt=""
      />

      <div className="text-center md:text-left">
        <h4 className="text-xl font-light">Software Engineer at Amazon</h4>
        <p className="font-bold text-lg mt-1">Amazon</p>
        <div className="flex justify-center md:justify-start space-x-2 my-2">
          <img className="h-7 w-7 rounded-full object-cover" src="./javascript.png" alt="" />
          <img className="h-7 w-7 rounded-full object-cover" src="./javascript.png" alt="" />
          <img className="h-7 w-7 rounded-full object-cover" src="./javascript.png" alt="" />
        </div>
        <p className="uppercase py-2 text-gray-300">Started.... - Ended....</p>
        <ul className="list-disc space-y-2 ml-5 text-left text-sm">
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum qui, facere excepturi iure ullam nesciunt quas impedit voluptatibus eaque nisi?</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
         
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
