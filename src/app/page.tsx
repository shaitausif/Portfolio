import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Education from "../../components/Education";
import Link from "next/link";
import { getPortfolio } from "@/lib/api";

export default async function Home() {
  const data = await getPortfolio();

  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0 scroll-smooth">

    {/* Header */}
    <Header socialLinks={data.socialLinks} email={data.email} />

    {/* Hero */}
    <section id="hero" className="snap-center">
      <Hero
        name={data.name}
        role={data.role}
        photo={data.photo}
        typewriterStrings={data.typewriterStrings}
        resume={data.resume}
      />
    </section>

    {/* About */}
    <section id="about" className="snap-center">
      <About bio={data.bio} photo={data.photo} />
    </section>

    {/* Experience */}
    {data.experience.length > 0 && (
      <section className="snap-center" id="experience">
        <Experience experience={data.experience} />
      </section>
    )}

    {/* Skills */}
    <section id="skills" className="snap-start">
      <Skills skills={data.skills} />
    </section>

    {/* Projects */}
    <section id="projects" className="snap-start">
      <Projects projects={data.projects} />
    </section>

    {/* Education */}
    {data.education.length > 0 && (
      <section id="education" className="snap-start">
        <Education education={data.education} />
      </section>
    )}

    {/* Contact Me */}
    <section id="contactme" className="snap-start">
      <ContactMe email={data.email} phone={data.phone} address={data.address} />
    </section>

    <footer className="sticky bottom-3 md:bottom-2  w-full ">
      <div className="flex items-center justify-center">
          <Link className="cursor-pointer" href={'#hero'}>
        <img
        className="h-8 w-8  rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
        src="./javascript.png" alt="" />
         </Link>
      </div>
    </footer>

    </div>
  );
}
