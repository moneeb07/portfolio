"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

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
    <header className="mb-12 pt-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        {/* Top Name/Role Section */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-gray-900 dark:text-gray-100 mb-1">
            {portfolioData.personal.name}
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
            {portfolioData.personal.role}
          </p>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors self-start md:self-auto"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
        </button>
      </div>

      {/* Navigation Pill Bar */}
      <nav className="flex flex-wrap items-center gap-1 md:gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
              "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100",
              "hover:bg-gray-100 dark:hover:bg-zinc-800"
            )}
          >
            {link.name}
          </Link>
        ))}
        {/* Fill rest of line with border */}
        <div className="hidden sm:block flex-1 h-px bg-gray-200 dark:bg-zinc-800 ml-4 translate-y-0.5" />
      </nav>
    </header>
  );
}
