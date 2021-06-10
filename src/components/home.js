import React from "react";

import "./home.css";

import bofelleskap_pic from "../static/Interior-bofelleskap.jpeg";
import complex_building from "../static/complex-building.jpeg";
import hammock from "../static/Terrace-Interior-Hammock.jpeg";

export default function Home() {
  const proj = [
    { id: 1, img: bofelleskap_pic, text: "Bofelleskap" },
    { id: 2, img: complex_building, text: "Complex" },
    { id: 3, img: hammock, text: "Coomplex2" },
  ];
  return (
    <div className="home-container">
      {proj.map((p) => {
        return (
          <div className="proj-item">
            <div className="proj-item-inner">
              <img className="proj-pic" src={p.img} />

              <div className="proj-text">{p.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
