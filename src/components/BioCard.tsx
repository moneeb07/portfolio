"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCode, FaBrain } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function BioCard() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mb-12 overflow-hidden"
    >
      {/* Main Card */}
      <div className="clean-card relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/15 to-indigo-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-green-300">Available for opportunities</span>
            <HiSparkles className="text-green-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {portfolioData.personal.name.split(" ")[0]}
            </span>
            <span className="text-white">.</span>
          </motion.h1>

          {/* Role Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-medium">
              <FaBrain className="text-indigo-400" />
              Machine Learning Engineer
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 font-medium">
              <FaCode className="text-purple-400" />
              Full Stack Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl mb-8"
          >
            <p>
              I specialize in building <span className="text-indigo-400 font-semibold">intelligent systems</span>—from crop yield prediction models achieving <span className="text-green-400 font-semibold">96.79% accuracy</span> to complex full-stack interview platforms.
            </p>
            <p className="text-gray-400">
              Currently studying Computer Science at <span className="text-white font-medium">NUST</span> and exploring distributed training for LLMs.
            </p>
          </motion.div>

          {/* Location & Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <FaMapMarkerAlt className="text-pink-400" />
              <span>{portfolioData.personal.location}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <FaEnvelope size={18} />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
