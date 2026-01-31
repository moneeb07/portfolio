"use client";

import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function BioCard() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="clean-card mb-8 overflow-hidden"
    >
      <div className="flex flex-row gap-6 md:gap-8 items-start">
        {/* Left: Image */}
        <div className="w-24 md:w-32 lg:w-40 flex-shrink-0">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-100 dark:border-zinc-700 shadow-sm">
             <Image
              src={portfolioData.personal.profileImage}
              alt={portfolioData.personal.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Based in {portfolioData.personal.location}
          </p>
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-6 md:py-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Hi, I&apos;m {portfolioData.personal.name.split(" ")[0]}.
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I am a <strong>Machine Learning Engineer</strong> and <strong>Full Stack Developer</strong> studying Computer Science at <strong>NUST</strong>.
              </p>
              <p>
                I specialize in building intelligent systems—from crop yield prediction models (<span className="text-green-600 dark:text-green-400">96.79% accuracy</span>) to complex full-stack interview platforms. I bridge the gap between algorithmic complexity and intuitive user experiences.
              </p>
              <p>
                Currently exploring distributed training for LLMs and scalable web architectures.
              </p>
            </div>
          </div>

          {/* Links/Status */}
          <div className="flex flex-col gap-3 py-4 border-t border-gray-100 dark:border-zinc-800">
             <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to remote collaborations
             </div>
             
             <div className="flex flex-wrap gap-4 mt-2">
                <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  <FaEnvelope /> {portfolioData.personal.email}
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  <FaGithub /> GitHub
                </a>
             </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
