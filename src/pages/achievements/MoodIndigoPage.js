import React from "react";
import './PastAchievements.css';
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import PastAchievementCard from "../../components/PastAchievementCard.js";


function MoodIndigoPage() {  
  return(
    <div className="past-achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-achievements-main">
        <div className="past-achievements-header">IIT Bombay's Mood Indigo</div>
        <div className="past-achievements-text">
          <PastAchievementCard
            name = "53rd Edition [2023-24]"
            items={[
              "Overall Champions - 4th Time Consecutively",
              "Mumbai Multicity Champions",
              "Won Cash Prize worth INR 1 Lakh",
              "1st Place - Vogue, Kora Kaagaz, Slam Poetry, Rangeela, Turn It Into Art, MI Times, Ad-Venture",
              "2nd Place - Conchord, Virutuoso, Surshringar, Chef's Corner, Reportage",
              "3rd Place - Beat the Street, MI Idol, Singing the Indigos, Chef's Corner, Mono Strokes, Pixellence, MI Times, Reportage",
            ]}
          />
          
          <PastAchievementCard
            name = "52nd Edition [2022-23]"
            items={[
              "Overall Champions - 3rd Time Consecutively",
              "Mumbai Multicity Champions",
              "Won Cash Prize worth INR 1.5 Lakhs",
              "Campus Ambassadorshi National Champion [Highest Ever 127,000 points] - Mr. Krishna Birla"
            ]}
          />
          <PastAchievementCard
            name = "51st Edition [2021-22]"
            items={[
              "Overall Champions - 2nd Time Consecutively",
              "Campus Ambassadorship National Champion - Mr. Ojasvee Singhal",
              "Magic & Lifestyle Departmental Trophy",
              "Design & Digital Arts Departmental Trophy",
              "Dance Departmental Trophy",
              "Drama Departmental Trophy",
              "Music Departmental Trophy",
              "Fine Arts Departmental Trophy",
              "Literary Arts Departmental Trophy",
              "Speaking Arts Departmental Trophy",
              "Journalism Departmental Trophy",
            ]}
          />
          <PastAchievementCard
            name = "50th Edition [2020-21]"
            items={[
              "Overall Champions in the Golden Jubilee Year",
              "Campus Ambassadorship Program Runners Up - Mr. Kunal Naker",
            ]}
          />
          
          <PastAchievementCard
            name = "43rd Edition [2013-14]"
            items={[
              "Overall 1st Runners Up",
              "Music Departmental Trophy"
            ]}
          />
          
          <PastAchievementCard
            name = "26th Edition [1996-97]"
            items={[
              "Overall Champions",
            ]}
          />

        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default MoodIndigoPage;
