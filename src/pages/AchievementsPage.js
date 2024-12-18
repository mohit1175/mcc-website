import React from "react";
import { Link } from "react-router-dom";
import './styles/AchievementsPage.css'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import AchievementsDropdown from "../components/AchievementsDropdown.js";

import images from "../assets/images"

function AchievementsPage() {  
  return(
    <div className="achievements-body">
      <div>
          <Navbar/>
      </div>
      <div className="achievements-main">
        <div className="achievements-header">Overall Achievements</div>
        <div className="achievements-text">

          <Link to="youth">
            <div className="achievements-list-parent">
              <img src={images.youth} alt="Mumbai University's Youth Festival"/>
              <div className="achievements-list"> University of Mumbai's Youth Festival <br/> 10 times Overall Champions <br/> 13 times Zonal Champions </div>
            </div>
          </Link>

          <Link to="moodindigo">
            <div className="achievements-list-parent">
              <div className="achievements-list"> IIT Bombay's Mood Indigo <br/> 9 times Overall Champions <br/> [Asia's Largest College Cultural Festival]</div>
              <img src={images.moodi} alt="IIT Bombay's Mood Indigo"/>
            </div>
          </Link>

          <Link to="ipta">
            <div className="achievements-list-parent">
              <img src={images.ipta} alt="Indian People's Theatre Association"/>
              <div className="achievements-list"> Indian People's Theatre Association's <br/> Inter Collegiate Drama Competition <br/> 71 Awards Won </div>
            </div>
          </Link>

          <div className="achievements-list-parent">
            <div className="achievements-list"> SVKM's Narsee Monjee College's Umang <br/> 7 times Overall Champions </div>
            <img src={images.umang} alt="NM College's Umang"/>
          </div>

          <div className="achievements-list-parent">
            <img src={images.malhar} alt="St. Xaviers College's Malhar"/>
            <div className="achievements-list"> St. Xaviers College's Malhar <br/> 4 times Overall Champions </div>
          </div>
          
        </div>
        <AchievementsDropdown showOverall={false}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default AchievementsPage;
