"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlide = ({ imagePath, alt, title, description, url }) => (
  <div>
    <div className="flex justify-center items-center sm:h-32 h-24">
      <Image
        className="rounded"
        src={imagePath}
        alt={alt}
        width={250}
        height={200}
      />
    </div>
    <div className="sm:h-64 h-32 flex justify-center text-white">
      <div>
        <div className="w-full mt-3 sm:mt-0 h-12 sm:h-8 text-center sm:text-xl text-sm font-semibold">
          {title}
        </div>
        <div className=" sm:text-lg text-xs text-center h-12 sm:h-48 items-center flex">
          {description}
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <a
        className="text-white bg-blue-900 text-sm sm:text-lg px-6 py-1 rounded-xl mt-3 sm:mb-0 mb-5"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Join the website
      </a>
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
      imagePath: "/fractal-logo.png",
      alt: "fractal-mind",
      title: "Fractal Mind AI",
      description:
        "An AI-powered platform for digital asset valuation, to help funds and traders solve the time and money consuming research and analysis process, aggregating all data providers, offering strategies and fundamental analysis. I am in charge of the website's dashboard.",
      url: "https://fractalmind.xyz/",
    },
    {
      imagePath: "/caviahuetours-logo.png",
      title: "Hebe's House Hostel - Caviahue Tours",
      alt: "hebes-house",
      description:
        "A hostel located in the Andes mountain range, accommodating a large flow of people throughout the year. I am currently developing a reservation system to automate and simplify its management.",
      url: "https://hebeshouse.com.ar/",
    },
    {
      imagePath: "/messianicos3.jpg",
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
