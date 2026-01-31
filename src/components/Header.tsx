"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { FaMoon, FaSun, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 pt-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        {/* Logo/Name Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <FaRocket className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {portfolioData.personal.name}
            </h1>
            <p className="text-sm text-indigo-300 font-medium">
              {portfolioData.personal.role.split('&')[0].trim()}
            </p>
          </div>
        </motion.div>

        {/* Theme Toggle */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-indigo-300 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 self-start md:self-auto hover:shadow-lg hover:shadow-indigo-500/20"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
        </motion.button>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap items-center gap-2"
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <Link
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 border border-transparent hover:border-indigo-500/30"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        {/* Decorative line */}
        <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-transparent ml-4" />
      </motion.nav>
    </motion.header>
  );
}
