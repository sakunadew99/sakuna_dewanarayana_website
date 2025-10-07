"use client";

import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/sakunadew99",
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/sakuna-dewanarayana",
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:sakuna.dewanarayana@gmail.com",
      label: "Email" 
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Links */}
        <div className={styles.socialSection}>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={styles.socialLink}
                aria-label={social.label}
              >
                <social.icon className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Footer Text */}
        <p className={styles.footerText}>
          Made with <Heart className={styles.heartIcon} /> by{" "}
          <span className={styles.gradientText}>Sakuna Dewanarayana</span>
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className={styles.scrollTopButton}
          aria-label="Scroll to top"
        >
          <ArrowUp className={styles.arrowIcon} />
        </button>
      </div>
    </footer>
  );
}