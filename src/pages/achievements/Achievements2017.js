import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";

function Achievements2017() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2017-18</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 47th Mood Indigo"
            items={[
              "1st Runners Up",
              "1st Place - Fashion Show (Padmini Chundawat)"
            ]}
          />

        </div>
        <AchievementsDropdown showOverall={true}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default Achievements2017;
