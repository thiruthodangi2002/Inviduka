import React from "react";

import Hero from "../components/Hero";
import GallerySection from "../components/Gallery";
import TeamSection from "../components/Team";

import Testimonals from "../components/Testimonals";

const Landingpage = () => {
  return (
    <div>
      <Hero />
      <GallerySection />
      <TeamSection />
      <Testimonals />
    </div>
  );
};

export default Landingpage;
