import React from "react";

import "./specificProject.css";

const SpecificProject = (props) => {
  const p = props.location.state;
  return (
    <div className="">
      <div className="sp-container">
        <h1> {p.text} </h1>
      </div>
      <div className="sp-container">
        <img className="proj-pic" src={p.img} />
        <div className="">
          <span className="sp-detailed-text"> {p.detailed_text} </span>
        </div>
      </div>
    </div>
  );
};

export default SpecificProject;
