"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.init("YOUR_PUBLIC_KEY");

    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setPopupMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setPopupMessage("Failed to send message. Please try again.");
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="contact" className={styles.contactSection} ref={ref}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ""}`}>
          contact <span className={styles.gradientText}>me</span>
        </h2>

        <div className={styles.contentGrid}>
          <div className={`${styles.imageWrapper} ${inView ? styles.visible : ""}`}>
            <Image
              src="/images/contact5.gif"
              alt="Contact"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className={`${styles.contactForm} ${inView ? styles.visible : ""}`}
          >
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="name"
                required
                className={styles.formInput}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                required
                className={styles.formInput}
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="subject"
              required
              className={styles.formInput}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="message"
              required
              className={styles.formTextarea}
            />

            <button type="submit" className={styles.submitButton}>
              SEND MESSAGE
            </button>
          </form>
        </div>

        {showPopup && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <p className={styles.popupMessage}>{popupMessage}</p>
              <button
                onClick={() => setShowPopup(false)}
                className={styles.popupButton}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
