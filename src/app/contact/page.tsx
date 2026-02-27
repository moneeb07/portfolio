"use client";

import { useState, FormEvent } from "react";
import { IoPaperPlane } from "react-icons/io5";

export default function ContactPage() {
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const form = e.target.closest("form");
    if (form) {
      setFormValid(form.checkValidity());
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Currently this feature is not working use email-address to contact!");
  };

  return (
    <article className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26575.045767721436!2d72.96032595635984!3d33.63433462352923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNational%20University%20of%20Sciences%20%26%20Technology!5e0!3m2!1sen!2s!4v1772190442036!5m2!1sen!2s"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            onChange={handleInputChange}
          ></textarea>

          <button className="form-btn" type="submit" disabled={!formValid}>
            <IoPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
