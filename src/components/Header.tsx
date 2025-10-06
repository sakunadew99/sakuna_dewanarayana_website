"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "services", href: "#services" },
    { name: "portfolio", href: "#portfolio" },
    { name: "blogs", href: "#blogs" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : styles.headerTransparent}`}>
      <nav className={styles.nav}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuButton} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={styles.desktopNav}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={styles.navLink}>
                {link.name}
              </a>
            </li>
          ))}
          
          <button onClick={() => setIsDark(!isDark)} className={styles.themeToggle} aria-label="Toggle theme">
            {isDark ? <FaSun className={styles.sunIcon} /> : <FaMoon className={styles.moonIcon} />}
          </button>
        </ul>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuList}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMenuOpen(false)} className={styles.mobileNavLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={() => setIsDark(!isDark)} className={styles.mobileThemeToggle} aria-label="Toggle theme">
          {isDark ? <FaSun className={styles.sunIcon} /> : <FaMoon className={styles.moonIcon} />}
        </button>
      </nav>
    </header>
  );
}