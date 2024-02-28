"use client";

import React from "react";
import Image from "next/image";
import DefaultButton from "./default-button";
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
      className="relative overflow-hidden rounded w-full bg-blue-900"
      style={{ width: "100%", height: "320px", backgroundColor: "#1C2131" }}
    >
      <Image
        src="/yo2.jpg"
        alt="Descripción de la imagen"
        layout="fill"
        objectFit="cover"
        className="sm:filter sm:grayscale sm:mix-blend-multiply sm:block hidden"
      />
      <div className="absolute text-white inset-0 flex sm:items-start sm:justify-start sm:p-2 sm:w-2/3">
        <div>
          <div className="p-2 sm:text-2xl text-sm text-center sm:text-left text-base">
            Fullstack software developer. System Analysis student. Degreed
            social scientist. Passionate about rationally{" "}
            <span className="text-blue-900 font-bold">
              understanding the &quot;why&quot;
            </span>{" "}
            behind how things work. Constant learner. Enthusiastic comunicator.
          </div>
          <div className="flex justify-center sm:mt-3 sm:pl-5">
            <div className="p-3">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex justify-center text-xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiHtml5 />
                </div>
                <div className="flex justify-center text-2xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiCss3 />
                </div>
                <div className="flex justify-center text-2xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiTailwindcss />
                </div>
                <div className="flex justify-center text-2xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiJavascript />
                </div>
                <div className="flex justify-center text-2xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiReact />
                </div>
                <div className="flex justify-center text-2xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiDotnet />
                </div>
                <div className="flex justify-center text-2xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <SiCsharp />
                </div>
                <div className="flex justify-center text-2xl sm:text-3xl p-4 shadow-xl shadow-blue-900 cursor-pointer text-blue-900">
                  {" "}
                  <TbSql />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mt-7 mt-2 justify-center flex">
            <DefaultButton text={"Download CV"} url={"/CV_Marcoff.pdf"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
