import React from "react";
import './PastAchievements.css'
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import AchievementsDropdown from "../../components/AchievementsDropdown.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function Achievements2023() {  
  return(
    <div className = "past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">Achievements of 2023-24</div>
        <div className="past-achievements-text">
          <PastAchievementCard
            name = "University of Mumbai's 56th Youth Festival"
            items={[
              "Overall Runners Up",
              "Zonal Champions for 6th Consecutive Year",
              "Short Film Gold Medalist after Debut"
            ]}
          />
          
          <PastAchievementCard
            name = "Asia's Largest College Cultural Festival - 53rd Mood Indigo"
            items={[
              "Overall Champions",
              "Mumbai Multicity Champions"
            ]}
          />

          <PastAchievementCard
            name = "Indian People's Theatre Association - 50th Inter Collegiate Drama Competition [Golden Jubliee Edition]"
            items={[
              "Manmohan Krishna Trophy for 2nd Best Production - Baram",
              "Avtar Kishan Hangal Trophy for Best Actor - Mr. Lavish Jain",
              "Mysore Shrinivas Sathyu Trophy for Best Set Design - Mr. Yash Pawar [Debut Award]",
              "Merit Certificates for Best Actress, Best Teamwork, Best Directors, Best Lights"
            ]}
          />
          
          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Umang"
            items={[
              "Overall 1st Runners Up",
              "Business Events Departmental Trophy"
            ]}
          />

          <PastAchievementCard
            name = "NMIMS Anil Surendra Modi School of Commerce's Vaayu"
            items={[
              "Overall 1st Runners Up",
            ]}
          />

          <PastAchievementCard
            name = "Viral Fission's Collide"
            items={[
              "Best Contingent - ViFi Integration",
            ]}
          />

          <PastAchievementCard
            name = "NMIMS School of Branding and Advertising's Rivaya"
            items={[
              "Overall Champions",
              "Best Contingent Leader - Mr. Viraj Tanna",
              "Fine Arts Departmental Trophy",
              "Business Administration Departmental Trophy",
              "Branding Advertisement Departmental Trophy",
              "Performing Arts Departmental Trophy",
            ]}
          />

          <PastAchievementCard
            name = "World Forum for Art and Culture's National Level Youth Festival - Jhankriti"
            items={[
              "1st Place - Mono Acting",
              "2nd Place - Group Folk Dance",
              "3rd Place - Group Drama"
            ]}
          />
          

          <PastAchievementCard
            name = "HSNC University's Idalia"
            items={[
              "Overall Champions"
            ]}
          />

          <PastAchievementCard
            name = "Hassaram Rijhumal College's Mystique"
            items={[
              "Overall 3rd Runners Up",
              "Gaming and Sports Departmental Trophy",
            ]}
          />

          <PastAchievementCard
            name = "Event Manager of the Year Award by NIEM India"
            items={[
              "Mr. Krishna Birla",
              "Mr. Shivam Jhawar",
            ]}
          />
          
          <PastAchievementCard
            name = "Jai Hind College's Shoutt"
            items={[
              "Overall 3rd Runners Up",
              "Business Events Departmental Trophy",
              "Informals Departmental Trophy"
            ]}
          />
          
          <PastAchievementCard
            name = "Jai Hind College's Financial Festival Entourage"
            items={[
              "Overall 2nd Runners Up"
            ]}
          />
          
          <PastAchievementCard
            name = "Ramniranjan Anandilal Poddar's Enigma"
            items={[
              "[Half Contingent]",
              "Business Events Departmental Trophy"
            ]}
          />

          <PastAchievementCard
            name = "National Institute of Event Management's NIEM Extravaganza"
            items={[
              "Overall Champions",
              "Best Student Representative - Mr. Krishna Birla, Mr. Shivam Jhawar"
            ]}
          />
          
          
          <PastAchievementCard
            name = "Hassaram Rijhumal College's Off D'Cuff"
            items={[
              "Overall Champions"
            ]}
          />

          <PastAchievementCard
            name = "SVKM's Narsee Monjee College's Management and Strategy Festival Arithmos"
            items={[
              "Overall 1st Runners Up"
            ]}
          />

          <PastAchievementCard
            name = "Kalagurjari - Vijayi Smruti Ekanki Spardha "
            items={[
              "Overall Best Play - Picture Abhi Baki Hai ",
              "Overall Best Writer - Mr. Dheer Shah",
              "Overall Best Director - Mr. Dheer Shah",
              "Overall Best Actress - Ms. Khushi Acharya",
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

export default Achievements2023;
