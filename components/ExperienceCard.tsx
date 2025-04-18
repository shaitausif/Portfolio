import React from 'react'
import * as motion from 'motion/react-client'
import Image from 'next/image'

const ExperienceCard = () => {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg items-center space-y-4 w-[90%] max-w-sm md:max-w-lg xl:max-w-xl snap-center bg-[#292929] px-6 md:px-10 py-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="/Amazon.png" // Note: public folder path must start with /
          alt="Amazon Logo"
          width={130}
          height={130}
          className="w-16 h-16 xl:w-[130px] xl:h-[130px] object-cover rounded-full object-center"
        />
      </motion.div>

      <div className="text-center md:text-left">
        <h4 className="text-xl font-light">Software Engineer at Amazon</h4>
        <p className="font-bold text-lg mt-1">Amazon</p>

        <div className="flex justify-center md:justify-start space-x-2 my-2">
          {[1, 2, 3].map((_, i) => (
            <Image
              key={i}
              src="/javascript.png"
              alt="JavaScript"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
          ))}
        </div>

        <p className="uppercase py-2 text-gray-300">Started.... - Ended....</p>
        <ul className="list-disc space-y-2 ml-5 text-left text-sm">
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
