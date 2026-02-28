"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoChevronDown,
  IoLogoLinkedin,
  IoLogoGithub
} from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";

import { personalData } from "@/data/personalData";


export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src={personalData.profileImage}
            alt={personalData.name}
            width={80}
            height={80}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={personalData.name}>
            {personalData.name}
          </h1>
          <p className="title">{personalData.role}</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
        >
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FaGraduationCap />
            </div>

            <div className="contact-info">
              <p className="contact-title">Education</p>

              {personalData.education.map((edu, index) => (
                <div key={index} className="education-block">
                  <p className="education-degree">{edu.degree}</p>

                  <a
                    href={edu.universityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-university"
                  >
                    {edu.university}
                  </a>

                  <span className="education-duration">{edu.duration}</span>
                </div>
              ))}
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${personalData.email}`} className="contact-link">
                {personalData.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={`tel:${personalData.phone}`} className="contact-link">
                {personalData.phone}
              </a>
            </div>
          </li>


          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{personalData.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href={personalData.github}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub />
            </a>
          </li>

          <li className="social-item">
            <a
              href={personalData.linkedin}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin />
            </a>
          </li>

        </ul>
      </div>
    </aside>
  );
}
