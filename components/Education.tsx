import React from 'react'
import * as motion from "motion/react-client"
import { Education as EducationType } from '@/lib/types'

type EducationProps = {
  education: EducationType[];
}

const Education = ({ education }: EducationProps) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left max-w-6xl px-9 justify-center mx-auto items-center py-10"
    >
      <h3 className="absolute top-16 md:top-20 uppercase tracking-[18px] text-gray-500 text-xl">
        Education
      </h3>

      <div className="space-y-8 mt-20 w-full max-w-3xl">
        {education.map((edu) => (
          <motion.div
            key={edu._id}
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-[#292929] rounded-lg p-6 hover:opacity-100 opacity-60 transition-opacity duration-200"
          >
            {edu.institutionLogo && (
              <img
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                src={edu.institutionLogo}
                alt={edu.institution}
              />
            )}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <p className="text-gray-400 text-lg">{edu.fieldOfStudy}</p>
              <p className="font-bold text-md mt-1">{edu.institution}</p>
              <p className="uppercase py-2 text-gray-300 text-sm">
                {formatDate(edu.startDate)} -{' '}
                {edu.endDate ? formatDate(edu.endDate) : 'Present'}
              </p>
              {edu.grade && (
                <p className="text-gray-400 text-sm">Grade: {edu.grade}</p>
              )}
              {edu.description && (
                <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Education
