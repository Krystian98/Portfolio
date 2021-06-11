import React from "react";
import { Link } from "react-router-dom";

import "./work.css";
import data from "../static/data/projects";

import complex_building from "../static/complex-building.jpeg";

export default function Work() {
  const proj = data.projects;
  return (
    <div className="work-main-container">
      {proj.map((p) => {
        return (
          <Link
            className="work-proj"
            to={{ pathname: `/project/${p.text}`, state: p }}
            exact
          >
            <div className="work-container">
              <img className="work-pic" src={p.img} />
              <div className="work-text work-absolute">{p.text}</div>
              <div className="work-detailed-text work-absolute">
                {" "}
                {p.detailed_text}{" "}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
