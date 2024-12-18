import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";

function Achievements2015() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2015-16</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "Mumbai University's Youth Festival"
            items={[
              "Overall Winners",
              "1st Place - Indian Group Singing, Western Group Singing, Western Instrumental, English Elocution",
              "1st Place - Collage, Cartoonist, Marathi One Act, Best Actor",
              "2nd Place - Western Solo Singing, Indian Light Vocal, Folk Dance, Hindi Skit",
              "3rd Place - Marathi Mono Acting, Indian Classical, Clay Modelling"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 45th Mood Indigo"
            items={[
              "Overall 1st Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "Indian People's Theatre Association"
            items={[
              "Manmohan Krishna Trophy for 2nd Best Production",
              "Balraj Sahni Trophy for Outstanding Performance"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall 1st Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "Thakur College of Science and Commerce's Taarangan"
            items={[
              "1st Runner Up"
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

export default Achievements2015;
