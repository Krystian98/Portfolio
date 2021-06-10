import React from "react";

const SpecificProject = (props) => {
  const proj = props.location.state;
  return (
    <div className="home-container">
      <img className="proj-pic" src={proj.img} />
      <h1> {proj.id} </h1>
      <h1> {proj.text} </h1>
    </div>
  );
};

export default SpecificProject;
