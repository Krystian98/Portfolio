import React from "react";
import { Link } from "react-router-dom";

import "./home.css";
import data from "../static/data/projects";

export default function Home() {
  const proj = data.projects;
  return (
    <div className="home-container">
      {proj.map((p) => {
        return (
          <div className="proj-item">
            <Link
              to={{ pathname: `/project/${p.text}`, state: p }}
              exact
              className="proj-link"
            >
              {/* display flex direction row */}
              <div className="proj-item-inner">
                {/* children - pic and text */}
                <img className="proj-pic" src={p.img} />
                <div className="proj-text">{p.text}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
