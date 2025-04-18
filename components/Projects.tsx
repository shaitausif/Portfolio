"use client";
import React, { useRef, useEffect } from "react";
import * as motion from "motion/react-client";

const Projects = ({}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrame = useRef<number | null>(null);

  const projects = [
    {
      title: "True Feedback - Full Stack Application",
      description:
        "True Feedback is a full-stack platform where users can give and receive anonymous feedback with OTP verification for secure login. Built using Next.js, MongoDB, and Mongoose for the backend, the app integrates NextAuth for secure authentication. It uses Zod for API response validation to ensure data integrity. Additionally, the platform integrates OpenAI to suggest feedback messages to users, helping them write more meaningful and constructive responses. This enhances user experience by guiding them in expressing their thoughts better while keeping interactions anonymous and respectful.",
      image: "./Project1.png",
      techStack: [
        { id: 1, name: "Next.js", image: "/icons/nextjs.svg" },
        { id: 2, name: "MongoDB", image: "/icons/mongodb.svg" },
        { id: 3, name: "Mongoose", image: "/icons/mongoose.svg" },
        { id: 4, name: "NextAuth", image: "/icons/nextauth.png" },
        { id: 5, name: "Zod", image: "/icons/zod.png" },
        { id: 6, name: "OpenAI API", image: "/icons/openai.ico" },
      ],
      url: "https://true-feedback-eight-woad.vercel.app/",
    },
    {
      title: "Full-Stack Blog App",
      description:
        "The Full-Stack Blog App allows users to create an account, log in securely via NextAuth, and engage with blog posts. Authenticated users can create, edit, or delete their own posts, while unauthenticated users can only view published content. The app uses React Hook Form for managing form data and Redux Toolkit for centralized state management. With a focus on clean UI design and smooth user experience, this app showcases full-stack development with features such as authentication, CRUD operations, and state management.",
      image: "./Project2.png",
      techStack: [
        { id: 1, name: "Next.js", image: "/icons/react.svg" },
        { id: 2, name: "NextAuth", image: "/icons/nextauth.png" },
        { id: 3, name: "React Hook Form", image: "/icons/reacthookform.png" },
        { id: 4, name: "Redux Toolkit", image: "/icons/redux.svg" },
        { id: 5, name: "MongoDB", image: "/icons/appwrite.svg" },
      ],
      url: "https://blog-app-liard-six.vercel.app/",
    },
    {
      title: "GetMeChai - Patreon Clone",
      description:
        "GetMeChai is a Patreon-like platform built with Next.js where creators can offer exclusive content and receive support from their followers. Users can sign up, create profiles, link their Razorpay account for payments, and authenticate securely using GitHub via NextAuth. The platform’s focus is on providing a seamless experience for creators and their supporters, with an easy-to-use interface, secure payment integration, and strong emphasis on user privacy and security.",
      image: "./Project3.png",
      techStack: [
        { id: 1, name: "Next.js", image: "/icons/nextjs.svg" },
        { id: 2, name: "Razorpay", image: "/icons/razorpay.png" },
        { id: 3, name: "NextAuth", image: "/icons/nextauth.png" },
        { id: 4, name: "GitHub OAuth", image: "/icons/github.svg" },
        { id: 5, name: "MongoDB", image: "/icons/mongodb.svg" },
      ],
      url: "https://get-me-a-chai-khaki.vercel.app/",
    },
    {
      title: "Netflix UI Clone",
      description:
        "The Netflix UI Clone is a simple yet visually appealing replication of the Netflix homepage using only vanilla HTML and CSS. The project focuses on building responsive layouts, mimicking the sleek design of Netflix, and ensuring that the UI looks great on all screen sizes. Although it does not contain functional backend features, it demonstrates a strong understanding of frontend web development, including flexbox, grid systems, and media queries for responsiveness.",
      image: "./Project4.png",
      techStack: [
        { id: 1, name: "HTML", image: "/icons/html.svg" },
        { id: 2, name: "CSS", image: "/icons/css.svg" },
      ],
      url: "https://shaitausif.github.io/Netflix-Clone/",
    },
  ];

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
        const walk = (x - startX.current) * 3.5; // Adjust scroll speed
        container.scrollLeft = scrollLeft.current - walk;
      });
    };

    const stopDrag = () => {
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
      container.style.userSelect = "";
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
      className="min-h-screen relative flex flex-col max-w-full justify-evenly z-0 items-center overflow-hidden px-4"
    >
      <h3 className="uppercase text-gray-500 tracking-[18px] absolute md:top-20 top-16 text-xl">
        Projects
      </h3>

      <div
        ref={scrollRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-gray-400/20 cursor-grab scroll-smooth pt-10"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-3 md:p-12 min-h-screen"
          >
            <div className="relative group w-fit h-auto">
              <motion.img
                initial={{ y: -200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-fit h-30 md:h-50 object-contain rounded-lg"
                src={project.image}
                alt=""
              />
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg"
              >
                <span className="text-white hover:text-blue-400  text-md md:text-lg font-light underline">
                  Visit Project
                </span>
              </a>
            </div>
            <div className="space-y-5 px-0 md:px-10 max-w-5xl">
              <h4 className="text-lg md:text-xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 pt-5">
                  {project.title}
                </span>
              </h4>
              <div className="flex items-center space-x-3 justify-center">
                {project.techStack.map((tech) => (
                  <img
                    key={tech.id}
                    className="md:h-10 md:w-10 h-8 w-8"
                    src={tech.image}
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

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
