"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-zinc-800 pb-2">
        Featured Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="clean-card flex flex-col h-full group"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
            </div>
            
            <p className="text-sm text-gray-500 font-medium mb-3">
              {project.subtitle}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50 dark:border-zinc-800 mt-auto">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded text-xs text-gray-600 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
