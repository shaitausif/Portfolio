import React from "react";
import * as motion from "motion/react-client";
import Skill from "./Skill";
import { Skill as SkillType } from "@/lib/types";

type SkillsProps = {
  skills: SkillType[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[1500px] xl:px-8 justify-center xl:space-y-0 mx-auto items-center py-10"
>
  <h3 className="absolute top-16 md:top-20 uppercase tracking-[18px] text-gray-500 text-xl">
    Skills
  </h3>
  <h3 className="absolute uppercase tracking-[3px] top-28 text-gray-500 text-sm">
    Hover over a skill for current proficiency
  </h3>
  <div className="grid grid-cols-4 gap-4  md:mt-20">
    {skills.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
      <Skill key={skill._id} skill={skill} />
    ))}
    {skills.slice(Math.ceil(skills.length / 2)).map((skill) => (
      <Skill key={skill._id} skill={skill} directionLeft />
    ))}
  </div>
</motion.div>

  );
};

export default Skills;
