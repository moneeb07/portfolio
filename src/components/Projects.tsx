"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaRocket, FaCode, FaBrain, FaDatabase } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const projectIcons: Record<string, React.ReactNode> = {
  "Kisan Dost": <FaBrain className="text-green-400" />,
  "InterviewAI": <FaCode className="text-blue-400" />,
  "Reinforcement Learning Escape Room": <HiSparkles className="text-purple-400" />,
  "Class Management System": <FaDatabase className="text-orange-400" />,
};

const projectGradients: Record<string, string> = {
  "Kisan Dost": "from-green-500/20 to-emerald-500/20",
  "InterviewAI": "from-blue-500/20 to-cyan-500/20",
  "Reinforcement Learning Escape Room": "from-purple-500/20 to-pink-500/20",
  "Class Management System": "from-orange-500/20 to-amber-500/20",
};

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-white"
      >
        <FaRocket className="text-indigo-400" />
        Featured Projects
      </motion.h3>

      <div className="grid grid-cols-1 gap-6">
        {portfolioData.projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className={`clean-card relative overflow-hidden`}>
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${projectGradients[project.title] || "from-indigo-500/10 to-purple-500/10"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {projectIcons[project.title] || <FaCode className="text-indigo-400" />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-500">{project.subtitle}</p>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
