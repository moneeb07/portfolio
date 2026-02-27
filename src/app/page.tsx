"use client";

import { useState } from "react";
import Image from "next/image";
import TestimonialModal from "@/components/TestimonialModal";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import AboutMe from "@/data/AboutMe";




export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonials)[0] | null
  >(null);

  const openModal = (testimonial: (typeof testimonials)[0]) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <AboutMe />
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((item, index) => (
            <li className="testimonials-item" key={index}>
              <div
                className="content-card"
                onClick={() => openModal(item)}
              >
                <figure className="testimonials-avatar-box">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">{item.name}</h4>

                <div className="testimonials-text">
                  <p>{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Clients */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li className="clients-item" key={index}>
              <a href="#">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={150}
                  height={50}
                />
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}
