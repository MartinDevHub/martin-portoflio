"use client";

import React from "react";
import UseScroll from "@/app/lib/hooks/use-scroll";

export default function navbar() {
  const scrolled = UseScroll(50);

  return (
    <>
      <div
        className={`${
          !scrolled || scrolled ? "fixed" : ""
        } top-0 w-full flex justify-center ${
          scrolled ? "border-b border-stone-500 backdrop-blur-xl" : "bg-white/0"
        } z-30 transition-all`}
      >
        NAVBAR
      </div>
    </>
  );
}
