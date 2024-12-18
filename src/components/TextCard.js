import React from "react";
import "./TextCard.css";

function TextCard({name, position}) {
  return (
    <div className="text-card-container">
      <div className="text-card-name">{name}</div>
      <div className="text-card-position">{position}</div>
    </div>
  );
}

export default TextCard;