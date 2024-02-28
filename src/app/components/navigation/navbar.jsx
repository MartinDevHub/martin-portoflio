"use client";

import React from "react";
import { Link } from "react-scroll";
import { SiLinkedin } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import UseScroll from "@/app/lib/hooks/use-scroll";
import NavBarButton from "../ui/navbar-button";

export default function NavBar() {
  const scrolled = UseScroll(50);

  return (
    <>
      <div
        className={`${
          !scrolled || scrolled ? "fixed" : ""
        } top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-stone-500 backdrop-blur-xl"
            : "bg-white/0 "
        } z-30 transition-all`}
      >
        <div
          className="mx-6 flex sm:h-16 h-8 max-w-screen-xl
        items-center justify-between w-full cursor-pointer text-white"
        >
          <div className="sm:flex sm:items-center font-display sm:align-center sm:w-1/3">
            <Link
              to="welcomeSection"
              smooth={true}
              duration={1500}
              className="sm:flex sm:items-center font-display hidden sm:block sm:text-2xl"
            >
              <span
                className="flex justify-center items-center
                gap-2 font-bold"
              >
                Martin Marcoff
              </span>
            </Link>
          </div>
          <div className="flex justify-between gap-4 sm:text-xl text-sm sm:w-1/3">
            <Link to="aboutSection" smooth={true} duration={1500} offset={-50}>
              <NavBarButton text={"About"} />
            </Link>
            <Link
              to="projectsSection"
              smooth={true}
              duration={1500}
              offset={-50}
            >
              <NavBarButton text={"Projects"} />
            </Link>
            <Link
              to="contactSection"
              smooth={true}
              duration={1500}
              offset={-50}
            >
              <NavBarButton text={"Contact"} />
            </Link>
          </div>
          <div className="flex justify-end gap-4 w-1/3">
            {" "}
            <a
              href="https://www.linkedin.com/in/martinmarcoff/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="sm:text-2xl text-xl" />
            </a>
            <a
              href="https://github.com/MartinDevHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub className="sm:text-2xl text-xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
