"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaHeart, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 mt-16 border-t border-white/10 relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gradient-to-t from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl" />
      
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-500 mb-4">
          <span>Built with</span>
          <FaHeart className="text-pink-500 animate-pulse" />
          <span>using</span>
          <SiNextdotjs className="text-white" />
          <span>&</span>
          <SiTailwindcss className="text-cyan-400" />
        </div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
