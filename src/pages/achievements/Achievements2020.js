import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";

function Achievements2020() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2020-21</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 53rd Youth Festival"
            items={[
              "Zonal Champions for the 3rd year in a row",
              "Overall Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 50th Mood Indigo"
            items={[
              "Overall Champions"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall Champions after 8 years"
            ]}
          />
          
          <PastAchievementCard
            name = "BITS Pilani's Oasis"
            items={[
              "Overall Runners Up"
            ]}
          />
          
          <PastAchievementCard
            name = "Wilson College's Olé"
            items={[
              "Overall Champions"
            ]}
          />
          
          <PastAchievementCard
            name = "NMIMS Centre for International Studies' Zion"
            items={[
              "Overall Champions"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Pravin Gandhi College of Law's Vividh"
            items={[
              "Overall Champions"
            ]}
          />
          
          <PastAchievementCard
            name = "HR College's Literary Arts Festival Litfest"
            items={[
              "Overall Champions"
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

export default Achievements2020;
