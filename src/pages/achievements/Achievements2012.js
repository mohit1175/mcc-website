import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2012() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2012-13</div>
        <div className="past-achievements-text">
          <PastAchievementCard
            name = "University of Mumbai's 45th Youth Festival"
            items={[
              "Best Actor - Hardik Sangani",
              "Best Actress - Palak Shah",
              "1st Place - Hindi One Act Play, Mono Acting, Poster Making, On the Spot Painting",
              "2nd Place - Clay Modelling, Rangoli, Marathi Debate",
              "3rd Place - Indian Folk Dance, Cartoonist"
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

export default Achievements2012;
