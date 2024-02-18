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
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Texto sobre la imagen</h2>
      </div>
    </div>
  );
};

export default AboutImage;
