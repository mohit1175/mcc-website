import React from "react";
import "./Card.css";

function Card({photo, name, position, additional, link}) {
  return (
    <div className="card-container">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="card-photo"><img src={photo} alt={name}/></div>
        <div className="card-name">{name}</div>
        <div className="card-position">{position}</div>
        <div className="card-additional">{additional}</div>
      </a>
    </div>
  );
}

export default Card;