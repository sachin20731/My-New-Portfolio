

// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// // const slowEase = [0.22, 1, 0.36, 1] as const;

// // const verticalLine = (delay: number, height: number) => ({
// //   hidden: { height: 0 },
// //   visible: { height, transition: { duration: 1, delay, ease: slowEase } },
// // });

// // const horizontalLine = (delay: number, width: string) => ({
// //   hidden: { scaleX: 0 },
// //   visible: { scaleX: 1, transition: { duration: 0.9, delay, ease: slowEase } },
// // });

// // const fadeInUp = (delay: number) => ({
// //   hidden: { opacity: 0, y: 25 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: slowEase } },
// // });

// // const scaleIn = (delay: number) => ({
// //   hidden: { opacity: 0, scale: 0.95 },
// //   visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay, ease: slowEase } },
// // });

// const slowEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// const verticalLine = (delay: number, height: number | string) => ({
//   hidden: { height: 0 },
//   visible: {
//     height,
//     transition: {
//       duration: 1,
//       delay,
//       ease: slowEase as [number, number, number, number],
//     },
//   },
// });

// const horizontalLine = (delay: number, width: string) => ({
//   hidden: { scaleX: 0 },
//   visible: {
//     scaleX: 1,
//     transition: {
//       duration: 0.9,
//       delay,
//       ease: slowEase as [number, number, number, number],
//     },
//   },
// });

// const fadeInUp = (delay: number) => ({
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       delay,
//       ease: slowEase as [number, number, number, number],
//     },
//   },
// });

// const scaleIn = (delay: number) => ({
//   hidden: {
//     opacity: 0,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       delay,
//       ease: slowEase as [number, number, number, number],
//     },
//   },
// });

// export default function AboutMe() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.2, margin: "-50px" });

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-screen bg-[#1a191d] text-white px-4 py-12 md:px-16 md:py-16"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto relative">
//         {/* ================= LEFT COLUMN ================= */}
//         <div className="md:col-span-5 space-y-6">
//           <motion.h1
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeInUp(0)}
//             className="text-4xl md:text-6xl font-bold bg-[#6A63AF] bg-clip-text text-transparent text-center md:text-left"
//           >
//             About Me
//           </motion.h1>

//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeInUp(0.1)}
//             className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 text-center md:text-left"
//           >
//             <p>
//               I am a motivated and detail-oriented individual with 1 year of
//               experience in the technology industry, working on real-world
//               software solutions and continuously improving my technical skills.
//             </p>
//             <p>
//               I have hands-on experience in developing web-based applications
//               using technologies such as React, Spring Boot, and MySQL.
//             </p>
//             <p>
//               I am passionate about learning new technologies, solving problems,
//               and creating efficient systems.
//             </p>
//           </motion.div>

//           {/* Vertical line: About → Education */}
//           <div className="flex justify-center py-1">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(0.4, 60)}
//               className="w-[2px] bg-[#6A63AF]/80"
//             />
//           </div>

//           {/* Education badge */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={scaleIn(0.6)}
//             className="flex justify-center"
//           >
//             <div className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full">
//               <span className="text-xs md:text-sm font-medium tracking-wide">🎓 Education</span>
//             </div>
//           </motion.div>

//           {/* Education details with full vertical flow */}
//           <div className="flex flex-col items-center pt-4">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(0.8, 45)}
//               className="w-[2px] bg-[#6A63AF]/80"
//             />

//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(1.0, "85%")}
//               className="h-[2px] bg-[#6A63AF]/80 rounded-full origin-left"
//               style={{ width: "85%" }}
//             />

//             {/* Three small vertical stems - hidden on mobile, only decorative on desktop */}
//             <div className="hidden md:flex justify-between w-[85%] mt-1">
//               {[0, 1, 2].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={verticalLine(1.1 + i * 0.1, 35)}
//                   className="w-[2px] bg-[#6A63AF]"
//                 />
//               ))}
//             </div>

//             {/* Education boxes – stacked on mobile, three columns on desktop */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
//               {[
//                 {
//                   university: "Wrexham Glyndwr University - UK",
//                   degree: "BSc (Hons) Computing",
//                   grade: "Second Upper Class",
//                   year: "2024-2025",
//                   title: "Related Coursework",
//                   courses: [
//                     "Web App Development",
//                     "Mobile App Development",
//                     "Distributed Data",
//                     "Data Analytics",
//                     "IT Project Management",
//                   ],
//                 },
//                 {
//                   university: "University Of Moratuwa - NDT",
//                   degree: "Information Technology",
//                   grade: "National Diploma In Technology",
//                   year: "2021-2025",
//                   title: "Related Coursework",
//                   courses: [
//                     "Web App Development",
//                     "Mobile App Development",
//                     "Distributed Data",
//                     "Data Analytics",
//                     "IT Project Management",
//                   ],
//                 },
//                 {
//                   university: "Vidyarthe College Kandy",
//                   degree: "GCE Advanced Level Examination",
//                   year: "2020",
//                   title: "Physical Science Stream",
//                   courses: ["Combined Maths - C", "Physics - C", "Chemistry - C"],
//                 },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={fadeInUp(1.3 + i * 0.1)}
//                   className="border border-[#6A63AF] rounded-xl p-4 backdrop-blur-sm bg-[#6A63AF]/5 hover:border-[#6A63AF]/40 transition-all duration-300"
//                 >
//                   <div className="text-sm font-semibold text-[#6A63AF] leading-tight">
//                     {item.university}
//                   </div>
//                   <div className="text-xs text-gray-300 mt-2">{item.degree}</div>
//                   {item.grade && <div className="text-xs text-gray-400 mt-2">{item.grade}</div>}
//                   <div className="text-[10px] text-gray-500 mt-2">{item.year}</div>
//                   <div className="text-sm font-semibold text-purple-300/60 mt-3">{item.title}</div>
//                   <div className="flex flex-wrap gap-1 mt-2">
//                     {item.courses.map((course, idx) => (
//                       <span
//                         key={idx}
//                         className="text-[10px] px-2 py-[2px] border border-[#6A63AF] rounded-md text-gray-300"
//                       >
//                         {course}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT COLUMN ================= */}
//         <div className="md:col-span-7 flex flex-col items-center mt-12 md:mt-0">
//           {/* Technical badge (outside the box) */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={scaleIn(1.3)}
//             className="mb-2"
//           >
//             <div className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full">
//               <span className="text-xs md:text-sm font-medium tracking-wide">⚙️ Technical</span>
//             </div>
//           </motion.div>

//           {/* Vertical line from badge to Technical box */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={verticalLine(0.2, 40)}
//             className="w-[2px] bg-[#6A63AF]/80"
//           />

//           {/* Technical Box */}
//           <div className="relative w-full max-w-lg p-6 md:p-8 mt-0">
//             {/* Animated border */}
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(0.5, "100%")}
//               className="absolute top-0 left-0 h-[1px] bg-[#6A63AF] origin-left w-full"
//             />
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(0.7, "100%")}
//               className="absolute right-0 top-0 w-[1px] bg-[#6A63AF] origin-top h-full"
//             />
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(0.9, "100%")}
//               className="absolute bottom-0 right-0 h-[1px] bg-[#6A63AF] origin-right w-full"
//             />
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(1.1, "100%")}
//               className="absolute left-0 bottom-0 w-[1px] bg-[#6A63AF] origin-bottom h-full"
//             />

//             {/* Content */}
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp(1.5)}
//               className="text-gray-300 space-y-2 text-xs md:text-sm text-left"
//             >
//               <p>
//                 <span className="font-semibold text-white">Programming:</span> JavaScript, TypeScript, Java
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Frameworks:</span> React, Node, Express, Spring Boot, Next.js
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Frontend:</span> HTML, CSS, SCSS, REST APIs
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Databases:</span> MySQL, MongoDB
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Tools:</span> Docker, Grafana, Postman, JMeter, Figma
//               </p>
//             </motion.div>

//             {/* Icon row – wrap on mobile */}
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp(1.8)}
//               className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 items-center"
//             >
//               <img src="/java.png" alt="Java" className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition" />
//               <img src="/next.png" alt="Next.js" className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition" />
//               <img src="/aws.png" alt="AWS" className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition" />
//               <img src="/grafana.png" alt="Grafana" className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition" />
//               <img src="/github.png" alt="GitHub" className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition" />
//             </motion.div>
//           </div>

//           {/* Line to Experience */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={verticalLine(1.7, 40)}
//             className="w-[2px] bg-[#6A63AF]/80"
//           />

//           {/* Experience badge */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={scaleIn(1.9)}
//             className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full mb-2"
//           >
//             <span className="text-xs md:text-sm font-medium tracking-wide">💼 Experience</span>
//           </motion.div>

//           {/* Vertical line under Experience */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={verticalLine(2.1, 30)}
//             className="w-[2px] bg-[#6A63AF]"
//           />

//           {/* Horizontal connector – hidden on mobile for cleaner look */}
//           <div className="hidden md:block w-full">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(2.3, "60%")}
//               className="h-[2px] bg-[#6A63AF] rounded-full origin-left mx-auto"
//               style={{ width: "60%" }}
//             />
//             <div className="flex justify-between w-[60%] mx-auto mt-1">
//               {[0, 1, 2].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={verticalLine(2.5 + i * 0.1, 35)}
//                   className="w-[1px] bg-[#6A63AF]"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Experience boxes – stacked on mobile, three columns on desktop */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
//             {[
//               {
//                 role: "Intern Software and Web Developer",
//                 company: "Cyber Mas Solutions (Pvt) Ltd",
//                 position: "Full-Stack Developer",
//                 tech: ["React JS", "REST APIs", "HTML", "Tailwind CSS", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker", "J-Meter", "Grafana", "Ubuntu", "Jenkins"],
//               },
//               {
//                 role: "Intern Back-End Developer",
//                 company: "Sri Lanka Ports Authority",
//                 position: "Back-End Developer",
//                 tech: ["React JS", "REST APIs", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker"],
//               },
//               {
//                 role: "Associate Software Developer (Part Time)",
//                 company: "Verlixtech (Pvt) Ltd",
//                 position: "Full-Stack Developer",
//                 tech: ["React JS", "REST APIs", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker", "Next JS", "TypeScript", "SEO Optimize", "DNS Manage"],
//               },
//             ].map((exp, i) => (
//               <motion.div
//                 key={i}
//                 initial="hidden"
//                 animate={isInView ? "visible" : "hidden"}
//                 variants={fadeInUp(2.8 + i * 0.1)}
//                 className="border border-[#6A63AF] rounded-xl p-4 backdrop-blur-sm bg-[#545d65]/5 hover:border-[#545d65] transition-all duration-300"
//               >
//                 <div className="text-sm font-semibold text-[#6A63AF] leading-tight">{exp.role}</div>
//                 <div className="text-xs text-gray-400 mt-2">{exp.company}</div>
//                 <div className="text-xs text-gray-300 mt-1">{exp.position}</div>
//                 <div className="mt-3 flex flex-wrap gap-1">
//                   {exp.tech.map((t, idx) => (
//                     <span key={idx} className="text-[10px] px-2 py-[2px] border border-[#545d65] rounded-md text-gray-300">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Decorative bottom line */}
//           {/* <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={horizontalLine(3.2, "30%")}
//             className="h-[1px] bg-[#6A63AF] mt-10 rounded-full origin-left"
//             style={{ width: "30%" }}
//           /> */}
//           <div className="flex gap-6 mt-10">
//           <img src="/Cyber mas solutions.png" className="w-42 h-32 object-fit " />
//           <img src="/verlixtech.png" className="w-82 h-22 object-fit" />
//           <img src="/img3.png" className="w-32 h-32 object-cover border border-purple-500" />
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";

// // Define the cubic-bezier array as a const assertion → becomes readonly [0.22, 1, 0.36, 1]
// const slowEase = [0.22, 1, 0.36, 1] as const;

// // Helper to create transition objects with the correct ease type
// const transition = (duration: number, delay: number) => ({
//   duration,
//   delay,
//   ease: slowEase, // TypeScript now sees this as readonly [number, number, number, number]
// });

// // Define each variant as a proper Variants object (no inline function return)
// const fadeInUp = (delay: number): Variants => ({
//   hidden: { opacity: 0, y: 25 },
//   visible: { opacity: 1, y: 0, transition: transition(0.8, delay) },
// });

// const scaleIn = (delay: number): Variants => ({
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: transition(0.6, delay) },
// });

// const verticalLine = (delay: number, height: number | string): Variants => ({
//   hidden: { height: 0 },
//   visible: { height, transition: transition(1, delay) },
// });

// const horizontalLine = (delay: number, width: string): Variants => ({
//   hidden: { scaleX: 0 },
//   visible: { scaleX: 1, transition: transition(0.9, delay) },
// });

// export default function AboutMe() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.2, margin: "-50px" });

//   return (
//     <div
//       ref={sectionRef}
//       className="min-h-screen bg-[#1a191d] text-white px-4 py-12 md:px-16 md:py-16 overflow-hidden"
//     >
//       {/* Moving dot border animation styles */}
//       <style jsx>{`
//         @keyframes orbitDot {
//           0% { top: -6px; left: -6px; right: auto; bottom: auto; }
//           25% { top: -6px; left: auto; right: -6px; bottom: auto; }
//           50% { top: auto; left: auto; right: -6px; bottom: -6px; }
//           75% { top: auto; left: -6px; right: auto; bottom: -6px; }
//           100% { top: -6px; left: -6px; right: auto; bottom: auto; }
//         }
//         .orbiting-dot {
//           position: absolute;
//           width: 8px;
//           height: 8px;
//           background: #6A63AF;
//           border-radius: 50%;
//           box-shadow: 0 0 8px #6A63AF;
//           pointer-events: none;
//           z-index: 10;
//           animation: orbitDot 4s linear infinite;
//         }
//       `}</style>

//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto relative">
//         {/* ================= LEFT COLUMN ================= */}
//         <div className="md:col-span-5 space-y-6">
//           <motion.h1
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeInUp(0)}
//             className="text-4xl md:text-6xl font-bold bg-[#6A63AF] bg-clip-text text-transparent text-center md:text-left"
//           >
//             About Me
//           </motion.h1>

//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeInUp(0.1)}
//             className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 text-center md:text-left"
//           >
//             <p>
//               I am a motivated and detail-oriented individual with 1 year of
//               experience in the technology industry, working on real-world
//               software solutions and continuously improving my technical skills.
//             </p>
//             <p>
//               I have hands-on experience in developing web-based applications
//               using technologies such as React, Spring Boot, and MySQL.
//             </p>
//             <p>
//               I am passionate about learning new technologies, solving problems,
//               and creating efficient systems.
//             </p>
//           </motion.div>

//           {/* Vertical line: About → Education */}
//           <div className="flex justify-center py-1">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(0.4, 60)}
//               className="w-[2px] bg-[#6A63AF]/80"
//             />
//           </div>

//           {/* Education badge */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={scaleIn(0.6)}
//             className="flex justify-center"
//           >
//             <div className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full">
//               <span className="text-xs md:text-sm font-medium tracking-wide">🎓 Education</span>
//             </div>
//           </motion.div>

//           {/* Education details with full vertical flow */}
//           <div className="flex flex-col items-center pt-4">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(0.8, 45)}
//               className="w-[2px] bg-[#6A63AF]/80"
//             />

//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(1.0, "85%")}
//               className="h-[2px] bg-[#6A63AF]/80 rounded-full origin-left"
//               style={{ width: "85%" }}
//             />

//             {/* Three small vertical stems - hidden on mobile */}
//             <div className="hidden md:flex justify-between w-[85%] mt-1">
//               {[0, 1, 2].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={verticalLine(1.1 + i * 0.1, 35)}
//                   className="w-[2px] bg-[#6A63AF]"
//                 />
//               ))}
//             </div>

//             {/* Education boxes */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
//               {[
//                 {
//                   university: "Wrexham Glyndwr University - UK",
//                   degree: "BSc (Hons) Computing",
//                   grade: "Second Upper Class",
//                   year: "2024-2025",
//                   title: "Related Coursework",
//                   courses: [
//                     "Web App Development",
//                     "Mobile App Development",
//                     "Distributed Data",
//                     "Data Analytics",
//                     "IT Project Management",
//                   ],
//                 },
//                 {
//                   university: "University Of Moratuwa - NDT",
//                   degree: "Information Technology",
//                   grade: "National Diploma In Technology",
//                   year: "2021-2025",
//                   title: "Related Coursework",
//                   courses: [
//                     "Web App Development",
//                     "Mobile App Development",
//                     "Distributed Data",
//                     "Data Analytics",
//                     "IT Project Management",
//                   ],
//                 },
//                 {
//                   university: "Vidyarthe College Kandy",
//                   degree: "GCE Advanced Level Examination",
//                   year: "2020",
//                   title: "Physical Science Stream",
//                   courses: ["Combined Maths - C", "Physics - C", "Chemistry - C"],
//                 },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={fadeInUp(1.3 + i * 0.1)}
//                   className="border border-[#6A63AF] rounded-xl p-4 backdrop-blur-sm bg-[#6A63AF]/5 hover:border-[#6A63AF]/40 transition-all duration-300"
//                 >
//                   <div className="text-sm font-semibold text-[#6A63AF] leading-tight">
//                     {item.university}
//                   </div>
//                   <div className="text-xs text-gray-300 mt-2">{item.degree}</div>
//                   {item.grade && <div className="text-xs text-gray-400 mt-2">{item.grade}</div>}
//                   <div className="text-[10px] text-gray-500 mt-2">{item.year}</div>
//                   <div className="text-sm font-semibold text-purple-300/60 mt-3">{item.title}</div>
//                   <div className="flex flex-wrap gap-1 mt-2">
//                     {item.courses.map((course, idx) => (
//                       <span
//                         key={idx}
//                         className="text-[10px] px-2 py-[2px] border border-[#6A63AF] rounded-md text-gray-300"
//                       >
//                         {course}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT COLUMN ================= */}
//         <div className="md:col-span-7 flex flex-col items-center mt-12 md:mt-0">
//           {/* Technical badge (outside the box) */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={scaleIn(1.3)}
//             className="mb-2"
//           >
//             <div className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full">
//               <span className="text-xs md:text-sm font-medium tracking-wide">⚙️ Technical</span>
//             </div>
//           </motion.div>

//           {/* Vertical line from badge to Technical box */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={verticalLine(0.2, 40)}
//             className="w-[2px] bg-[#6A63AF]/80"
//           />

//           {/* Technical Box with moving dot */}
//           <div className="relative w-full max-w-lg p-6 md:p-8 mt-0">
//             {/* Animated border */}
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(0.5, "100%")}
//               className="absolute top-0 left-0 h-[1px] bg-[#6A63AF] origin-left w-full"
//             />
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(0.7, "100%")}
//               className="absolute right-0 top-0 w-[1px] bg-[#6A63AF] origin-top h-full"
//             />
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(0.9, "100%")}
//               className="absolute bottom-0 right-0 h-[1px] bg-[#6A63AF] origin-right w-full"
//             />
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={verticalLine(1.1, "100%")}
//               className="absolute left-0 bottom-0 w-[1px] bg-[#6A63AF] origin-bottom h-full"
//             />

//             {/* 🟣 MOVING DOT (orbits the box) */}
//             <div className="orbiting-dot" />

//             {/* Content */}
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp(1.5)}
//               className="text-gray-300 space-y-2 text-xs md:text-sm text-left"
//             >
//               <p>
//                 <span className="font-semibold text-white">Programming:</span> JavaScript, TypeScript, Java
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Frameworks:</span> React, Node, Express, Spring Boot, Next.js
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Frontend:</span> HTML, CSS, SCSS, REST APIs
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Databases:</span> MySQL, MongoDB
//               </p>
//               <p>
//                 <span className="font-semibold text-white">Tools:</span> Docker, Grafana, Postman, JMeter, Figma
//               </p>
//             </motion.div>

//             {/* Icon row */}
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp(1.8)}
//               className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 items-center"
//             >

//                 <Image
//                   src="/java.png"
//                   alt="Java"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
//                 />

//                 <Image
//                   src="/next.png"
//                   alt="Next.js"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
//                 />

//                 <Image
//                   src="/aws.png"
//                   alt="AWS"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
//                 />

//                 <Image
//                   src="/grafana.png"
//                   alt="Grafana"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
//                 />

//                 <Image
//                   src="/github.png"
//                   alt="GitHub"
//                   width={32}
//                   height={32}
//                   className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
//                 />
//             </motion.div>
//           </div>

//           {/* Line to Experience */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={verticalLine(1.7, 40)}
//             className="w-[2px] bg-[#6A63AF]/80"
//           />

//           {/* Experience badge */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={scaleIn(1.9)}
//             className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full mb-2"
//           >
//             <span className="text-xs md:text-sm font-medium tracking-wide">💼 Experience</span>
//           </motion.div>

//           {/* Vertical line under Experience */}
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={verticalLine(2.1, 30)}
//             className="w-[2px] bg-[#6A63AF]"
//           />

//           {/* Horizontal connector – hidden on mobile */}
//           <div className="hidden md:block w-full">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={horizontalLine(2.3, "60%")}
//               className="h-[2px] bg-[#6A63AF] rounded-full origin-left mx-auto"
//               style={{ width: "60%" }}
//             />
//             <div className="flex justify-between w-[60%] mx-auto mt-1">
//               {[0, 1, 2].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={verticalLine(2.5 + i * 0.1, 35)}
//                   className="w-[1px] bg-[#6A63AF]"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Experience boxes */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
//             {[
//               {
//                 role: "Intern Software and Web Developer",
//                 company: "Cyber Mas Solutions (Pvt) Ltd",
//                 position: "Full-Stack Developer",
//                 tech: ["React JS", "REST APIs", "HTML", "Tailwind CSS", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker", "J-Meter", "Grafana", "Ubuntu", "Jenkins"],
//               },
//               {
//                 role: "Intern Back-End Developer",
//                 company: "Sri Lanka Ports Authority",
//                 position: "Back-End Developer",
//                 tech: ["React JS", "REST APIs", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker"],
//               },
//               {
//                 role: "Associate Software Developer (Part Time)",
//                 company: "Verlixtech (Pvt) Ltd",
//                 position: "Full-Stack Developer",
//                 tech: ["React JS", "REST APIs", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker", "Next JS", "TypeScript", "SEO Optimize", "DNS Manage"],
//               },
//             ].map((exp, i) => (
//               <motion.div
//                 key={i}
//                 initial="hidden"
//                 animate={isInView ? "visible" : "hidden"}
//                 variants={fadeInUp(2.8 + i * 0.1)}
//                 className="border border-[#6A63AF] rounded-xl p-4 backdrop-blur-sm bg-[#545d65]/5 hover:border-[#545d65] transition-all duration-300"
//               >
//                 <div className="text-sm font-semibold text-[#6A63AF] leading-tight">{exp.role}</div>
//                 <div className="text-xs text-gray-400 mt-2">{exp.company}</div>
//                 <div className="text-xs text-gray-300 mt-1">{exp.position}</div>
//                 <div className="mt-3 flex flex-wrap gap-1">
//                   {exp.tech.map((t, idx) => (
//                     <span key={idx} className="text-[10px] px-2 py-[2px] border border-[#545d65] rounded-md text-gray-300">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

          
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Define the cubic-bezier array as a const assertion → becomes readonly [0.22, 1, 0.36, 1]
const slowEase = [0.22, 1, 0.36, 1] as const;

// Helper to create transition objects with the correct ease type
const transition = (duration: number, delay: number) => ({
  duration,
  delay,
  ease: slowEase, // TypeScript now sees this as readonly [number, number, number, number]
});

// Define each variant as a proper Variants object (no inline function return)
const fadeInUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: transition(0.8, delay) },
});

const scaleIn = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: transition(0.6, delay) },
});

const verticalLine = (delay: number, height: number | string): Variants => ({
  hidden: { height: 0 },
  visible: { height, transition: transition(1, delay) },
});

const horizontalLine = (delay: number, width: string): Variants => ({
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: transition(0.9, delay) },
});

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2, margin: "-50px" });

  return (
    <div
        id="about-me"
        ref={sectionRef}
        className="min-h-screen bg-[#1a191d] text-white px-4 py-12 md:px-16 md:py-16 overflow-hidden"
      >
      {/* Moving dot border animation styles */}
      <style jsx>{`
        @keyframes orbitDot {
          0% { top: -6px; left: -6px; right: auto; bottom: auto; }
          25% { top: -6px; left: auto; right: -6px; bottom: auto; }
          50% { top: auto; left: auto; right: -6px; bottom: -6px; }
          75% { top: auto; left: -6px; right: auto; bottom: -6px; }
          100% { top: -6px; left: -6px; right: auto; bottom: auto; }
        }
        .orbiting-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #6A63AF;
          border-radius: 50%;
          box-shadow: 0 0 8px #6A63AF;
          pointer-events: none;
          z-index: 10;
          animation: orbitDot 4s linear infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto relative">
        {/* ================= LEFT COLUMN ================= */}
        <div className="md:col-span-5 space-y-6">
          <motion.h1
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp(0)}
            className="text-4xl md:text-6xl font-bold bg-[#6A63AF] bg-clip-text text-transparent text-center md:text-left"
          >
            About Me
          </motion.h1>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp(0.1)}
            className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 text-center md:text-left"
          >
            <p>
              I am a motivated and detail-oriented individual with 1 year of
              experience in the technology industry, working on real-world
              software solutions and continuously improving my technical skills.
            </p>
            <p>
              I have hands-on experience in developing web-based applications
              using technologies such as React, Spring Boot, and MySQL.
            </p>
            <p>
              I am passionate about learning new technologies, solving problems,
              and creating efficient systems.
            </p>
          </motion.div>

          {/* Vertical line: About → Education */}
          <div className="flex justify-center py-1">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={verticalLine(0.4, 60)}
              className="w-[2px] bg-[#6A63AF]/80"
            />
          </div>

          {/* Education badge */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleIn(0.6)}
            className="flex justify-center"
          >
            <div className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full">
              <span className="text-xs md:text-sm font-medium tracking-wide">🎓 Education</span>
            </div>
          </motion.div>

          {/* Education details with full vertical flow */}
          <div className="flex flex-col items-center pt-4">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={verticalLine(0.8, 45)}
              className="w-[2px] bg-[#6A63AF]/80"
            />

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={horizontalLine(1.0, "85%")}
              className="h-[2px] bg-[#6A63AF]/80 rounded-full origin-left"
              style={{ width: "85%" }}
            />

            {/* Three small vertical stems - hidden on mobile */}
            <div className="hidden md:flex justify-between w-[85%] mt-1">
              {[0, 1, 2].map((_, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={verticalLine(1.1 + i * 0.1, 35)}
                  className="w-[2px] bg-[#6A63AF]"
                />
              ))}
            </div>

            {/* Education boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
              {[
                {
                  university: "Wrexham Glyndwr University - UK",
                  degree: "BSc (Hons) Computing",
                  grade: "Second Upper Class",
                  year: "2024-2025",
                  title: "Related Coursework",
                  courses: [
                    "Web App Development",
                    "Mobile App Development",
                    "Distributed Data",
                    "Data Analytics",
                    "IT Project Management",
                  ],
                },
                {
                  university: "University Of Moratuwa - NDT",
                  degree: "Information Technology",
                  grade: "National Diploma In Technology",
                  year: "2021-2025",
                  title: "Related Coursework",
                  courses: [
                    "Web App Development",
                    "Mobile App Development",
                    "Distributed Data",
                    "Data Analytics",
                    "IT Project Management",
                  ],
                },
                {
                  university: "Vidyarthe College Kandy",
                  degree: "GCE Advanced Level Examination",
                  year: "2020",
                  title: "Physical Science Stream",
                  courses: ["Combined Maths - C", "Physics - C", "Chemistry - C"],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeInUp(1.3 + i * 0.1)}
                  className="border border-[#6A63AF] rounded-xl p-4 backdrop-blur-sm bg-[#6A63AF]/5 hover:border-[#6A63AF]/40 transition-all duration-300"
                >
                  <div className="text-sm font-semibold text-[#6A63AF] leading-tight">
                    {item.university}
                  </div>
                  <div className="text-xs text-gray-300 mt-2">{item.degree}</div>
                  {item.grade && <div className="text-xs text-gray-400 mt-2">{item.grade}</div>}
                  <div className="text-[10px] text-gray-500 mt-2">{item.year}</div>
                  <div className="text-sm font-semibold text-purple-300/60 mt-3">{item.title}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.courses.map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-[2px] border border-[#6A63AF] rounded-md text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="md:col-span-7 flex flex-col items-center mt-12 md:mt-0">
          {/* Technical badge (outside the box) */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleIn(1.3)}
            className="mb-2"
          >
            <div className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full">
              <span className="text-xs md:text-sm font-medium tracking-wide">⚙️ Technical</span>
            </div>
          </motion.div>

          {/* Vertical line from badge to Technical box */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={verticalLine(0.2, 40)}
            className="w-[2px] bg-[#6A63AF]/80"
          />

          {/* Technical Box with moving dot */}
          <div className="relative w-full max-w-lg p-6 md:p-8 mt-0">
            {/* Animated border */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={horizontalLine(0.5, "100%")}
              className="absolute top-0 left-0 h-[1px] bg-[#6A63AF] origin-left w-full"
            />
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={verticalLine(0.7, "100%")}
              className="absolute right-0 top-0 w-[1px] bg-[#6A63AF] origin-top h-full"
            />
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={horizontalLine(0.9, "100%")}
              className="absolute bottom-0 right-0 h-[1px] bg-[#6A63AF] origin-right w-full"
            />
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={verticalLine(1.1, "100%")}
              className="absolute left-0 bottom-0 w-[1px] bg-[#6A63AF] origin-bottom h-full"
            />

            {/* 🟣 MOVING DOT (orbits the box) */}
            <div className="orbiting-dot" />

            {/* Content */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp(1.5)}
              className="text-gray-300 space-y-2 text-xs md:text-sm text-left"
            >
              <p>
                <span className="font-semibold text-white">Programming:</span> JavaScript, TypeScript, Java
              </p>
              <p>
                <span className="font-semibold text-white">Frameworks:</span> React, Node, Express, Spring Boot, Next.js
              </p>
              <p>
                <span className="font-semibold text-white">Frontend:</span> HTML, CSS, SCSS, REST APIs
              </p>
              <p>
                <span className="font-semibold text-white">Databases:</span> MySQL, MongoDB
              </p>
              <p>
                <span className="font-semibold text-white">Tools:</span> Docker, Grafana, Postman, JMeter, Figma
              </p>
            </motion.div>

            {/* Icon row */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp(1.8)}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 items-center"
            >
                <Image
                  src="/java.png"
                  alt="Java"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
                />
                <Image
                  src="/next.png"
                  alt="Next.js"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
                />
                <Image
                  src="/aws.png"
                  alt="AWS"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
                />
                <Image
                  src="/grafana.png"
                  alt="Grafana"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
                />
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={32}
                  height={32}
                  className="w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition"
                />
            </motion.div>
          </div>

          {/* Line to Experience */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={verticalLine(1.7, 40)}
            className="w-[2px] bg-[#6A63AF]/80"
          />

          {/* Experience badge */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleIn(1.9)}
            className="border border-[#6A63AF]/60 backdrop-blur-sm bg-[#6A63AF]/10 px-4 py-1.5 rounded-full mb-2"
          >
            <span className="text-xs md:text-sm font-medium tracking-wide">💼 Experience</span>
          </motion.div>

          {/* Vertical line under Experience */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={verticalLine(2.1, 30)}
            className="w-[2px] bg-[#6A63AF]"
          />

          {/* Horizontal connector – hidden on mobile */}
          <div className="hidden md:block w-full">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={horizontalLine(2.3, "60%")}
              className="h-[2px] bg-[#6A63AF] rounded-full origin-left mx-auto"
              style={{ width: "60%" }}
            />
            <div className="flex justify-between w-[60%] mx-auto mt-1">
              {[0, 1, 2].map((_, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={verticalLine(2.5 + i * 0.1, 35)}
                  className="w-[1px] bg-[#6A63AF]"
                />
              ))}
            </div>
          </div>

          {/* Experience boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
            {[
              {
                role: "Intern Software and Web Developer",
                company: "Cyber Mas Solutions (Pvt) Ltd",
                position: "Full-Stack Developer",
                tech: ["React JS", "REST APIs", "HTML", "Tailwind CSS", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker", "J-Meter", "Grafana", "Ubuntu", "Jenkins"],
              },
              {
                role: "Intern Back-End Developer",
                company: "Sri Lanka Ports Authority",
                position: "Back-End Developer",
                tech: ["React JS", "REST APIs", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker"],
              },
              {
                role: "Associate Software Developer (Part Time)",
                company: "Verlixtech (Pvt) Ltd",
                position: "Full-Stack Developer",
                tech: ["React JS", "REST APIs", "MySQL", "Spring Boot", "Java", "Microservices", "JWT Auth", "Docker", "Next JS", "TypeScript", "SEO Optimize", "DNS Manage"],
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp(2.8 + i * 0.1)}
                className="border border-[#6A63AF] rounded-xl p-4 backdrop-blur-sm bg-[#545d65]/5 hover:border-[#545d65] transition-all duration-300"
              >
                <div className="text-sm font-semibold text-[#6A63AF] leading-tight">{exp.role}</div>
                <div className="text-xs text-gray-400 mt-2">{exp.company}</div>
                <div className="text-xs text-gray-300 mt-1">{exp.position}</div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-[2px] border border-[#545d65] rounded-md text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}