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
      <div className="absolute inset-0 flex items-start justify-start text-white  p-2 h-2/3 w-2/3">
        <div>
          <div className="p-2 text-2xl">
            Fullstack software engineer. Degreed social scientist. Passionate
            about rationally{" "}
            <span className="text-blue-900 font-bold">
              understanding the &quot;why&quot;
            </span>{" "}
            behind how things work. Constant learner. Enthusiastic comunicator.
          </div>
          <div className="flex justify-center mt-3 pl-5">
            <div className="p-3  ">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiHtml5 />
                </div>
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiCss3 />
                </div>
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiTailwindcss />
                </div>
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiJavascript />
                </div>
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiReact />
                </div>
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiDotnet />
                </div>
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiCsharp />
                </div>
                <div className="flex justify-center text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <TbSql />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 text-2xl justify-center flex">
            <a
              href="/CV_Marcoff.pdf"
              download="CV_Marcoff.pdf"
              className=" font-bold hover:text-blue-900  bg-blue-900 hover:bg-gray-800 hover:text-blue-900 text-white py-2 px-4 rounded inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
