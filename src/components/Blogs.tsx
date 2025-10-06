"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "./Blogs.module.css";

export default function Blogs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogs = [
    {
      image: "/images/blog11.jpg",
      title: "The Future Shaped by Artificial Intelligence: A Glimpse Into Tomorrow",
      description:
        "The dawn of Artificial Intelligence (AI) has irreversibly changed the landscape of our world, redefining the bounds of what's possible. Beyond its current applications, the potential future impacts of AI on society, economy, and our daily lives promise a transformation both exhilarating and daunting.",
      link: "https://medium.com/@sakuna.dewanarayana/the-future-shaped-by-artificial-intelligence-a-glimpse-into-tomorrow-987f6206090a",
    },
    {
      image: "/images/blog2.jpg",
      title: "blogs title here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente quod blanditiis officiis neque architecto voluptatum totam ratione nulla itaque facere iusto perspiciatis, accusantium vel qui consequuntur eius. Tempora, facere?",
      link: "#",
    },
    {
      image: "/images/blog1.jpeg",
      title: "blogs title here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente quod blanditiis officiis neque architecto voluptatum totam ratione nulla itaque facere iusto perspiciatis, accusantium vel qui consequuntur eius. Tempora, facere?",
      link: "#",
    },
  ];

  return (
    <section id="blogs" className={styles.blogsSection} ref={ref}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${inView ? styles.visible : ''}`}>
          <span className={styles.gradientText}>my</span> blogs
        </h2>

        <div className={styles.blogsGrid}>
          {blogs.map((blog, index) => (
            <div key={index} className={`${styles.blogCard} ${inView ? styles.visible : ''}`}>
              <div className={styles.blogImageWrapper}>
                <Image src={blog.image} alt={blog.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>

              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogDescription}>{blog.description}</p>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className={styles.blogLink}>
                  learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}