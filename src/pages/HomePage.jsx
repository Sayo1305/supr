import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Contributions from "../components/Contributions";
import ProjectSection from "../components/ProjectHelpSection";
import CardSection from "../components/CardSection";
import MentorSection from "../components/MentorSection";
import ResourcesSection from "../components/ResourcesSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Contributions />
      <ProjectSection />
      <CardSection />
      <MentorSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
