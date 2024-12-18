import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2007() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2007-08</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 40th Youth Festival"
            items={[
              "1st Place - Mono Acting (Sudeep Modak)",
              "2nd Place - Mono Acting (Shreya Bugde)",
              "3rd Place - Marathi One Act Play, Folk Dance"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 37th Mood Indigo"
            items={[
              "Mr. Mood Indigo - Ajit Nair",
              "Best Female Ensemble",
              "3rd Place - Fashion Team"
            ]}
          />

          <PastAchievementCard
            name = "Indian People's Theatre Association"
            items={[
              "Best Actress - Shreya Bugde"
            ]}
            />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "1st Place - Solo Dance (Noorin Shah)",
              "1st Place - Duet Singing",
              "2nd Place - War of Rappers (Aadir Malik)",
              "3rd Place - Western Dance"
            ]}
          />

          <PastAchievementCard
            name = "St. Xaviers College's Malhar"
            items={[
              "Overall Fine Arts Trophy",
              "1st Place - Solo Singing (Annie Chawla)",
              "1st Place - Ekaanki"
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

export default Achievements2007;
