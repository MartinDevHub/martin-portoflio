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
      <h1 className="text-9xl font-bold text-white absolute z-10">
        Welcome Message
      </h1>
    </div>
  );
}
