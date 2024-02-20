"use client";

import React from "react";
import Image from "next/image";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const AboutImage = () => {
  return (
    <div
      className="relative overflow-hidden rounded"
      style={{ width: "100%", height: "500px", backgroundColor: "#1C2131" }}
    >
      <Image
        src="/yo2.jpg"
        alt="Descripción de la imagen"
        layout="fill"
        objectFit="cover"
        style={{ filter: "grayscale(100%)", mixBlendMode: "multiply" }}
      />
      <div className="absolute inset-0 flex items-start justify-start text-white  font-bold p-2 h-2/3 w-2/3">
        <div>
          <div className=" font-bold p-2 text-2xl">
            Fullstack software engineer. Degreed social scientist. Passionate
            about rationally understanding the &quot;why&quot; behind things.
            Constant learner. Enthusiastic teacher. Proud nerd.
          </div>
          <div className="grid grid-cols-2">
            <div className="p-3 ">
              <div className="text-center text-lg p-2">
                Highlighted Hard Skills
              </div>
              <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <SiHtml5 />
                </div>
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <SiCss3 />
                </div>
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <SiTailwindcss />
                </div>
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <SiJavascript />
                </div>
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <SiReact />
                </div>
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <SiDotnet />
                </div>
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <SiCsharp />
                </div>
                <div className="flex justify-center text-3xl p-4">
                  {" "}
                  <TbSql />
                </div>
              </div>
            </div>
            <div className="p-3 text-2xl items-center justify-center flex">
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
