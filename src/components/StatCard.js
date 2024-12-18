import React from "react";
import './StatCard.css'

function StatCard({ no, tag }){
  return(
    <div className="stat-parent">
        <div className="stat-number">{no}</div>
        <div className="stat-tag">{tag}</div>
    </div>
  )
}

export default StatCard;