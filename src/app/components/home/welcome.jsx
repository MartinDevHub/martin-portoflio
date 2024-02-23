import React from "react";

export default function Welcome() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/welcome-video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className=" font-bold text-white absolute z-10">
        <div className="text-5xl sm:text-9xl ">Martin Marcoff</div>
        <div className="text-lg sm:text-4xl">Fullstack Software Engineer</div>
      </div>
    </div>
  );
}
