import React from "react";
import ProjectsCarousel from "@/app/components/ui/projects-carousel";

export default function Projects() {
  return (
    <div>
      <div className="text-2xl sm:text-4xl sm:pt-5 sm:py-5 p-2 font-bold sm:flex sm:justify-center mb-3">
        Projects
      </div>
      <ProjectsCarousel />
    </div>
  );
}
