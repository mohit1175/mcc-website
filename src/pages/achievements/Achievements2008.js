import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2008() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2008-09</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 38th Mood Indigo"
            items={[
              "Best Actor - Shreya Bugde"
            ]}
          />

          <PastAchievementCard
            name = "Indian People's Theatre Association"
            items={[
              "Best Play"
            ]}
          />
          
          
          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "1st Place - Spoof",
              "2nd Place - Filmy Duet Singing",
              "3rd Place - Filmy Duet Dance, Hindi Band, Solo Classical Instrument"
            ]}
          />

          <PastAchievementCard
            name = "St. Xaviers College's Malhar"
            items={[
              "2nd Place - Shadow Dance",
              "3rd Place - Bollywood Dance"
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

export default Achievements2008;
