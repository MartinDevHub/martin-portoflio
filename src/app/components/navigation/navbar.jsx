"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuGithub } from "react-icons/lu";
import UseScroll from "@/app/lib/hooks/use-scroll";

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
          className="mx-6 flex h-16 max-w-screen-xl
        items-center justify-between w-full"
        >
          <div className="flex items-center font-display align-center">
            <Link href="/" className="flex items-center font-display text-2xl">
              <span
                className="flex justify-center items-center
                gap-2"
              >
                Martin Marcoff
              </span>
            </Link>
          </div>
          <div className="flex justify-between gap-4">
            {" "}
            <a
              href="https://www.linkedin.com/in/martinmarcoff/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                alt="LinkedIn"
                width={30}
                height={30}
              ></Image>
            </a>
            <a
              href="https://github.com/MartinDevHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
