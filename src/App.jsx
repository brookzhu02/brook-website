import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(false);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setShowSplash(true);
      localStorage.setItem("hasSeenSplash", "true");
    }
  }, []);

  const scrollToAbout = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToProjects = () =>
    projectsRef.current.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      {showSplash ? (
        <SplashScreen onAnimationEnd={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <Hero
            scrollToAbout={scrollToAbout}
          />
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
