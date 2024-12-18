import React from "react";
import './PastTeams.css';
import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import TextCard from "../../components/TextCard.js";
import TeamDropdown from "../../components/TeamDropdown.js";

function Team2020() {  
  return(
    <div className = "past-team-body">
      <div>
          <Navbar/>
      </div>
      <div className="past-team-main">
        <div className="past-team-header">
          2020-21
        </div>
        <div className="past-team-coordinators">
          <TextCard className="topcore-card" name="Aditya Birawat" position="Cultural Secretary"/>
        </div>
        <div className="past-team-header"> General Coordinators </div>
        <div className="past-team-coordinators">
          <TextCard name="Anurag Mali" position="Gaming and Sports"/>
          <TextCard name="Parth Shah" position="Gaming and Sports"/>
          <TextCard name="Shatakshi" position="Media and Graphics"/>
          <TextCard name="Zoheb Karmali" position="Media and Graphics"/>
          <TextCard name="Riddhish Hathi" position="Music"/>
          <TextCard name="Abhiraj Dixit" position="Music"/>
          <TextCard name="Tanuj Visaria" position="Corporate Events"/>
          <TextCard name="Yashas Ruparelia" position="Corporate Events"/>
          <TextCard name="Arshaan Hafiz" position="Fashion"/>
          <TextCard name="Fiza Khan" position="Fashion"/>
          <TextCard name="Hetvi Oza" position="Fine Arts"/>
          <TextCard name="Anshika Chaudhary" position="Fine Arts"/>
          <TextCard name="Sachi Desai" position="Drama"/>
          <TextCard name="Dimple Sumbad" position="Drama"/>
          <TextCard name="Yogeshwar Singh" position="Literary Arts"/>
          <TextCard name="Twisha Soni" position="Literary Arts"/>
          <TextCard name="Palak Panchal" position="Dance"/>
          <TextCard name="Hardik Ruparel" position="Dance"/>
          <TextCard name="Preksha Verma" position="Dance"/>
        </div>
      </div>
      <TeamDropdown showCurrent={true}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default Team2020;
