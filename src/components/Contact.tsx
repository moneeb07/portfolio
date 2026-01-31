"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-white"
      >
        <FaPaperPlane className="text-pink-400" />
        Get in Touch
      </motion.h3>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="clean-card relative overflow-hidden"
      >
        {/* Decorative gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative z-10 text-center max-w-2xl mx-auto py-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300">
              <HiSparkles className="text-pink-400" />
              Let&apos;s collaborate!
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in working{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              together?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${portfolioData.personal.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 mb-10"
          >
            <FaEnvelope />
            Say Hello
            <span className="ml-1">👋</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <motion.a 
              href={portfolioData.personal.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a 
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a 
              href={`mailto:${portfolioData.personal.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
