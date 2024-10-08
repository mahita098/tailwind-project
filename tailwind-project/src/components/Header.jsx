import { useState } from "react";

function Header() {
  return (
    <div className="h-20 flex justify-between items-center mx-auto container 2xl:px-16">
      <img src="./logo.png" alt="" />
      <ul className="flex gap-8">
        <li className="cursor-pointer hover:text-blue-800">Home</li>
        <li className="cursor-pointer hover:text-blue-800">Find Doctor</li>
        <li className="cursor-pointer hover:text-blue-800">App</li>
        <li className="cursor-pointer hover:text-blue-800">Testimonials</li>
        <li className="cursor-pointer hover:text-blue-800">About us</li>
      </ul>
    </div>
  );
}

export default Header;
