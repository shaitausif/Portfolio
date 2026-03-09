import React from 'react'
import * as motion from 'motion/react-client'
import { Experience } from '@/lib/types'

type ExperienceCardProps = {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg items-center space-y-4 w-[90%] max-w-sm md:max-w-lg xl:max-w-xl snap-center bg-[#292929] px-6 md:px-10 py-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {experience.companyLogo && (
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-16 h-16 xl:w-[130px] xl:h-[130px] object-cover rounded-full object-center"
          src={experience.companyLogo}
          alt={experience.company}
        />
      )}

      <div className="text-center md:text-left">
        <h4 className="text-xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-lg mt-1">{experience.company}</p>
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap justify-center md:justify-start gap-2 my-2">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <p className="uppercase py-2 text-gray-300">
          {formatDate(experience.startDate)} -{' '}
          {experience.isCurrentRole ? 'Present' : experience.endDate ? formatDate(experience.endDate) : ''}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-left text-sm">
          {experience.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
