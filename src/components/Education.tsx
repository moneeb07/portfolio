"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaMedal, FaBookOpen } from "react-icons/fa";
import { HiAcademicCap, HiSparkles } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-white"
      >
        <HiAcademicCap className="text-purple-400" />
        Education
      </motion.h3>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="clean-card relative overflow-hidden"
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          {portfolioData.education.map((edu, index) => (
            <div key={index}>
              {/* University Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30">
                    <FaGraduationCap className="text-2xl text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.institution}</h4>
                    <p className="text-indigo-400 font-medium">{edu.degree}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400">
                  <HiSparkles className="text-yellow-400" />
                  {edu.duration}
                </span>
              </div>
              
              {/* Coursework */}
              <div className="mb-8">
                <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FaBookOpen className="text-indigo-400" />
                  Selected Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span 
                      key={course} 
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg text-sm text-gray-300 hover:border-indigo-500/40 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Awards Section */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FaAward />
              Awards & Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20"
              >
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <FaMedal className="text-xl text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Merit Position 133</p>
                  <p className="text-sm text-gray-400">Top 0.2% in NET 2023</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
              >
                <div className="p-2 rounded-lg bg-green-500/20">
                  <FaAward className="text-xl text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">100% Merit Scholarship</p>
                  <p className="text-sm text-gray-400">FSc Pre-Engineering</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
