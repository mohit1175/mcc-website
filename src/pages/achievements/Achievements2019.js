import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";

function Achievements2019() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2019-20</div>
        <div className="past-achievements-text">

          <PastAchievementCard
            name = "University of Mumbai's 52nd Youth Festival"
            items={[
              "Overall 2nd Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall Runners Up",
              "Gaming and Sports Departmental Trophy"
            ]}
          />
          
          <PastAchievementCard
            name = "St. Xaviers College's Malhar"
            items={[
              "Overall 2nd Runners Up"
            ]}
          />
          
          
          <PastAchievementCard
            name = "Sophia College's Kaleidoscope"
            items={[
              "Overall 2nd Runners Up"
            ]}
          />
          
          <PastAchievementCard
            name = "Thakur College of Science and Commerce's Taarangan"
            items={[
              "Overall Winners"
            ]}
          />
          
          <PastAchievementCard
            name = "NMIMS Anil Surendra Modi School of Commerce's Vaayu"
            items={[
              "Overall Winners"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Usha Pravin Gandhi College's Sports Festival Valor"
            items={[
              "Overall Winners"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Pravin Gandhi College of Law's Vividh"
            items={[
              "Overall Winners"
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

export default Achievements2019;
