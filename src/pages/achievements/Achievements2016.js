import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";

function Achievements2016() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2016-17</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 49th Youth Festival"
            items={[
              "Zonal Champions",
              "1st Place - Western Solo Singing, Light Vocal Music, Poster Making, Rangoli, Folk Orchestra"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "1st Place - Fashion Show, Best Writer, Best Director, Best Play"
            ]}
          />
          
          <PastAchievementCard
            name = "St. Xaviers College's Malhar"
            items={[
              "1st Runners Up"
            ]}
          />
          
        </div>
        <AchievementsDropdown/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default Achievements2016;
