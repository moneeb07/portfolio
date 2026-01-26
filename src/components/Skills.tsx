"use client";

import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { languages, frameworks, tools, concepts } = portfolioData.skills;

  return (
    <section id="skills" className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-zinc-800 pb-2">
        Skills
      </h3>
      
      <div className="clean-card space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Languages</h4>
          <div className="flex flex-wrap gap-2">
            {languages.map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md text-sm text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Frameworks & Tools</h4>
          <div className="flex flex-wrap gap-2">
            {[...frameworks, ...tools].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md text-sm text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Core Concepts</h4>
          <div className="flex flex-wrap gap-3">
            {concepts.map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md text-sm text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
