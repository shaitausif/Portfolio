"use client";
import React, { useRef, useEffect, useState } from "react";
import * as motion from "motion/react-client";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
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
      container.style.userSelect = "none"; // prevent selection
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);

      animationFrame.current = requestAnimationFrame(() => {
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX.current) * 2.5; // smooth factor
        container.scrollLeft = scrollLeft.current - walk;
      });
    };

    const stopDrag = () => {
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
      container.style.userSelect = ""; // allow selection again
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
      className="h-screen relative flex flex-col text-left max-w-full px-4 md:px-9 justify-center mx-auto items-center"
    >
      {/* Heading */}
      <h3 className="uppercase tracking-[15px] md:tracking-[18px] absolute top-16 text-gray-500 text-lg md:text-xl z-10">
        Experience
      </h3>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="w-full flex space-x-5 overflow-x-auto snap-x snap-mandatory mt-28 
        scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-gray-400/20 
        cursor-grab scroll-smooth"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
