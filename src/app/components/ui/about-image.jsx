"use client";

import React from "react";
import Image from "next/image";

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
          <div>
            <div className="text-center">Highlighted Hard Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
