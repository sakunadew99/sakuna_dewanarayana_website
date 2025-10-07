"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import emailjs from "emailjs-com";
import { Send, User, Mail as MailIcon, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10 - 5,
        y: (e.clientY / window.innerHeight) * 10 - 5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setPopupMessage("Failed to send message. Please try again.");
      setIsSuccess(false);
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section id="contact" className={styles.contactSection} ref={ref}>
      {/* Animated Background Elements */}
      <div className={styles.bgGradient}></div>
      <div 
        className={styles.floatingOrb1}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      ></div>
      <div 
        className={styles.floatingOrb2}
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      ></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            Let&apos;s Connect
          </div>
          <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ""}`}>
            Contact <span className={styles.gradientText}>Me</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Have a project in mind? Let&apos;s work together
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={`${styles.imageWrapper} ${inView ? styles.visible : ""}`}>
            <div className={styles.imageGlow}></div>
            <div className={styles.imageContainer}>
              <Image
                src="/images/contact5.gif"
                alt="Contact"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.contactImage}
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`${styles.contactForm} ${inView ? styles.visible : ""}`}
          >
            <div className={styles.formRow}>
              <div className={styles.inputWrapper}>
                <User className={styles.inputIcon} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={styles.formInput}
                />
              </div>
              <div className={styles.inputWrapper}>
                <MailIcon className={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <MessageSquare className={styles.inputIcon} />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.inputWrapper}>
              <MessageSquare className={styles.inputIcon} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message"
                required
                className={styles.formTextarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <span>Send Message</span>
              <Send className={styles.buttonIcon} />
            </button>
          </form>
        </div>

        {showPopup && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <div className={styles.popupIconWrapper}>
                {isSuccess ? (
                  <CheckCircle className={styles.popupIconSuccess} />
                ) : (
                  <XCircle className={styles.popupIconError} />
                )}
              </div>
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