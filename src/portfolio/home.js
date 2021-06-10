import React, { useState } from "react";

import "./home.css";

import bofelleskap_pic from "../static/Interior-Bofelleskap.jpeg";
import complex_building from "../static/complex-building.jpeg";
import hammock from "../static/Terrace-Interior-Hammock.jpeg";

export default function About() {
  const [show, setShow] = useState(false);

  const proj = [
    { id: 1, img: bofelleskap_pic },
    { id: 2, img: complex_building },
    { id: 3, img: hammock },
  ];
  return (
    <div className="home-container">
      {proj.map((p) => {
        return (
          <div className="proj-item">
            <div style={{ display: "flex" }}>
              <img
                className="proj-pic"
                src={p.img}
                onMouseEnter={() => setShow({ show: true, id: p.id })}
                onMouseLeave={() => setShow(false)}
              />
              {/* Show is true and id of element is the show element */}
              {show.show && p.id === show.id && "test"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
