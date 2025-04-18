import Image from "next/image";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
// import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0 scroll-smooth  ">
    
    {/* Header */}
    <Header/>


    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero />
    </section>

    {/* About */}
    <section id="about" className="snap-center">
      <About />
    </section> 

    {/* Experience */}
    {/* <section className="snap-center" id="experience">
      <Experience />
    </section> */}

    {/* Skills */}
    <section id="skills" className="snap-start">
      <Skills />
    </section>

    
    {/* Projects */}
    <section id="projects" className="snap-start">
      <Projects />
    </section>
  

    {/* Contact Me */}
    <section id="contactme" className="snap-start">
      <ContactMe />
    </section>

    <Link href={'#hero'}>
    <footer className="sticky bottom-3 md:bottom-2  w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <Image
        className="h-8 w-8  rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
        src="./javascript.png" alt="" />
      </div>
    </footer>
    </Link>

    
    </div>

  );
}
