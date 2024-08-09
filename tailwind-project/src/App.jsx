import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="container md:grid grid-cols-2 items-center mx-auto ">
      <div className="flex flex-col gap-5 max-w-md md:items-start items-center ">
        <h1 className="text-5xl font-bold text-center md:text-start">
          Virtual healthcare for you
        </h1>
        <p className="text-sm opacity-40 text-center md:text-start">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button
          className="rounded-3xl bg-blue-500 py-2 px-4 shadow-xl
         text-xs text-white w-fit hover:bg-red-300 transition-all duration-400 ease-in-out"
        >
          Consult today
        </button>
      </div>
      <img className=" " src="./illustration.png" alt="" />
    </div>
  );
}

export default App;
