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
            behind how things work. Constant learner. Enthusiastic teacher.
          </div>
          <div className="flex justify-center mt-5">
            <div className="p-3 w-1/2 border-2 border-solid border-white rounded ">
              <div className="text-center text-lg p-2 text-white underline underline-offset-2 font-bold">
                Highlighted Technical Skills
              </div>
              <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiHtml5 />
                </div>
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiCss3 />
                </div>
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiTailwindcss />
                </div>
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiJavascript />
                </div>
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiReact />
                </div>
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiDotnet />
                </div>
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiCsharp />
                </div>
                <div className="flex justify-center text-3xl p-4 hover:shadow-2xl hover:shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <TbSql />
                </div>
              </div>
              <div className="p-3 text-2xl items-center justify-center flex">
                <a
                  href="/CV_Marcoff.pdf"
                  download="CV_Marcoff.pdf"
                  className=" hover:bg-blue-900 text-white py-2 px-4 rounded inline-block border-2"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
