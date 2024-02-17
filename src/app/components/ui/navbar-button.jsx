import React from "react";

export default function NavBarButton({ text }) {
  return (
    <button className="hover:font-bold focus:text-blue-500 focus:font-bold">
      {text}
    </button>
  );
}
