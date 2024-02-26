import React from "react";
import AboutImage from "@/app/components/ui/about-image";

const About = () => {
  return (
    <div>
      <div className="text-2xl sm:text-4xl sm:pt-5 sm:py-5 p-2 font-bold text-white">
        <div>About Me</div>
      </div>
      <AboutImage />
    </div>
  );
};

export default About;
