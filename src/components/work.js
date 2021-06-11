import React from "react";
import { Link } from "react-router-dom";

import "./work.css";
import data from "../static/data/projects";

export default function Work() {
  const proj = data.projects;
  return (
    <div className="work-container">
      {proj.map((p) => {
        return (
          <div className="work-proj">
            <Link to={{ pathname: `/project/${p.text}`, state: p }} exact>
              <img className="work-pic" src={p.img} />
              <div className="work-text">{p.text}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
