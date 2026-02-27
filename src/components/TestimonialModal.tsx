"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  date: string;
}

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TestimonialModal({
  testimonial,
  isOpen,
  onClose,
}: TestimonialModalProps) {
  if (!testimonial) return null;

  return (
    <div className={`modal-container ${isOpen ? "active" : ""}`}>
      <div className={`overlay ${isOpen ? "active" : ""}`} onClick={onClose}></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <IoCloseOutline />
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={80}
              height={80}
            />
          </figure>

          <Image
            src="/images/icon-quote.svg"
            alt="quote icon"
            width={35}
            height={35}
          />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title">{testimonial.name}</h4>
          <time dateTime={testimonial.date}>{testimonial.date}</time>
          <div>
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
