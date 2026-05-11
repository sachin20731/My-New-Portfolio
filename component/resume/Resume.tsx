

"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// Animation Variants
const fadeInUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const scaleIn = (delay: number): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  },
});

export default function ResumePage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#1f1e24] text-white relative overflow-hidden"
    >
      {/* Floating Background */}
      <div className="pointer-events-none absolute inset-0 text-[#57528C] text-sm opacity-90 italic font-mono select-none">
        <span className="absolute top-10 left-10 animate-float">
          &lt;html&gt;
        </span>

        <span className="absolute top-20 left-16 animate-float-delayed">
          &lt;body&gt;
        </span>

        <span className="absolute top-48 left-20 animate-float">
          &lt;h1&gt;
        </span>

        <span className="absolute top-[35%] right-1/3 animate-float-slow">
          &lt;/button&gt;
        </span>

        <span className="absolute top-[50%] right-1/4 animate-float">
          &lt;/button&gt;
        </span>

        <span className="absolute top-[60%] right-[30%] text-6xl animate-float-delayed font-black opacity-30">
          N
        </span>

        <span className="absolute top-[70%] left-24 animate-float">
          &lt;p&gt;
        </span>

        <span className="absolute bottom-40 left-24 animate-float-delayed">
          &lt;/p&gt;
        </span>

        <span className="absolute bottom-16 left-16 animate-float">
          &lt;/body&gt;
        </span>

        <span className="absolute bottom-8 left-10 animate-float-slow">
          &lt;/html&gt;
        </span>

        {/* Floating Tech Icons */}
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

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-[50%] px-6 md:px-12 pt-20 pb-10 flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp(0)}
            className="text-5xl md:text-6xl font-bold text-[#6A63AF] mb-8"
          >
            Resume
          </motion.h1>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp(0.1)}
            className="text-gray-300 text-base leading-relaxed space-y-5 max-w-xl"
          >
            <p>
              I am a motivated and detail-oriented Software Engineer with
              experience in developing modern web applications and backend
              systems.
            </p>

            <p>
              Skilled in React, Next.js, Spring Boot, MySQL, Docker, and AWS
              with a strong passion for learning modern technologies and
              building scalable solutions.
            </p>

            <p>
              I enjoy solving real-world problems and creating efficient,
              user-friendly digital experiences.
            </p>
          </motion.div>

          {/* DOWNLOAD BUTTON */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp(0.3)}
            className="mt-10"
          >
            <a
              href="/Dhanushka Pradeep Munasinghe Update CV.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#6A63AF] hover:bg-[#7b73d1] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#6A63AF]/20"
            >
              <span className="text-lg">📄</span>

              <span className="font-medium">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[50%] bg-[#1a191d] md:border-l md:border-[#6A63AF]/30 md:h-screen md:overflow-y-auto">
          
          <div className="flex flex-col items-center gap-8 p-4 md:p-8">
            
            {/* PAGE 1 */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={scaleIn(0.4)}
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-[#6A63AF]/30 shadow-2xl"
            >
              <Image
                src="/cv1.png"
                alt="CV Page 1"
                width={1200}
                height={1700}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>

            {/* PAGE 2 - DESKTOP ONLY */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={scaleIn(0.5)}
              className="hidden md:block relative w-full max-w-3xl rounded-2xl overflow-hidden border border-[#6A63AF]/30 shadow-2xl"
            >
              <Image
                src="/cv2.png"
                alt="CV Page 2"
                width={1200}
                height={1700}
                className="w-full h-auto object-contain"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}