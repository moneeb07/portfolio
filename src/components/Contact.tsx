"use client";

import { portfolioData } from "@/data/portfolio";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-12">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 border-b border-gray-200 dark:border-zinc-800 pb-2">
        Get in Touch
      </h3>

      <div className="clean-card bg-gradient-to-br from-white to-gray-50 dark:from-zinc-800 dark:to-zinc-900 border-none">
        <div className="text-center max-w-2xl mx-auto py-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in collaboration?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition-opacity mb-8"
          >
            <FaEnvelope className="mr-2" />
            Say Hello
          </a>

          <div className="flex justify-center gap-6 text-gray-500">
            <a href={portfolioData.personal.linkedin} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href={portfolioData.personal.github} className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
