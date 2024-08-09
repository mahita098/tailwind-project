import { useState } from "react";

function Header() {
  return (
    <div className="h-20 flex justify-between items-center container mx-auto">
      <img src="./logo.png" alt="" />
      <ul className="flex gap-5">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Find Doctor</li>
        <li className="cursor-pointer">App</li>
        <li className="cursor-pointer">Testimonials</li>
        <li className="cursor-pointer">About us</li>
      </ul>
    </div>
  );
}

export default Header;
