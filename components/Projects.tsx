"use client";
import React, { useRef, useEffect } from "react";
import * as motion from "motion/react-client";
import { ExternalLink, Github } from "lucide-react"; // Import specific icons

const Projects = () => {
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
      liveUrl: "https://true-feedback-eight-woad.vercel.app/", // Renamed for clarity
      githubUrl: "https://github.com/shaitausif/True-Feedback", // Add GitHub URL
    },
    {
      title: "Full-Stack Blog App",
      description:
        "The Full-Stack Blog App allows users to create an account, log in securely via NextAuth, and engage with blog posts. Authenticated users can create, edit, or delete their own posts, while unauthenticated users can only view published content. The app uses React Hook Form for managing form data and Redux Toolkit for centralized state management. With a focus on clean UI design and smooth user experience, this app showcases full-stack development with features such as authentication, CRUD operations, and state management.",
      image: "./Project2.png",
      techStack: [
        { id: 1, name: "Next.js", image: "/icons/react.svg" }, // Assuming this should be Next.js or React
        { id: 2, name: "NextAuth", image: "/icons/nextauth.png" },
        { id: 3, name: "React Hook Form", image: "/icons/reacthookform.png" },
        { id: 4, name: "Redux Toolkit", image: "/icons/redux.svg" },
        { id: 5, name: "MongoDB", image: "/icons/appwrite.svg" }, // Assuming this is MongoDB, not Appwrite
      ],
      liveUrl: "https://blog-app-liard-six.vercel.app/",
      githubUrl: "https://github.com/shaitausif/Blog-App", // Add GitHub URL
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
      liveUrl: "https://getmeachaiii.netlify.app/",
      githubUrl: "https://github.com/shaitausif/Get-Me-a-Chai", // Add GitHub URL
    },
    {
      title: "Eclypse - Internship Assignment",
      description:
        "Eclypse is a modern web app created as part of an internship assignment, focusing on supporting homegrown brands and empowering unique voices. The project captures the brand's mission of connection and community while providing a clean and responsive UI. Built with a full-stack architecture, it integrates secure backend operations, seamless user interaction, and scalable data handling.",
      image: "./Project4.png",
      techStack: [
        { id: 1, name: "React", image: "/icons/react.svg" },
        { id: 2, name: "Express", image: "/icons/express.svg" },
        { id: 3, name: "MongoDB", image: "/icons/mongodb.svg" },
        { id: 4, name: "Node.js", image: "/icons/nodejs.svg" },
        { id: 5, name: "Tailwind CSS", image: "/icons/tailwindcss.svg" },
      ],
      liveUrl: "https://eclypse-backend-hoxc.vercel.app", // Replace with actual URL if deployed
      githubUrl: "https://github.com/shaitausif/eclypse-frontend", // Add GitHub URL
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
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-3 md:p-12 min-h-screen"
          >
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative w-fit h-auto group" // Changed to group for hover effect
            >
              <img
                className="w-fit h-30 md:h-50 object-contain rounded-lg"
                src={project.image}
                alt={project.title} // Add alt text for accessibility
              />
              {/* Overlay for hover effect on image */}
              <div className="absolute inset-0 bg-black/70 opacity-0 duration-300 group-hover:opacity-60 transition-opacity rounded-lg"></div>

              {/* Links positioned absolutely within the motion.div */}
              <div className="absolute top-2 right-2 flex space-x-2 z-30"> {/* Increased z-index for links */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 opacity-80 hover:opacity-100 duration-300 rounded-full text-white hover:bg-gray-700/50 transition-colors flex items-center justify-center"
                    title="View on GitHub"
                    onClick={(e) => e.stopPropagation()} // Prevent drag when clicking link
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
                    onClick={(e) => e.stopPropagation()} // Prevent drag when clicking link
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
                {project.techStack.map((tech) => (
                  <img
                    key={tech.id}
                    className="md:h-10 md:w-10 h-8 w-8 object-contain" // Added object-contain for icons
                    src={tech.image}
                    alt={tech.name} // Add alt text for accessibility
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