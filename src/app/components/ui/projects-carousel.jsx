"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlide = ({ imagePath, alt, title, description }) => (
  <div>
    <div
      className="rounded-t-xl flex justify-center items-center border
  border-2 border-blue-900"
    >
      <Image
        className="h-56 w-56 rounded-full m-4"
        src={imagePath}
        alt={alt}
        width={300}
        height={300}
      />
    </div>
    <div
      className="h-48 border
  border-2 border-blue-900 rounded-b-xl flex flex-col justify-center items-center p-4 gap-4 text-white"
    >
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-center">{description}</p>
    </div>
    <div className="flex justify-center items-center mt-3">
      <button className="text-white bg-blue-900 text-lg px-6 py-1 rounded-xl">
        ¡Join the website!
      </button>
    </div>
  </div>
);

const ProjectsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const projects = [
    {
      imagePath: "/fractal-logo.jpg",
      alt: "fractal-mind",
      title: "Fractal Mind AI",
      description:
        "An AI-powered platform for digital asset valuation, to help funds and traders solve the time and money consuming research and analysis process, aggregating all data providers, offering strategies and fundamental analysis. I am in charge of the website's dashboard.",
    },
    {
      imagePath: "/hebes-house.jpg",
      title: "Hebe's House Hostel",
      alt: "hebes-house",
      description:
        "A hostel located in the Andes mountain range, accommodating a large flow of people throughout the year. I am currently developing a reservation system to automate and simplify its management.",
    },
    {
      imagePath: "/messianicos.jpg",
      title: "Messianicos",
      alt: "messianicos",
      description:
        "I am a co-founder, along with two developer friends, of a work-in-progress website that has a dual purpose: to learn new tools and pay tribute to the greatest soccer player of all time.",
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectSlide key={index} {...project} />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
