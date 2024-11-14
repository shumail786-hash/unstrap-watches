import React from "react";
import "./about.css";
import AboutHeader from "./components/AboutHeader";
import AboutContent from "./components/AboutContent";
import AboutHero from "./components/AboutHero";
const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutContent />
      <AboutHero />
    </div>
  );
};

export default About;
