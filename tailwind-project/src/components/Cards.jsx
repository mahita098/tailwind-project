import { useState } from "react";
import cardData from "../cardData.js";

function Cards() {
  return (
    <div className="p-2 shadow-xl">
      <img src="{item.logo}" alt="" />
      <p></p>
      <p></p>
    </div>
  );
}

export default Cards;
