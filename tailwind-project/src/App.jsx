import { useState } from "react";

function App() {
  return (
    <div className="container  md:mx-auto ">
      <div className="md:grid grid-cols-2 items-center">
        <div className="flex flex-col gap-5 max-w-md md:items-start items-center ">
          <h1 className="text-5xl font-bold text-center md:text-start">
            Virtual healthcare for you
          </h1>
          <p className="text-sm opacity-40 text-center md:text-start">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
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
      <div className="flex flex-col mx-auto text-center mt-20">
        <h2 className="p-2 text-xl font-bold flex flex-col">
          Our services
          <span className="border-b-2 border-black w-10 text-center mx-auto p-2"></span>
        </h2>
        <p className="opacity-40">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
    </div>
  );
}

export default App;
