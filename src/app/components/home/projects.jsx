import React from "react";
import ProjectsCarousel from "@/app/components/ui/projects-carousel";

export default function Projects() {
  return (
    <div>
      <div className="text-4xl pt-5 py-5 font-bold flex justify-center">
        Projects
      </div>
      <ProjectsCarousel />
    </div>
  );
}
