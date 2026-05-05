import Header from "../component/Header";
import HeroImage from "../component/HeroImage";
import BackgroundElements from "../component/BackgroundElements";
import AboutMe from "../component/about-me/AboutMe";
import Resume from "../component/resume/Resume";
import Projects from "../component/projects/Projects";
import Certificates from "../component/certificates/Certificates";
import Contact from "../component/contact/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen relative overflow-x-hidden bg-[#1f1e24] scroll-smooth">
      <BackgroundElements />

      {/* Home Section */}
      <section id="home" className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 sm:px-16 lg:px-24 min-h-screen pb-12 lg:pb-0">
        <Header />
        <HeroImage />
      </section>

      {/* Content Sections */}
      <AboutMe />
      <Resume />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
