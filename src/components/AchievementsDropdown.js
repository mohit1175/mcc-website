import React from "react";
import "./AchievementsDropdown.css";

function goto(){
  let page = document.getElementById('achievements-select').value;
  if(page === "") return;
  window.location.pathname = page;
}

function AchievementsDropdown({showOverall}){
  return(
    <div className="achievements-dropdown">
      <label for="achievements-select">Check out our yearly achievements!</label>
      <br/>
      <select name="achievements-select" id="achievements-select" onChange={goto}>  
        <option value="">Select Year</option>
        { showOverall && <option value="achievements/">Overall</option>}
        <option value="achievements/2023">2023</option>
        <option value="achievements/2022">2022</option>
        <option value="achievements/2021">2021</option>
        <option value="achievements/2020">2020</option>
        <option value="achievements/2019">2019</option>
        <option value="achievements/2018">2018</option>
        <option value="achievements/2017">2017</option>
        <option value="achievements/2016">2016</option>
        <option value="achievements/2015">2015</option>
        <option value="achievements/2014">2014</option>
        <option value="achievements/2012">2012</option>
        <option value="achievements/2010">2010</option>
        <option value="achievements/2009">2009</option>
        <option value="achievements/2008">2008</option>
        <option value="achievements/2007">2007</option>
        <option value="achievements/2006">2006</option>
      </select>
    </div>
  );
}

export default AchievementsDropdown;