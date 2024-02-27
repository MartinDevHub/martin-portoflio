import React from "react";

export default function DefaultButton({ text }) {
  return (
    <div>
      {" "}
      <button className="text-white bg-blue-900  px-6 py-1 rounded-xl cursor-pointer text-sm sm:text-lg  mt-3 mb-1">
        {text}
      </button>
    </div>
  );
}
