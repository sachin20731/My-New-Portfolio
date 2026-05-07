// export default function Projects() {
//     return (
//         <section id="projects" className="relative z-10 w-full min-h-screen py-24 px-8 sm:px-16 lg:px-24 flex flex-col justify-center bg-[#1a191d]">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Featured <span className="text-zinc-600">Projects</span></h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {[1, 2, 3].map((i) => (
//                     <div key={i} className="aspect-video bg-[#25242b] rounded-xl border border-white/5 hover:border-white/20 transition-all flex items-center justify-center cursor-pointer group hover:scale-105 duration-500">
//                         <span className="text-zinc-500 group-hover:text-white">Project {i} Screenshot</span>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// import { ExternalLink } from 'lucide-react';

// export default function Projects() {
//   const projects = [
//     {
//       id: 1,
//       title: "Nebula AI Dashboard",
//       description: "Real-time analytics dashboard for AI model performance metrics, featuring interactive charts and model comparison tools.",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
//       tags: ["React", "D3.js", "TensorFlow.js", "Tailwind"],
//       github: "https://github.com/example/nebula-ai",
//       live: "https://nebula-ai-demo.vercel.app",
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Artisan Market",
//       description: "E-commerce platform connecting local artisans with global buyers, featuring secure payments and inventory management.",
//       image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format",
//       tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
//       github: "https://github.com/example/artisan-market",
//       live: "https://artisan-market-demo.vercel.app",
//       featured: false
//     },
//     {
//       id: 3,
//       title: "FlowState Task Manager",
//       description: "Minimalist productivity app with Pomodoro timer, task prioritization, and cross-device synchronization.",
//       image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format",
//       tags: ["Vue", "Vuex", "Firebase", "Tailwind"],
//       github: "https://github.com/example/flowstate",
//       live: "https://flowstate-app.vercel.app",
//       featured: false
//     },
//     {
//       id: 4,
//       title: "WeatherVane",
//       description: "Beautiful weather application with animated backgrounds, 7-day forecasts, and interactive radar maps.",
//       image: "https://images.unsplash.com/photo-1592210454359-9046e3d163a4?w=800&auto=format",
//       tags: ["React", "OpenWeather API", "Framer Motion", "Chart.js"],
//       github: "https://github.com/example/weathervane",
//       live: "https://weathervane-demo.vercel.app",
//       featured: false
//     },
//     {
//       id: 5,
//       title: "CodeCollab",
//       description: "Real-time collaborative code editor with syntax highlighting, video chat, and version control integration.",
//       image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18a5?w=800&auto=format",
//       tags: ["WebSocket", "Monaco Editor", "Express", "MongoDB"],
//       github: "https://github.com/example/codecollab",
//       live: "https://codecollab-demo.vercel.app",
//       featured: false
//     },
//     {
//       id: 6,
//       title: "MediTrack",
//       description: "Healthcare appointment scheduling system with patient records, prescription management, and telemedicine integration.",
//       image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
//       tags: ["React Native", "Node.js", "PostgreSQL", "Twilio"],
//       github: "https://github.com/example/meditrack",
//       live: "https://meditrack-demo.vercel.app",
//       featured: false
//     }
//   ];

//   return (
//     <section id="projects" className="relative z-10 w-full min-h-screen py-24 px-8 sm:px-16 lg:px-24 bg-[#1a191d]">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#6A63AF]  mb-4 tracking-tight">
//           Featured <span className="text-zinc-600">Projects</span>
//         </h2>
//         <p className="text-zinc-400 mb-12 max-w-2xl">
//           Here are some of my recent works. Each project represents unique challenges and creative solutions.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-[#25242b] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Project Image */}
//               <div className="relative aspect-video overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {project.featured && (
//                   <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
//                     Featured
//                   </div>
//                 )}
//               </div>
              
//               {/* Project Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
//                   {project.description}
//                 </p>
                
//                 {/* Tech Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-white/5"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
                
//                 {/* Action Buttons */}
//                 <div className="flex gap-3 pt-2 border-t border-white/5">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm group/link"
//                   >
//                     <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
//                     <span>Code</span>
//                     <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
//                   </a>
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm group/link"
//                   >
//                     <ExternalLink size={14} />
//                     <span>Live Demo</span>
//                     <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MPC Promo system",
      description: "MPC Promo System is a digital promotional campaign management platform that generates unique promo codes and printable promo cards for customers. Users can submit these promo codes to the company for validation, and after successful verification, rewards are provided through mobile reloads or direct bank transfers based on the customer’s preference. The system also includes secure code validation, campaign tracking, user management, and real-time reporting features to ensure an efficient and reliable promotional process.",
      image: "/MPC.png",
      tags: ["React", "MongoDb", "express", "Tailwind"],
      github: "https://github.com/example/nebula-ai",
      live: "https://nebula-ai-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Aqua Engineering & Constructions (Pvt)Ltd Official website",
      description: "E-commerce platform connecting local artisans with global buyers, featuring secure payments and inventory management.",
      image: "/aqua.png",
      tags: ["Wordpress","PHP","Elementor","Custom CSS","JS"],
      github: "https://github.com/example/artisan-market",
      live: "https://www.aquaengineering.lk",
      featured: false
    },
    {
      id: 3,
      title: "FlowState Task Manager",
      description: "Minimalist productivity app with Pomodoro timer, task prioritization, and cross-device synchronization.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format",
      tags: ["Vue", "Vuex", "Firebase", "Tailwind"],
      github: "https://github.com/example/flowstate",
      live: "https://flowstate-app.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "WeatherVane",
      description: "Beautiful weather application with animated backgrounds, 7-day forecasts, and interactive radar maps.",
      image: "https://images.unsplash.com/photo-1592210454359-9046e3d163a4?w=800&auto=format",
      tags: ["React", "OpenWeather API", "Framer Motion", "Chart.js"],
      github: "https://github.com/example/weathervane",
      live: "https://weathervane-demo.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "CodeCollab",
      description: "Real-time collaborative code editor with syntax highlighting, video chat, and version control integration.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18a5?w=800&auto=format",
      tags: ["WebSocket", "Monaco Editor", "Express", "MongoDB"],
      github: "https://github.com/example/codecollab",
      live: "https://codecollab-demo.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Autism Diaganosis system",
      description: " Autism Diagnosis Prediction System is designed to assist in the early identification of autism spectrum disorder (ASD) in children below the age of three. The system analyzes behavioral patterns and developmental indicators to provide a predictive assessment, enabling timely intervention and support.",
      image: "/Autism.webp",
      tags: ["React Native", "Node.js", "MySql", "Java Script","Pytorch","Express","Tensorflow"],
      github: "https://github.com/example/meditrack",
      live: "https://meditrack-demo.vercel.app",
      featured: false
    }
  ];

  // Partner companies data – replace with your actual logos and names
  const partners = [
    { name: "Madhushika Paints and Chemical(Pvt) Ltd", logo: "/MPC-logo.png", url: "https://cybermas.com" },
    { name: "Aquaengineering & Construction (Pvt)Ltd", logo: "/aqua-logo.png", url: "https://verlixtech.com" },
    
  ];

  return (
    <section id="projects" className="relative z-10 w-full min-h-screen py-24 px-8 sm:px-16 lg:px-24 bg-[#1a191d]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6A63AF] mb-4 tracking-tight">
          Featured <span className="text-zinc-600">Projects</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Here are some of my recent works. Each project represents unique challenges and creative solutions.
        </p>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#25242b] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm group/link"
                  >
                    <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    <span>Code</span>
                    <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm group/link"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                    <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========== PARTNER COMPANIES SECTION ========== */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-2">
            Trusted By <span className="text-[#6A63AF]">Partner Companies</span>
          </h3>
          <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
            I've had the privilege of collaborating with these great organizations.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {partners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#25242b] border border-white/10 group-hover:border-[#6A63AF]/50 flex items-center justify-center p-4 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/20">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span className="text-zinc-400 text-sm font-medium group-hover:text-[#6A63AF] transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}