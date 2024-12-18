import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";

function Achievements2018() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2018-19</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 51st Youth Festival"
            items={[
              "1st Place - Folk Orchestra, Qawali, Mehendi",
              "2nd Place - Western Group Singing, Western Instrumental, Western Solo Singing",
              "3rd Place - Indian Group Singing, Classical Vocal Solo, Light Vocal Solo, Clay Modelling"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall Runners Up",
            ]}
          />

          <PastAchievementCard
            name = "St. Xaviers College's Malhar"
            items={[
              "Overall Runners Up",
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

export default Achievements2018;
