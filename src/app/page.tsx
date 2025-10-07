"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum loader duration to make transitions feel smooth
    const timer = setTimeout(() => setLoading(false), 1500);

    // Optionally wait for window load event
    window.addEventListener("load", () => setLoading(false));

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Blogs />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
