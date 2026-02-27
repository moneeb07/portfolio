"use client";

import Image from "next/image";
import { IoCloseOutline, IoOpenOutline, IoLogoGithub } from "react-icons/io5";

interface Project {
  title: string;
  category?: string;
  subtitle?: string;
  tech: string[];
  description: string;
  linkDemo?: string;
  linkGithub?: string;
  status: string;
  image?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  return (
    <div className={`modal-container ${isOpen ? "active" : ""}`}>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>

      <section className="project-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <IoCloseOutline />
        </button>

        {project && (
          <>
            {/* Project Image */}
            {project.image && (
              <div className="project-modal-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={350}
                  className="project-modal-img"
                />
              </div>
            )}

            <div className="project-modal-content">
              {/* Title & Status */}
              <div className="project-modal-header">
                <h3 className="h3 modal-title">{project.title}</h3>
                <span
                  className={`project-modal-status ${
                    project.status === "Completed" ? "completed" : "in-progress"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {project.subtitle && (
                <p className="project-modal-subtitle">{project.subtitle}</p>
              )}

              {/* Description */}
              <p className="project-modal-description">{project.description}</p>

              {/* Tech Stack */}
              <div className="project-modal-tech">
                <h4 className="h4 project-modal-tech-title">Technologies</h4>
                <ul className="project-modal-tech-list">
                  {project.tech.map((t, i) => (
                    <li key={i} className="project-modal-tech-item">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="project-modal-links">
                {project.linkDemo && (
                  <a
                    href={project.linkDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-link"
                  >
                    <IoOpenOutline />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.linkGithub && (
                  <a
                    href={project.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-link"
                  >
                    <IoLogoGithub />
                    <span>GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
