import React from "react";
import './styles/AboutPage.css';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function AboutPage() {  
  return(
    <div className="about-body">
      <div>
          <Navbar/>
      </div>
      <div className="about-main">
        <div className="about-header-parent">
          <div className="about-header">Mithibai</div>
          <div className="about-header">Cultural</div>
          <div className="about-header">Committee</div>
        </div>
        <br/>
        <div className="about-text">
          <p>
          The Mithibai Cultural Committee stands as the pinnacle of Mithibai College's illustrious heritage, embodying over five decades of radiant achievements, unparalleled talent, and a legacy steeped in excellence. Established in 1971, this esteemed organization stands as the heartbeat of cultural prowess within the institution.
          </p>
          <br/>
          <p>
          Representing Mithibai College with grandeur and finesse, the Committee adorns its mantle with participation in distinguished inter-collegiate festivals including the University of Mumbai's prestigious Youth Festival, IIT Bombay's grand extravaganza, Mood Indigo, and NM College's esteemed Umang, amongst others. Internally, the Committee orchestrates the splendid spectacle of the Annual Day, the riveting Mithibai Kshitij, and the captivating Annual Talent Search.
          </p><br/>
          <p>
          The indelible mark left by the Mithibai Cultural Committee resonates far and wide, positioning Mithibai College as an epitome of cultural eminence in the country. This is evidenced by a resplendent history, boasting triumphant victories such as clinching the Mumbai University’s Youth Festival thrice consecutively, reigning supreme at Asia’s largest Cultural Festival, IIT Bombay’s Mood Indigo for four consecutive years 2020,2021,2022,2023 and carving an unmatched legacy as the most successful college in IPTA's storied history, among a plethora of other distinguished accolades.
          </p><br/>
          <p>
          Guided by a revered faculty and fortified by the unwavering support of our esteemed Principal, Vice Principals, Conveners and Teachers, the Committee ceaselessly endeavors to ascend greater summits of cultural brilliance, ceaselessly championing innovation, creativity, and excellence.
          </p>
        </div>
        <div className="about-us-video">
          <iframe src="https://www.youtube.com/embed/nt_LRy5ZyU4?si=_YVXrGvJhEXedtgw" title="Mithibai Cultural Committee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default AboutPage;
