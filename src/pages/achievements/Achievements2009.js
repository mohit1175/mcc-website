import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2009() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2009-10</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 42nd Youth Festival"
            items={[
              "Best Actress - Shreya Bugde",
              "1st Place - Mono Acting, One Act Play",
              "2nd Place - Western Group Song, Indian Classical Instrumental",
              "3rd Place - Hindi Skit, Western Solo Singing, Indian Classical Dance"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 39th Mood Indigo"
            items={[
              "1st Place - Sufi Singing",
              "2nd Place - Mime, Street Play",
              "3rd Place - Street Dance, Shadow Dance"
            ]}
          />

          <PastAchievementCard
            name = "Indian People's Theatre Association"
            items={[
              "Pritvhiraj Chauhan Trophy for Best Production - Lukka Chuppi",
              "Best Director - Abhijeet Khade",
              "Best Actor - Amatya Goradiya",
              "Balraj Sahni Award - Hardik Sangani"
            ]}
          />

          <PastAchievementCard
            name = "St. Xaviers College's Malhar"
            items={[
              "1st Place - Carnatic Singing",
              "2nd Place - Instrumental",
              "3rd Place - Miss Malhar"
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

export default Achievements2009;
