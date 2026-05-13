// "use client";

// import { Home, User, FileText, Award, Monitor, Menu, X, Mail } from "lucide-react";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const GithubIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
// const FacebookIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
// const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

// export default function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState("home");

//     const navItems = [
//         { id: "home", icon: <Home size={24} />, href: "#home" },
//         { id: "about-me", icon: <User size={24} />, href: "#about-me" },
//         { id: "resume", icon: <FileText size={24} />, href: "#resume" },
//         { id: "projects", icon: <Monitor size={24} />, href: "#projects" },
//         { id: "certificates", icon: <Award size={24} />, href: "#certificates" },
//         { id: "contact", icon: <Mail size={24} />, href: "#contact" },
//     ];

//     const socialItems = [
//         { icon: <GithubIcon />, href: "#" },
//         { icon: <FacebookIcon />, href: "#" },
//         { icon: <LinkedinIcon />, href: "#" },
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = navItems.map(item => item.id);
//             let current = "home";
//             let minDistance = Infinity;

//             for (const section of sections) {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const rect = element.getBoundingClientRect();
//                     // We consider an element active if its top is close to the middle of the viewport
//                     const distance = Math.abs(rect.top - window.innerHeight / 3);

//                     if (distance < minDistance) {
//                         minDistance = distance;
//                         current = section;
//                     }
//                 }
//             }
//             setActiveSection(current);
//         };

//         window.addEventListener("scroll", handleScroll, { passive: true });
//         // Initial setup
//         setTimeout(handleScroll, 100);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <>
//             {/* Mobile Hamburger Button */}
//             <button
//                 onClick={() => setIsOpen(true)}
//                 className="md:hidden fixed top-6 left-6 z-[60] p-3 bg-[#111111] border border-zinc-800 rounded-xl text-white shadow-lg shadow-black/50 hover:bg-zinc-800 transition-colors"
//                 aria-label="Open Menu"
//             >
//                 <Menu size={24} />
//             </button>

//             {/* Backdrop for mobile */}
//             {isOpen && (
//                 <div
//                     className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
//                     onClick={() => setIsOpen(false)}
//                 />
//             )}

//             {/* Sidebar Container */}
//             <aside className={`fixed top-0 left-0 h-screen w-20 flex flex-col justify-between bg-[#111111] border-r border-zinc-800 py-8 z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//                 <div className="flex flex-col items-center w-full">
//                     {/* Close button inside sidebar on mobile */}
//                     <button
//                         onClick={() => setIsOpen(false)}
//                         className="md:hidden mb-6 p-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
//                         aria-label="Close Menu"
//                     >
//                         <X size={24} />
//                     </button>

//                     <div className="flex flex-col items-center w-full mt-4 md:mt-0">
//                         {navItems.map((item, index) => {
//                             const isActive = activeSection === item.id;
//                             return (
//                                 <Link
//                                     key={index}
//                                     href={item.href}
//                                     onClick={() => setIsOpen(false)}
//                                     className={`w-full flex justify-center py-5 transition-colors border-l-2 ${isActive ? 'text-white border-white bg-zinc-800/50' : 'text-zinc-600 border-transparent hover:text-white hover:bg-zinc-800/30'}`}
//                                 >
//                                     {item.icon}
//                                 </Link>
//                             )
//                         })}
//                     </div>
//                 </div>

//                 <div className="flex flex-col items-center space-y-6">
//                     {socialItems.map((item, index) => (
//                         <Link
//                             key={index}
//                             href={item.href}
//                             className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg"
//                         >
//                             {item.icon}
//                         </Link>
//                     ))}
//                 </div>
//             </aside>
//         </>
//     );
// }


"use client";

import { Home, User, FileText, Award, Monitor, Menu, X, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", icon: <Home size={24} />, href: "#home" },
    { id: "about-me", icon: <User size={24} />, href: "#about-me" },
    { id: "resume", icon: <FileText size={24} />, href: "#Resume" },
    { id: "projects", icon: <Monitor size={24} />, href: "#projects" },
    { id: "certificates", icon: <Award size={24} />, href: "#certificates" },
    { id: "contact", icon: <Mail size={24} />, href: "#contact" },
  ];

  const socialItems = [
    { icon: <GithubIcon />, href: "https://github.com/sachin20731" },
    { icon: <FacebookIcon />, href: "#" },
    { icon: <LinkedinIcon />, href: "www.linkedin.com/in/dhanushka-munasinghe-887311259" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      let current = "home";
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 3);
          if (distance < minDistance) {
            minDistance = distance;
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-6 left-6 z-[60] p-3 bg-[#111111] border border-zinc-800 rounded-xl text-white shadow-lg shadow-black/50 hover:bg-zinc-800 transition-colors"
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed top-0 left-0 h-screen w-20 flex flex-col justify-between bg-[#111111] border-r border-zinc-800 py-8 z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex flex-col items-center w-full">
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden mb-6 p-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center w-full mt-4 md:mt-0">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex justify-center py-5 transition-colors border-l-2 ${isActive ? 'text-white border-white bg-zinc-800/50' : 'text-zinc-600 border-transparent hover:text-white hover:bg-zinc-800/30'}`}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Social Icons with #6A63AF color */}
        <div className="flex flex-col items-center space-y-6">
          {socialItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="p-2 rounded-lg transition-all duration-300"
              style={{ color: '#6A63AF' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#8A7BDF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6A63AF'}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
