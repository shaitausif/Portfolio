import React from "react";
import * as motion from "motion/react-client";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    { id: 1, image: "./icons/nextjs.svg", progress: "80", name: "Next.js" },
    { id: 2, image: "./icons/react.svg", progress: "80", name: "React.js" },
    { id: 3, image: "./icons/express.svg", progress: "75", name: "Express.js" },
    { id: 4, image: "./icons/mongodb.svg", progress: "85", name: "MongoDB" },
    { id: 5, image: "./icons/nodejs.svg", progress: "80", name: "Node.js" },
    {
      id: 6,
      image: "./icons/javascript.svg",
      progress: "80",
      name: "JavaScript",
    },
    {
      id: 7,
      image: "./icons/typescript.svg",
      progress: "75",
      name: "TypeScript",
    },
    { id: 8, image: "./icons/html.svg", progress: "80", name: "HTML" },
    { id: 9, image: "./icons/css.svg", progress: "75", name: "CSS" },
    {
      id: 10,
      image: "./icons/tailwindcss.svg",
      progress: "70",
      name: "Tailwind CSS",
    },
    {
      id: 11,
      image: "./icons/redux.svg",
      progress: "75",
      name: "Redux Toolkit",
    },
    {
      id: 15,
      image: "./icons/git.svg",
      progress: "65",
      name: "Git",
    },
    { id: 16, image: "./icons/postman.svg", progress: "60", name: "Postman" },
    { id: 18, image: "./icons/vite.svg", progress: "60", name: "Vite" },
    { id: 20, image: "./icons/PostgreSQL.svg", progress: "50", name: "PostgreSQL" },
    {
      id: 21,
      image: "./icons/python.svg",
      progress: "65",
      name: "Python",
    },
    {
      id: 22,
      image: "./icons/github.svg",
      progress: "70",
      name: "Github",
    },
    {
      id: 23,
      image: "./icons/graphql.svg",
      progress: "55",
      name: "GraphQL",
    },
    {
      id: 24,
      image: "./icons/burp-suite.png",
      progress: "45",
      name: "Python (Basics)",
    },
    {
      id: 25,
      image: "./icons/prisma.svg",
      progress: "50",
      name: "Prisma",
    },
    
  ];

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
    {skills.slice(0, skills.length / 2).map((skill) => (
      <Skill key={skill.id} skill={skill} />
    ))}
    {skills.slice(skills.length / 2, skills.length).map((skill) => (
      <Skill key={skill.id} skill={skill} directionLeft />
    ))}
  </div>
</motion.div>

  );
};

export default Skills;
