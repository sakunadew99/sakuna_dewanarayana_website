"use client";

import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Linkedin, Github, Download, Globe, User, Calendar } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalInfo = [
    { icon: Calendar, label: "Age", value: "25" },
    { icon: User, label: "Gender", value: "Male" },
    { icon: MapPin, label: "Address", value: "Matara, Southern Province" },
    { icon: Globe, label: "Language", value: "English" },
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+94 717923200",
      href: "tel:+94717923200"
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: "sakuna.dewanarayana@gmail.com",
      href: "mailto:sakuna.dewanarayana@gmail.com"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "sakuna-dewanarayana",
      href: "https://www.linkedin.com/in/sakuna-dewanarayana"
    },
    { 
      icon: Github, 
      label: "Github", 
      value: "sakunadew99",
      href: "https://github.com/sakunadew99"
    },
  ];

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.titleWrapper}>
          <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ""}`}>
            About <span className={styles.gradientText}>Me</span>
          </h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.contentGrid}>
          {/* Content Section */}
          <div className={`${styles.contentWrapper} ${inView ? styles.visible : ""}`}>
            <div className={styles.introSection}>
              <div className={styles.badgeContainer}>
                <span className={styles.badge}>Full Stack Developer</span>
                <span className={styles.badge}>Backend Developer</span>
              </div>
              <h3 className={styles.contentTitle}>
                Hi, I&apos;m <span className={styles.gradientText}>Sakuna Dewanarayana</span>
              </h3>

              <p className={styles.description}>
                I&apos;m a passionate full-stack developer who thrives on building seamless web
                applications. Whether it&apos;s designing user-friendly interfaces with React.js or
                crafting robust back-end logic with Node.js and Spring Boot, I enjoy tackling all
                aspects of the development journey. My toolbox also includes the classics: HTML, CSS,
                JavaScript, and Java.
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className={styles.infoSection}>
              <h4 className={styles.infoSectionTitle}>Personal Information</h4>
              <div className={styles.infoGrid}>
                {personalInfo.map((info, index) => (
                  <div key={index} className={styles.infoCard}>
                    <info.icon className={styles.infoIcon} />
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{info.label}</span>
                      <span className={styles.infoValue}>{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className={styles.infoSection}>
              <h4 className={styles.infoSectionTitle}>Get In Touch</h4>
              <div className={styles.infoGrid}>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? "_blank" : undefined}
                    rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={styles.infoCard}
                  >
                    <info.icon className={styles.infoIcon} />
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{info.label}</span>
                      <span className={styles.infoValue}>{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="https://drive.google.com/file/d/1lMvbS9ErbIGS7I1yOoL0aMdKfTtVXZlz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              <Download className={styles.buttonIcon} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}