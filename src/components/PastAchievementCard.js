import React from "react";
import './PastAchievementCard.css'

function PastAchievementCard({ name, items }){
  return(
    <div className="past-achievements-list">
      {name}
      <ul className="past-achievements-sublist">
        {items.map((item, index) => (
          <li> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default PastAchievementCard;