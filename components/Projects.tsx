"use client";
import React, { useRef, useEffect } from "react";
import * as motion from "motion/react-client";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";

const LoadingDots = () => {
  const dotVariants = {
    animate: {
      x: [0, -6, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <span className="flex space-x-1 ml-2 mt-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          variants={dotVariants}
          animate="animate"
          transition={{
            delay: i * 0.2,
            repeat: Infinity,
          }}
          className="w-1 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-gradient"
        />
      ))}
    </span>
  );
};

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      container.classList.add("cursor-grabbing");
      container.style.userSelect = "none";
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);

      animationFrame.current = requestAnimationFrame(() => {
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX.current) * 3.5;
        container.scrollLeft = scrollLeft.current - walk;
      });
    };

    const stopDrag = () => {
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
      container.style.userSelect = "";
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", stopDrag);
    container.addEventListener("mouseleave", stopDrag);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", stopDrag);
      container.removeEventListener("mouseleave", stopDrag);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col max-w-full justify-evenly z-0 items-center overflow-hidden px-4"
    >
      <h3 className="uppercase text-gray-500 tracking-[18px] absolute md:top-20 top-16 text-xl">
        Projects
      </h3>

      <div
        ref={scrollRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-gray-400/20 cursor-grab scroll-smooth pt-10"
      >
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-3 md:p-12 min-h-screen"
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative w-fit h-auto group"
            >
              <img
                className="w-fit h-30 md:h-50 object-contain rounded-lg"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 duration-300 justify-center flex items-center group-hover:opacity-60 transition-opacity rounded-lg">
                {project.liveUrl === "" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center md:text-md text-base font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient"
                  >
                    Deployment in progress
                    <LoadingDots />
                  </motion.div>
                )}
              </div>

              <div className="absolute top-2 right-2 flex space-x-2 z-30">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 opacity-80 hover:opacity-100 duration-300 rounded-full text-white hover:bg-gray-700/50 transition-colors flex items-center justify-center"
                    title="View on GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="md:h-6 h-5 w-5 md:w-6" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 opacity-80 hover:opacity-100 duration-300 rounded-full text-white hover:bg-gray-700/50 transition-colors flex items-center justify-center"
                    title="View Live Project"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="md:h-6 h-5 w-5 md:w-6" />
                  </a>
                )}
              </div>
            </motion.div>

            <div className="space-y-5 px-0 md:px-10 max-w-5xl">
              <h4 className="text-lg md:text-xl font-semibold text-center">
                <span className="pt-5">{project.title}</span>
              </h4>
              <div className="flex items-center space-x-3 justify-center">
                {project.techStack.map((tech, index) => (
                  <img
                    key={index}
                    className="md:h-10 md:w-10 h-8 w-8 object-contain"
                    src={tech.image}
                    alt={tech.name}
                  />
                ))}
              </div>
              <p className="text-center md:text-base text-sm md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/15 left-0 h-[350px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
