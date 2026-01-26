"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 mt-12 border-t border-gray-100 dark:border-zinc-800 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Built with Next.js & Tailwind.</p>
    </footer>
  );
}
