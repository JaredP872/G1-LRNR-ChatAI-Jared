import React from "react";

export default function Result() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 h-[80vh]">
      <h1 className="text-7xl text-teal-600 font-medium mb-5">Irnr</h1>
      <p className="text-2xl font-medium mb-10">Questions Right: 0111</p>

      <button
        className="bg-emerald-500 text-white font-medium px-8 py-3 rounded-md hover:bg-emerald-600  cursor-pointer"
        onClick={() => (window.location.href = "/quiz")}
      >
        TRY ANOTHER QUIZ
      </button>
    </div>
  );
}
