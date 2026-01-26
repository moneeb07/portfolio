"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaGraduationCap, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image with decorations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
                  <Image
                    src={portfolioData.personal.profileImage}
                    alt={portfolioData.personal.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl"
                >
                  <div className="text-3xl font-bold text-white">4+</div>
                  <div className="text-sm text-gray-400">Projects Built</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a passionate <span className="text-white font-semibold">Computer Science student at NUST</span> with a deep focus on Machine Learning, Artificial Intelligence, and Full Stack Development.
                </p>
                <p>
                  I specialize in building <span className="text-blue-400 font-medium">intelligent applications</span> that bridge the gap between complex algorithms and intuitive user experiences—from crop yield prediction systems achieving <span className="text-green-400 font-medium">96.79% accuracy</span> to full-stack interview platforms.
                </p>
                <p className="text-gray-400">
                  My journey is driven by curiosity and a commitment to writing clean, efficient code that makes a real-world impact.
                </p>
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                  <FaMapMarkerAlt className="text-blue-400 mb-2" size={20} />
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-medium">Islamabad, PK</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                  <FaGraduationCap className="text-purple-400 mb-2" size={20} />
                  <div className="text-sm text-gray-400">Education</div>
                  <div className="text-white font-medium">NUST SEECS</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                  <FaBrain className="text-pink-400 mb-2" size={20} />
                  <div className="text-sm text-gray-400">Focus</div>
                  <div className="text-white font-medium">ML & Web Dev</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
