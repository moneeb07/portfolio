"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaCode, FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaDatabase, FaBrain, FaRobot } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiCplusplus, SiPytorch, SiTensorflow, SiMongodb, SiExpress } from "react-icons/si";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

const skillIcons: Record<string, React.ReactNode> = {
  "Python": <FaPython className="text-yellow-400" />,
  "C/C++": <SiCplusplus className="text-blue-400" />,
  "Java": <FaCode className="text-red-400" />,
  "JavaScript": <SiJavascript className="text-yellow-300" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "React": <FaReact className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "PyTorch": <SiPytorch className="text-orange-500" />,
  "TensorFlow": <SiTensorflow className="text-orange-400" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "Express": <SiExpress className="text-gray-400" />,
  "Git": <FaGitAlt className="text-orange-500" />,
  "Linux": <FaLinux className="text-yellow-400" />,
  "Docker": <FaDocker className="text-blue-400" />,
};

export default function Skills() {
  const { languages, frameworks, tools, concepts } = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-white"
      >
        <HiLightningBolt className="text-yellow-400" />
        Skills & Technologies
      </motion.h3>
      
      <div className="clean-card space-y-8">
        {/* Languages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FaCode />
            Languages
          </h4>
          <div className="flex flex-wrap gap-3">
            {languages.map((skill, i) => (
              <motion.span 
                key={skill} 
                variants={itemVariants}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl text-sm text-gray-200 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-default"
              >
                {skillIcons[skill] || <FaCode className="text-indigo-400" />}
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FaReact />
            Frameworks & Tools
          </h4>
          <div className="flex flex-wrap gap-3">
            {[...frameworks, ...tools].map((skill, i) => (
              <motion.span 
                key={skill}
                variants={itemVariants} 
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl text-sm text-gray-200 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default"
              >
                {skillIcons[skill] || <HiSparkles className="text-purple-400" />}
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Core Concepts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FaBrain />
            Core Concepts
          </h4>
          <div className="flex flex-wrap gap-3">
            {concepts.map((skill, i) => (
              <motion.span 
                key={skill}
                variants={itemVariants} 
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl text-sm text-gray-200 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 cursor-default"
              >
                <FaRobot className="text-pink-400" />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
