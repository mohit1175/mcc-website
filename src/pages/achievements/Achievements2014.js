import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";

function Achievements2014() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2014-15</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 47th Youth Festival"
            items={[
              "1st Place - Folk Orchestra, Poster Making, One Act Play, Western Instrumental, Western Solo",
              "2nd Place - Western Group Song, Collage, Clay Modelling, Skit",
              "3rd Place - Installation, Indian Group Song",
              "Overall Fine Arts Trophy",
              "Moniraj Hazarika - awarded the Golden Boy"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 44th Mood Indigo"
            items={[
              "Overall 1st Runners Up",
              "Overall Music Trophy"
            ]}
          />

          <PastAchievementCard
            name = "Indian People's Theatre Association"
            items={[
              "Pritviraj Kapoor Trophy",
              "A.K. Hangal Trophy",
              "Best Actor",
              "Best Actress",
              "Best Writer"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall Champions"
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

export default Achievements2014;
