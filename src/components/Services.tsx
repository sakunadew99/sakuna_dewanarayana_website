"use client";

import { useInView } from "react-intersection-observer";
import { FaCode, FaFileCode, FaLaptopCode } from "react-icons/fa";
import styles from "./Services.module.css";

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "I specialize in creating visually appealing and user-friendly websites. Using HTML, CSS, JavaScript, and React, I build responsive and interactive interfaces. My focus is on ensuring that websites are easy to navigate and work well on all devices. I enjoy transforming ideas into functional and attractive web pages that provide a great user experience.",
    },
    {
      icon: <FaFileCode />,
      title: "Backend Development",
      description:
        "I specialize in building robust and efficient backend systems for websites and applications. Using technologies like Node.js, Express, and databases, I create server-side logic, manage databases, and ensure seamless communication between the server and the user interface. My focus is on developing secure, scalable, and high-performance backend solutions that support smooth user experiences and reliable data management.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "I specialize in full-stack web development, combining both frontend and backend skills to create complete and functional websites. Using HTML, CSS, JavaScript, React, Node.js, and Express, I build responsive and interactive user interfaces, as well as robust server-side systems. My goal is to deliver seamless and efficient web solutions that provide great user experiences and meet clients' needs.",
    },
  ];

  return (
    <section id="services" className={styles.servicesSection} ref={ref}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ''}`}>
          <span className={styles.gradientText}>my</span> services
        </h2>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceCard} ${inView ? styles.visible : ''}`}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}