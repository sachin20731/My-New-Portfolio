// "use client";

// export default function ResumePage() {
//   return (
//     <div className="min-h-screen bg-[#1a191d] text-white px-6 md:px-16 py-10">
      
//       <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">

//         {/* ================= LEFT SIDE ================= */}
//         <div className="col-span-12 md:col-span-6 space-y-8">

//           <h1 className="text-5xl font-bold text-purple-400">
//             Resume
//           </h1>

//           <div className="text-gray-300 text-sm leading-relaxed space-y-4 max-w-lg">
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
//           </div>

//           {/* Service Letters */}
//           <div className="mt-10">
//             <h2 className="text-2xl text-purple-400 mb-6">
//               Service Letters
//             </h2>

//             <div className="flex gap-10">
//               <div className="w-48 h-48 border border-purple-500"></div>
//               <div className="w-48 h-48 border border-purple-500"></div>
//             </div>
//           </div>

//         </div>

//         {/* ================= RIGHT SIDE ================= */}

//         <div className="col-span-12 md:col-span-6 flex justify-end items-start">

//   {/* FULL HEIGHT INSIDE PAGE */}
//   <div className="w-full max-w-md h-screen border border-purple-500 rounded-none overflow-hidden">

//     <div className="h-full overflow-y-auto">

//       <iframe
//         src="/Dhanushka Pradeep Munasinghe CV.pdf"
//         className="w-full h-full"
//       />

//     </div>

//   </div>

// </div>
        


        

        

//       </div>
//     </div>
//   );
// }

// "use client";

// export default function ResumePage() {
//   return (
//     <div className="min-h-screen bg-[#1f1e24] text-white relative overflow-hidden">

//       {/* 🔥 FLOATING CODE TAGS */}
//       <div className="pointer-events-none absolute inset-0 text-purple-500/30 text-sm font-mono">

//         <span className="absolute top-10 left-6 opacity-80">
//           &lt;html&gt;
//         </span>

//         <span className="absolute top-16 left-8  opacity-80">
//           &lt;body&gt;
//         </span>

//         <span className="absolute top-[200px] left-4 text-xs opacity-40">
//           &lt;div&gt;
//         </span>

//         <span className="absolute top-[260px] left-6 text-xs opacity-30">
//           &lt;p&gt;
//         </span>

//         <span className="absolute bottom-24 left-6 text-xs opacity-30">
//           &lt;/body&gt;
//         </span>

//         <span className="absolute bottom-16 left-4 text-xs opacity-40">
//           &lt;/html&gt;
//         </span>
//       </div>

//       {/* ================= LEFT CONTENT ================= */}
//       <div className="px-6 md:px-16 pt-30 pb-10 pr-[50%] relative z-10">

//         <h1 className="text-5xl font-bold text-purple-400 mb-6">
//           Resume
//         </h1>

//         <div className="text-gray-300 text-sm leading-relaxed space-y-4 max-w-lg">
//           <p>
//             I am a motivated and detail-oriented individual with 1 year of
//             experience in the technology industry, working on real-world
//             software solutions and continuously improving my technical skills.
//           </p>

//           <p>
//             I have hands-on experience in developing web-based applications
//             using technologies such as React, Spring Boot, and MySQL.
//           </p>

//           <p>
//             I am passionate about learning new technologies, solving problems,
//             and creating efficient systems.
//           </p>
//         </div>

//         {/* Service Letters */}
//         <div className="mt-10">
//           <h2 className="text-2xl text-purple-400 mb-6">
//             Service Letters
//           </h2>

//           <div className="flex gap-10">
//             <div className="w-48 h-48 border border-purple-500"></div>
//             <div className="w-48 h-48 border border-purple-500"></div>
//           </div>
//         </div>

//       </div>

//       {/* ================= RIGHT CV PANEL ================= */}
//       <div className="absolute top-0 right-0 h-screen w-[45%] border-l border-purple-500/40 bg-[#1a191d] shadow-[-10px_0_30px_rgba(168,85,247,0.1)]">

//         <div className="h-full overflow-y-auto scroll-smooth">

//           <iframe
//             src="/Dhanushka Pradeep Munasinghe CV.pdf"
//             className="w-full h-full"
//           />

//         </div>

//       </div>

//     </div>
//   );
// }


"use client";

import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#1f1e24] text-white relative overflow-hidden">

      {/* 🔥 FLOATING CODE TAGS + TECH ICONS (same as BackgroundElements) */}
      <div className="pointer-events-none absolute inset-0 text-[#57528C] text-sm opacity-90 italic font-mono select-none">
        
        {/* Code tags */}
        <span className="absolute top-10 left-10 animate-float">&lt;html&gt;</span>
        <span className="absolute top-20 left-16 animate-float-delayed">&lt;body&gt;</span>
        <span className="absolute top-48 left-20 animate-float">&lt;h1&gt;</span>
        <span className="absolute top-[35%] right-1/3 animate-float-slow">&lt;/button&gt;</span>
        <span className="absolute top-[50%] right-1/4 animate-float">&lt;/button&gt;</span>
        <span className="absolute top-[60%] right-[30%] text-6xl animate-float-delayed font-black opacity-30">N</span>
        <span className="absolute top-[70%] left-24 animate-float">&lt;p&gt;</span>
        <span className="absolute bottom-40 left-24 animate-float-delayed">&lt;/p&gt;</span>
        <span className="absolute bottom-16 left-16 animate-float">&lt;/body&gt;</span>
        <span className="absolute bottom-8 left-10 animate-float-slow">&lt;/html&gt;</span>

        {/* Tech Stack Icons */}
        <div className="absolute top-32 left-1/3 animate-float opacity-30">
          <Image src="/docker.png" alt="Docker" width={48} height={48} />
        </div>
        <div className="absolute bottom-40 right-1/2 animate-float-delayed opacity-30">
          <Image src="/java.png" alt="Java" width={48} height={48} />
        </div>
        <div className="absolute bottom-20 right-[40%] animate-float opacity-30">
          <Image src="/aws.png" alt="AWS" width={48} height={48} />
        </div>
        <div className="absolute top-48 left-[45%] animate-float-slow opacity-30">
          <Image src="/github.png" alt="Github" width={48} height={48} />
        </div>
      </div>

      {/* ================= LEFT CONTENT ================= */}
      <div className="px-6 md:px-16 pt-30 pb-10 pr-[50%] relative z-10">

        <h1 className="text-5xl font-bold text-[#6A63AF]  mb-6">
          Resume
        </h1>

        <div className="text-gray-300 text-sm leading-relaxed space-y-4 max-w-lg">
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
        </div>

        {/* Service Letters */}
        <div className="mt-10">
          <h2 className="text-2xl text-[#6A63AF]  mb-6">
            Service Letters
          </h2>

          <div className="flex gap-10">
            <div className="w-48 h-48 border border-[#6A63AF]"></div>
            <div className="w-48 h-48 border border-[#6A63AF]"></div>
          </div>
        </div>

      </div>

      {/* ================= RIGHT CV PANEL ================= */}
      <div className="absolute top-0 right-0 h-screen w-[45%] border-l border-[#6A63AF]/40 bg-[#1a191d] shadow-[-10px_0_30px_rgba(168,85,247,0.1)]">

        <div className="h-full overflow-y-auto scroll-smooth">

          <iframe
            src="/Dhanushka Pradeep Munasinghe CV.pdf"
            className="w-full h-full"
          />

        </div>

      </div>

    </div>
  );
}