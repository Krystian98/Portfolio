import React, { useState } from "react";

import "./home.css";

import bofelleskap_pic from "../static/Interior-bofelleskap.jpeg";
import complex_building from "../static/complex-building.jpeg";
import hammock from "../static/Terrace-Interior-Hammock.jpeg";

export default function About() {
  const [show, setShow] = useState({});

  const proj = [
    { id: 1, img: bofelleskap_pic, text:"Bofelleskap"},
    { id: 2, img: complex_building, text:"Complex"},
    { id: 3, img: hammock, text:"Coomplex2"},
  ];
  return (
    <div className="home-container">
      {proj.map((p) => {
        return (
          <div className="proj-item">
            <div className="proj-item-inner">
              <img
                className="proj-pic"
                src={p.img}
                onMouseEnter={() => setShow({ show: true, id: p.id })}
                onMouseLeave={() => setShow({ show: false, id: p.id })}
              />
              {/* Show is true and id of element is the show element */}
              <div className="proj-text">
              {show.show && p.id === show.id && <div> {p.text} </div>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
