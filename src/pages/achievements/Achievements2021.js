import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2021() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2021-22</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 54th Youth Festival"
            items={[
              "Overall 2nd Runners Up",
              "Zonal Champions"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 51st Mood Indigo"
            items={[
              "Overall Champions"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall Second Runners Up",
              "Best Contingent Leader - Parth Shah"
            ]}
          />

          <PastAchievementCard
            name = "St. Xaviers College's Malhar"
            items={[
              "Overall Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "BITS Goa's Waves"
            items={[
              "Overall Champions"
            ]}
          />

          <PastAchievementCard
            name = "Jai Hind College's Shoutt"
            items={[
              "Overall Winners"
            ]}
          />

          <PastAchievementCard
            name = "Kishinchand Chellaram College's Kiran"
            items={[
              "2nd Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "Thakur College of Science and Commerce's Taarangan"
            items={[
              "Overall Winners"
            ]}
          />

          <PastAchievementCard
            name = "R. A. Poddar's Enigma"
            items={[
              "Overall Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "Hassaram Rijhumal College's Mystique"
            items={[
              "1st Runners Up"
            ]}
          />
          
          <PastAchievementCard
            name = "HR College's Off D'Cuff"
            items={[
              "Overall Winners"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Academic Festival Arthashastra"
            items={[
              "2nd Runners Up"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Pravin Gandhi College of Law's Vividh"
            items={[
              "1st Runners Up"
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

export default Achievements2021;
