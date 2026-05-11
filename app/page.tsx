// import Header from "../component/Header";
// import HeroImage from "../component/HeroImage";
// import BackgroundElements from "../component/BackgroundElements";
// import AboutMe from "../component/about-me/AboutMe";
// import Resume from "../component/resume/Resume";
// import Projects from "../component/projects/Projects";
// import Certificates from "../component/certificates/Certificates";
// import Contact from "../component/contact/Contact";

// export default function Home() {
//   return (
//     <main className="flex-1 flex flex-col w-full min-h-screen relative overflow-x-hidden bg-[#1f1e24] scroll-smooth">
//       {/* Home Section */}
//       <section id="home" className="relative z-10 w-full min-h-screen">
//         <BackgroundElements />
//         <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 sm:px-16 lg:px-24 min-h-screen pb-12 lg:pb-0 relative z-10">
//           <Header />
//           <HeroImage />
//         </div>
//       </section>

//       {/* Content Sections */}
//       <AboutMe />
//       <Resume />
//       <Projects />
//       <Certificates />
//       <Contact />
//     </main>
//   );
// }


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
    <main className="relative flex flex-col w-full min-h-screen bg-[#1f1e24] scroll-smooth font-sans antialiased">

      {/* Fixed gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1f1e24] via-[#25232b] to-[#1a191d] pointer-events-none z-0" />

      {/* ================= HOME SECTION ================= */}
      <section
        id="home"
        className="relative z-10 w-full min-h-screen flex items-center justify-center"
      >
        <BackgroundElements />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
          
          {/* 
            On mobile: column-reverse? No, we want image first, then text.
            Use flex-col on mobile, flex-row on lg. 
            Then manually order the children: image first (order-1), text second (order-2) on mobile.
            On desktop, we can keep image as order-2 if needed, but here we want text left, image right.
            So we'll use flex-col lg:flex-row, and then within that, we set order-1 for image on mobile, order-2 for text.
            Then on lg, we reverse order using lg:order-1 / lg:order-2.
          */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">
            
            {/* Image container – appears first on mobile, second on desktop */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              {/* Make image smaller on mobile: max-w-xs, on desktop it uses full width of container */}
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none w-full">
                <HeroImage />
              </div>
            </div>

            {/* Text container – appears second on mobile, first on desktop */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <Header />
            </div>
          </div>
        </div>
      </section>

      {/* Other sections (unchanged) */}
      <div className="relative z-10 space-y-0">
        <section className="w-full scroll-mt-20" id="about"><AboutMe /></section>
        <section className="w-full scroll-mt-20" id="resume"><Resume /></section>
        <section className="w-full scroll-mt-20" id="projects"><Projects /></section>
        <section className="w-full scroll-mt-20" id="certificates"><Certificates /></section>
        <section className="w-full scroll-mt-20" id="contact"><Contact /></section>
      </div>
    </main>
  );
}