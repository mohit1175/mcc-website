import React from "react";
import './AlumniCard.css'

function AlumniCard({ items }){
  return(
    items.map((alumni, index) => (
      <div className="alumni-card" key={index}>
        <a href={alumni.link} target="_blank" rel="noreferrer">
        <div className="alumni-photo"><img src={alumni.photo} alt={alumni.name}/></div>
        <div className="alumni-name">{alumni.name}</div>
        <div className="alumni-position">{alumni.position}</div>
        <div className="alumni-year">{alumni.year}</div>
        </a>
      </div>
    ))
  )
}

export default AlumniCard;