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
      <div className="absolute inset-0 flex items-start justify-start text-white text-center font-bold p-2 h-1/2 w-1/2">
        <div>
          <div className="box-content text-base font-bold p-2">
            Hello there! My name is Martin Marcoff, and I am a Fullstack
            Engineer. Being a sociable person, I greatly enjoy teamwork. I
            consider communication to be the indispensable skill for any
            professional. I am tenacious in my professional life: I respond to
            contingent scenarios with creativity.
          </div>
          <div className="box-content text-base font-bold p-2">
            Want to learn discover more about me? Enter my professional journey!
          </div>
          <div className="p-2">
            <button className="border rounded p-2">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
