import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2022() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2022-23</div>
        <div className="past-achievements-text">

        <PastAchievementCard
            name = "University of Mumbai's 55th Youth Festival"
            items={[
              "Overall Runners Up",
              "Zonal Champions for 5th Consecutive Year",
              "Garware Trophy for Debate Hindi/English Gold",
              "Mr. University after 25 Years - Mr. Krishna Birla",
              "Ms. University Runners Up - Ms. Suhani Panchal"
            ]}
          />

          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 52nd Mood Indigo"
            items={[
              "Overall Champions 3rd Time Consecutively",
              "Mumbai Multicity Champion",
              "Campus Ambassadorship Champion - Mr. Krishna Birla"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall Runners Up",
              "Best Contingent Leader - Mr. Ojasvee Singhal"
            ]}
          />

          <PastAchievementCard
            name = "NMIMS Anil Surendra Modi School of Commerce's Vaayu"
            items={[
              "Overall Champions",
              "Innovations Department Champions"
            ]}
          />

          <PastAchievementCard
            name = "Atlas Skilltech University ISME's Illenium"
            items={[
              "Overall Runners Up",
              "Literary Arts Department Champions",
              "Fine Arts Department Champions"
            ]}
          />

          <PastAchievementCard
            name = "Viral Fission's Collide"
            items={[
              "Overall Champions",
              "Best Contingent Leader Runners Up - Ms. Rishika Mukherjee",
              "Best Assistant Contingent Leader Runners Up - Ms. Yashvi Chheda"
            ]}
          />

          <PastAchievementCard
            name = "Thakur College of Science and Commerce's Taarangan"
            items={[
              "Overall Champions"
            ]}
          />

          <PastAchievementCard
            name = "Ramniranjan Anandilal Poddar's Enigma"
            items={[
              "Overall Champions"
            ]}
          />

          <PastAchievementCard
            name = "RedBull Campus Clutch - Global Student Valorant Tournament"
            items={[
              "Overall Champions - Mumbai",
              "National Quarter Finalists - India Top 16"
            ]}
          />

          <PastAchievementCard
            name = "Jai Hind College's Shoutt"
            items={[
              "Overall Second Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "Jai Hind College's Finance Festival Entourage"
            items={[
              "Overall Champions"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Pravin Gandhi College of Law's Vividh"
            items={[
              "Overall Runners Up"
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

export default Achievements2022;
