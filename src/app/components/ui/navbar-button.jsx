import React from "react";

export default function NavBarButton({ text }) {
  return (
    <button className="font-bold focus:underline focus:text-underline-offset-8">
      {text}
    </button>
  );
}
