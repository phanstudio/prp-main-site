// src/pages/LandingPage.tsx
import React from "react";
import Header from "../components/header";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import ShareSection from "../components/sections/ShareSection";
import CollectionSection from "../components/sections/CollectionSection";

// add animations later
// fix responsiveness later
export const LandingPage: React.FC = () => {
  return (
    <div className="bg-transperate w-full h-screen space-y-5 ">
      <Header />
      {/* First content */}
      <HomeSection />

      {/* Second content */}
      <AboutSection />

      {/* Thrid content */}
      <ShareSection />

      {/* Forth content */}
      <CollectionSection />
    </div>
  );
};
