import React from 'react'
import * as motion from 'motion/react-client'


type skillType = {
  id : number,
  image : string,
  progress : string,
  name : string
}


type Props = {
    skill : skillType
    directionLeft? : boolean
}

const Skill = ({skill,directionLeft}: Props) => {



  return (
    <div className='group relative flex cursor-pointer '>
      <motion.img
      initial={{
        x: directionLeft ? -250 : 250,
        opacity : 0
      }}
      whileInView={{
        x: 0,
        opacity : 1
      }}
      transition={{duration : 1}}
      src={skill.image}
      className='md:w-16 md:h-16 w-12 h-12 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out p-1'
      />

      <div className='absolute md:w-16 md:h-16 w-12 h-12 rounded-full group-hover:bg-white opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out z-0 '>
        <div className='flex justify-center items-center h-full'>
            <p className='text-xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill

