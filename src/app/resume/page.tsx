"use client";

import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";
import { personalData } from "@/data/personalData";
import { experiences, skills } from "@/data/resumeData";

export default function ResumePage() {
  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBriefcaseOutline />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experiences.map((exp, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.duration}</span>
              <p className="timeline-text">{exp.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {personalData.education.map((edu, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{edu.university}</h4>
              <span>{edu.duration}</span>
              <p className="timeline-text">{edu.degree}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li className="skills-item" key={index}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>

              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
