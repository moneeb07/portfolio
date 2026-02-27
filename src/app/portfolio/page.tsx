"use client";

import { useState } from "react";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import ProjectModal from "../../components/ProjectModal";
const { projects } = require("../../data/projects");

// Type definition for project
type Project = {
  title: string;
  category?: string;
  subtitle?: string;
  tech: string[];
  description: string;
  linkDemo?: string;
  linkGithub?: string;
  status: string;
  image?: string;
};

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay clearing project so the exit animation has time to play
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Projects grid */}
        <ul className="project-list">
          {projects.map((project: Project, index: number) => (
            <li className="project-item active" key={index}>
              <button onClick={() => openModal(project)} className="project-card-btn">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>{project.title}</span>
                    </div>
                  )}
                </figure>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.subtitle || ""}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </article>
  );
}
