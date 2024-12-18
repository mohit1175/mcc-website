import React from "react";
import './styles/NotFoundPage.css'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function AchievementsPage() {  
  return(
    <div className = "not-found-body">
      <div>
          <Navbar/>
      </div>
      <div className="not-found-main">
        <div className="not-found-header">
        Sorry!
        </div>
        <div className="not-found-text">
          You didn't break the website, but we can't find what you're looking for.
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default AchievementsPage;
