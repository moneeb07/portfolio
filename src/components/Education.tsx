"use client";

import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-zinc-800 pb-2">
        Education
      </h3>

      <div className="clean-card">
        {portfolioData.education.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.institution}</h4>
              <span className="text-sm text-gray-500">{edu.duration}</span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{edu.degree}</p>
            
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-gray-500 mb-2">Selected Coursework</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {edu.coursework.join(", ")}
              </p>
            </div>
          </div>
        ))}
        
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zinc-800">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Awards</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li><strong>Merit Position 133</strong> (Top 0.2% in NET 2023)</li>
                <li><strong>100% Merit Scholarship</strong> (FSc Pre-Engineering)</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
