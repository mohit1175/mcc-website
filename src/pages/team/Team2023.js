import React from "react";
import './PastTeams.css';
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import TextCard from "../../components/TextCard.js";
import TeamDropdown from "../../components/TeamDropdown.js";

function Team2023() {  
  return(
    <div className = "past-team-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-team-main">
        <div className="past-team-header">
        2023-24
        </div>
        <div className="past-team-coordinators">
          <TextCard className="topcore-card" name="Krishna Birla" position="Cultural Secretary"/>
          <TextCard className="topcore-card" name="Shivam Jhawar" position="Deputy Cultural Secretary"/>
        </div>
        <div className="past-team-header"> Admin Team </div>
        <div className="past-team-admin-heads">
          <TextCard name="Chehal Agrawal" position="Admin Head"/>
          <TextCard name="Kaavya Dhoot" position="Admin Head"/>
          <TextCard name="Bansi Patel" position="Admin Head"/>
          <TextCard name="Aisha Taurani" position="Admin Head"/>
          <TextCard name="Saniya Walavalkar" position="Admin Head"/>
          <TextCard name="Soham Tatar" position="Admin Head"/>
        </div>
        <div className="past-team-header"> General Coordinators </div>
        <div className="past-team-coordinators">
          <TextCard name="Jalp Vahaluwala" position="Dance"/>
          <TextCard name="Parva Vithlani" position="Dance"/>
          <TextCard name="Mayank Jhakaria" position="Dance"/>
          <TextCard name="Pranav Shetye" position="Drama"/>
          <TextCard name="Khushi Acharya" position="Drama"/>
          <TextCard name="Dhriti Bagle" position="Fashion"/>
          <TextCard name="Manya Chauhan" position="Fashion"/>
          <TextCard name="Pranjay Ghiya" position="Fashion"/>
          <TextCard name="Janhavi Bhagwat" position="Music"/>
          <TextCard name="Aakash Rai" position="Music"/>
          <TextCard name="Gaurav Mehra" position="Gaming and Sports"/>
          <TextCard name="Daksh Nehra" position="Gaming and Sports"/>
          <TextCard name="Suhani Panchal" position="Literary Arts"/>
          <TextCard name="Dishi Mehta" position="Literary Arts"/>
          <TextCard name="Rachel Prakash" position="Fine Arts"/>
          <TextCard name="Ishaan Choudhary" position="Fine Arts"/>
          <TextCard name="Rutvi Patel" position="Fine Arts"/>
          <TextCard name="Manan Pareek" position="Photomedia"/>
          <TextCard name="Harsh Mudliar" position="Photomedia"/>
          <TextCard name="Aditya Pandey" position="Photomedia"/>
          <TextCard name="Manav Pradhan" position="Photomedia"/>
          <TextCard name="Vidhaan Dharia" position="Technicals"/>
          <TextCard name="Shivansh Singh" position="Social Media"/>
          <TextCard name="Shlok Sureka" position="Business Events"/>
          <TextCard name="Gaurav Mehra" position="Website"/>
        </div>
      </div>
      <TeamDropdown showCurrent={true}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default Team2023;
