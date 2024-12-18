import React from "react";
import "./TeamDropdown.css";

function goto(){
  let page = document.getElementById('team-select').value;
  if(page === "") return;
  window.location.pathname = page;
}

function TeamDropdown({showCurrent}){
  return(
    <div className="team-dropdown">
      <label for="team-select">Check out our past teams!</label>
      <br/>
      <select name="team-select" id="team-select" onChange={goto}>  
        <option value="">Select Year</option>
        { showCurrent && <option value="team">2023</option>}
        <option value="team/2022">2022</option>
        <option value="team/2021">2021</option>
        <option value="team/2020">2020</option>
      </select>
    </div>
  );
}

export default TeamDropdown;