// src/pages/LandingPage.tsx
import React from "react";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import ShareSection from "../components/sections/ShareSection";
import CollectionSection from "../components/sections/CollectionSection";
import Header from "../components/header";

// add animations later
// fix responsiveness later
export const LandingPage: React.FC = () => {
  return (
    <div className="bg-linear-to-b from-[#2F2E2B] from-40% via-[#242322] via-80% to-[#2d2b1f] to-100% w-full h-full space-y-5 ">
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
