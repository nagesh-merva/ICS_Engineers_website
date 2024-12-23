import React from "react";
import AboutHeader from "../components/About/AboutHeader";
import Footer from "../components/Footer/Footer";
import AboutSection from "../components/About/AboutSection";
import AboutImageSection from "../components/About/AboutImageSection";
import WorkSector from "../components/About/WorkSector";
import AboutTeam from "../components/About/AboutTeam";

const AboutUs = () => {
  return (
    <main className="h-svh w-full">
      <AboutHeader />
      <div className="relative bg-white w-full h-fit flex justify-center mb-16">
        <AboutSection />
      </div>
      <div className="hidden sm:flex bg-white w-full h-fit justify-center mb-16">
        <AboutImageSection />
      </div>
      <div className="relative sm:flex bg-white w-full h-fit justify-center">
        <WorkSector />
      </div>
      <div className="relative sm:flex bg-white w-full h-fit justify-center">
        <AboutTeam />
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
