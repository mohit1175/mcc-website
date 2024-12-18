import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2006() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2006-07</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 39th Youth Festival"
            items={[
              "1st Place - Classical Instrumental (Percussion)",
              "2nd Place - Classical Instrumental (Non-Percussion), Indian Group Singing"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 36th Mood Indigo"
            items={[
              "1st Place - Classical Instrumental (Percussion)",
              "Best Female Model",
              "2nd Place - Make a Band"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall 2nd Runners Up",
              "Overall Fine Arts 1st Runners Up",
              "1st Place - Haunted House, War of Rappers"
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

export default Achievements2006;
