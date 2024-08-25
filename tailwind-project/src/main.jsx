import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Wrapper from "./components/Wrapper.jsx";
import Cards from "./components/Cards.jsx";
import cardData from "./cardData.js";
import "./index.css";

console.log(cardData);

function App() {
  const dataElements = data.map((item) => {
    return (
      <Cards logo={item.logo} name={item.name} description={item.description} />
    );
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Wrapper />
    <Cards />
  </StrictMode>
);
