"use client";

import {
  IoBookOutline,
  IoBriefcaseOutline,
  IoFlaskOutline,
  IoTrophyOutline,
  IoPlayCircleOutline,
} from "react-icons/io5";
import { personalData } from "@/data/personalData";
import {
  awards,
  experiences,
  researchExperience,
  skills,
} from "@/data/resumeData";

type TimelineEntry = {
  title: string;
  organization: string;
  organizationUrl?: string;
  project?: string;
  projectUrl?: string;
  duration: string;
  location?: string;
  advisors?: string;
  linkVideo?: string;
  bullets: string[];
};

function TimelineEntryItem({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{entry.title}</h4>

      <p className="timeline-item-org">
        {entry.organizationUrl ? (
          <a
            href={entry.organizationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-link"
          >
            {entry.organization}
          </a>
        ) : (
          entry.organization
        )}
        {entry.project && (
          <>
            {" · "}
            {entry.projectUrl ? (
              <a
                href={entry.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
              >
                {entry.project}
              </a>
            ) : (
              entry.project
            )}
          </>
        )}
      </p>

      <span>
        {entry.duration}
        {entry.location ? ` — ${entry.location}` : ""}
      </span>

      {entry.advisors && (
        <p className="timeline-item-meta">Advisors: {entry.advisors}</p>
      )}

      <ul className="timeline-bullets">
        {entry.bullets.map((bullet, i) => (
          <li className="timeline-bullet" key={i}>
            {bullet}
          </li>
        ))}
      </ul>

      {entry.linkVideo && (
        <a
          href={entry.linkVideo}
          target="_blank"
          rel="noopener noreferrer"
          className="timeline-demo-link"
        >
          <IoPlayCircleOutline />
          <span>Video Demo</span>
        </a>
      )}
    </li>
  );
}

export default function ResumePage() {
  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Research Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoFlaskOutline />
          </div>
          <h3 className="h3">Research Experience</h3>
        </div>

        <ol className="timeline-list">
          {researchExperience.map((entry, index) => (
            <TimelineEntryItem entry={entry} key={index} />
          ))}
        </ol>
      </section>

      {/* Industry Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBriefcaseOutline />
          </div>
          <h3 className="h3">Industry Experience</h3>
        </div>

        <ol className="timeline-list">
          {experiences.map((entry, index) => (
            <TimelineEntryItem entry={entry} key={index} />
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

      {/* Awards & Achievements */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoTrophyOutline />
          </div>
          <h3 className="h3">Awards &amp; Achievements</h3>
        </div>

        <ol className="timeline-list">
          {awards.map((award, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">
                {award.link ? (
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-link"
                  >
                    {award.title}
                  </a>
                ) : (
                  award.title
                )}
              </h4>
              <p className="timeline-text">{award.description}</p>
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
