"use client";

import { useState } from "react";
import Image from "next/image";
import { IoEyeOutline, IoChevronDown } from "react-icons/io5";
const { projects } = require("../../data/projects");


function getCategories(projects: Project[]) {
  const uniqueCategories = [
    "All",
    ...new Set(projects.map(project => project.category))
  ];
  
  return uniqueCategories;
}

const categories = getCategories(projects);


// Type definition for project
type Project = {
  title: string;
  category: string;
  subtitle?: string;
  tech: string[];
  description: string;
  linkDemo?: string;
  linkGithub?: string;
  status: string;
  image?: string;
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects = projects.filter(
    (project: Project) =>
      activeFilter === "All" ||
      project.category.toLowerCase() === activeFilter.toLowerCase()
  );

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    setSelectOpen(false);
  };

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        
        {/* Desktop filter */}
        {/* <ul className="filter-list">
          {categories.map((category) => (
            <li className="filter-item" key={category}>
              <button
                className={activeFilter === category ? "active" : ""}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul> */}

        {/* Mobile filter select */}
        {/* <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? "active" : ""}`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">{activeFilter === "All" ? "Select category" : activeFilter}</div>
            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          <ul className="select-list">
            {categories.map((category) => (
              <li className="select-item" key={category}>
                <button onClick={() => handleFilterClick(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div> */}


        {/* Projects grid */} 
        <ul className="project-list">
          {filteredProjects.map((project: Project, index: number) => (
            <li className="project-item active" key={index}>
              <a href={project.linkDemo || "#"}>
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
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
